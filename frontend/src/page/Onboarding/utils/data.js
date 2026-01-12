import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3'; 

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

const stepsConfig = {
    1: {
      title: "Create an IAM Role",
      desc: "Create an IAM Role by following these steps",
      component: Page1
    },
    2: {
      title: "Add Customer Managed Policies",
      desc: "Create an Inline policy for the role by following these steps",
      component: Page2
    },
    3: {
      title: "Create Cost & Usage Report",
      desc: "Create a Cost & Usage Report by following these steps",
      component: Page3
    }
  };

export { trustPolicy, stepsConfig };