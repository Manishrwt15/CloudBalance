import React from 'react'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import page1 from "../../../assets/page1.png";


const trustPolicy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`;

const StepItem = ({ number, children }) => {
  return (
    <li className="flex gap-4 items-start">
      <span className="w-7 h-7 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm shrink-0">
        {number}
      </span>
      <div className="leading-relaxed w-full">{children}</div>
    </li>
  );
};


const Page1 = () => {

    const copyToClipboard = () => {
      navigator.clipboard.writeText(trustPolicy);
    };


  return (
    <>
        <ol className="bg-white mt-6 p-6 rounded-md border border-gray-300 space-y-6">
          <StepItem number={1}>
            Log into AWS account <span className="text-blue-700 underline cursor-pointer">Create an IAM Role</span>.
          </StepItem>

          <StepItem number={2}>
            In the Trusted entity type section, select Custom trust policy. Replace the prefilled policy with the policy provided below -
            <div className="relative bg-gray-50 text-blue-700 rounded-lg text-sm border border-gray-300 p-4 mt-3 h-96 overflow-auto">
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 text-xs bg-blue-100 px-3 py-1 border border-blue-500 rounded-md hover:bg-blue-200">
                <ContentCopyIcon fontSize="small" />
              </button>
              <pre className="w-full">{trustPolicy}</pre>
            </div>
          </StepItem>

          <StepItem number={3}>
            Click on Next to go to the Add permissions page. We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM Role. Click on Next.
          </StepItem>

          <StepItem number={4}>
            In the Role name field, enter the below-mentioned role name, and click on Create Role -
            <div>
              <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-3 py-2">
                <ContentCopyIcon fontSize="small" />
                <span className="font-medium">CK-Tuner-Role-dev2</span>
              </div>
            </div>
          </StepItem>

          <StepItem number={5}>
            Go to the newly create IAM Role and copy the Role ARN -
            <img
              src={page1}
              alt="IAM Role ARN"
              className="mt-3 rounded-md border"
            />
          </StepItem>

          <StepItem number={6}>
            Paste the copied Role ARN below -
            <div className="mt-3">
              <p className="text-xs">Enter the IAM Role ARN</p>
              <input
                type="text"
                placeholder="Enter IAM Role ARN"
                className="w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2 "
              />
            </div>
          </StepItem>
        </ol>
    </>
  )
}

export default Page1