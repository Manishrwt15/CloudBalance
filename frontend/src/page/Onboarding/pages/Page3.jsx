import React from 'react'
import page3_1 from '../../../assets/page3_1.png';
import page3_2 from '../../../assets/page3_2.png';
import page3_3 from '../../../assets/page3_3.png';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StepItem from '../utils/StepItem';

const Page3 = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

  return (
    <>
        <ol className="bg-white mt-6 p-6 rounded-md border border-gray-300 space-y-6">
            <StepItem number={1}>
                Go to  <span className="text-blue-700 underline cursor-pointer">Cost and Usage Reports</span> in the Billing Dashboard and click onCreate report.
            </StepItem>
            
            <StepItem number={2}>
                Name the report as shown below and select the Include resource IDs checkbox -
                <div className='mt-4'>
                    <button className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-3 py-2" onClick={() => copyToClipboard("ck-tuner-275595855473-hourly-cur")}>
                        <ContentCopyIcon fontSize="small" />
                        <span className="font-semibold">ck-tuner-275595855473-hourly-cur</span>
                    </button>
                </div>
                <p className="mt-2">Ensure that the following configuration is checked</p>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked disabled />
                    Include Resource IDs
                </label>
                <p className='mt-2'>Click on Next</p>
                <img src={page3_1} alt="" className="mt-3 w-full h-auto rounded-md border object-contain"/>
            </StepItem>
            
            <StepItem number={3}>
                In Configure S3 Bucket, provide the name of the S3 bucket that was created -
                <p>Ensure that the following configuration is checked</p>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked disabled />
                    The following default policy will be applied to your bucket
                </label>
                <p className='mt-2'>Click on Save</p>
                <div className='flex justify-between items-center'>
                    <img src={page3_2} alt="" className="mt-3 w-full h-auto rounded-md border object-contain "/>
                </div>
            </StepItem>

            <StepItem number={4}>
                In the Delivery options section, enter the below-mentioned Report path prefix -
                <div className='mt-4'>
                    <p>Report path prefix:</p>
                    <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-3 py-2">
                        <ContentCopyIcon fontSize="small" />
                        <span className="font-semibold">275595855473</span>
                    </div>
                </div>
                <p className='mt-4'>Additionally, ensure that the following checks are in place</p>
                <p>Time granularity:</p>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="radio" defaultChecked disabled />
                    Hourly
                </label>
                <p className='mt-2'>Please make sure these checks are Enabled in Enable report data integration for:</p>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked disabled />
                    Amazon Athena
                </label>
                <img src={page3_3} alt="" className="mt-3 w-full h-auto rounded-md border object-contain "/>
            </StepItem>
            
            <StepItem number={5}>      
                Click on Next. Now, review the configuration of the Cost and Usage Report. Once satisfied, click onCreate Report.
            </StepItem>
        </ol>
    </>
  )
}

export default Page3