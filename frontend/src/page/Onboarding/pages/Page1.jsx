import React,{useState, useEffect} from 'react'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import page1 from "../../../assets/page1.png";
import StepItem from '../utils/StepItem';
import {trustPolicy}  from '../utils/data';



const Page1 = ({onValidate, formData, setFormData}) => {
    const [show, setShow] = useState(false);

    const copyToClipboard = (text) => {
      console.log("copying text:", text);
      navigator.clipboard.writeText(text);
    };

    useEffect(() => {
      const isValid = formData.arn.trim() !== "" && formData.accountId.trim() !== "";
      onValidate(isValid);
    }, [formData, onValidate]);


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
                onClick={() => copyToClipboard(trustPolicy)}
                className="absolute top-2 right-2 text-xs bg-blue-100 px-3 py-1 border border-blue-500 rounded-md hover:bg-blue-200">
                <ContentCopyIcon fontSize="small" />
              </button>
              <pre className="w-full font-bold">{trustPolicy}</pre>
            </div>
          </StepItem>

          <StepItem number={3}>
            Click on Next to go to the Add permissions page. We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM Role. Click on Next.
          </StepItem>

          <StepItem number={4}>
            In the Role name field, enter the below-mentioned role name, and click on Create Role -
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="flex flex-col items-start">
              <button className="mt-3 inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-3 py-2  hover:bg-blue-200" onClick={() => copyToClipboard("CK-Tuner-Role-dev2")}>
                <ContentCopyIcon fontSize="small" />
                <span className="font-medium">CK-Tuner-Role-dev2</span>
              </button>
            </div>
            {show && <p className='font-small text-blue-700 mt-2'>Click anywhere in a box to copy</p>}
          </StepItem>

          <StepItem number={5}>
            Go to the newly create IAM Role and copy the Role ARN -
            <img
              src={page1}
              alt="IAM Role ARN"
              className="mt-3 w-full h-auto rounded-md border object-contain"
            />
          </StepItem>

          <StepItem number={6}>
            Paste the copied Role ARN below -
            <div className="mt-3 flex  items-center justify-between">
              <div>
                <p className="text-sm">Enter the IAM Role ARN <span className='text-red-600'>*</span></p>
                <input
                  type="text"
                  placeholder="Enter IAM Role ARN"
                  className="w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2 "
                  name="arn"
                  value={formData.arn}  
                  onChange={(e) => setFormData({...formData, arn: e.target.value})}
                />
              </div>
              <div>
                <p className="text-sm">Enter Account ID <span className='text-red-600'>*</span></p>
                <input
                  type="text"
                  placeholder="Enter Account ID"
                  className="w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2 "
                  name="accountId"
                  value={formData.accountId}
                  onChange={(e) => setFormData({...formData, accountId: e.target.value})}  
                />
              </div>
              <div>
                <p className="text-sm">Enter Account Name <span className='text-red-600'>*</span></p>
                <input
                  type="text"
                  placeholder="Enter Account Name"
                  className="w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2 "
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
          </StepItem>
        </ol>
    </>
  )
}

export default Page1