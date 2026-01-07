import React from 'react'
import page3_1 from '../../../assets/page3_1.png';
import page3_2 from '../../../assets/page3_2.png';
import page3_3 from '../../../assets/page3_3.png';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


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

const Page3 = () => {
  return (
    <>
        <ol className="bg-white mt-6 p-6 rounded-md border border-gray-300 space-y-6">
            <StepItem number={1}>
                Go to  <span className="text-blue-700 underline cursor-pointer">Cost and Usage Reports</span> in the Billing Dashboard and click onCreate report.
            </StepItem>
            
            <StepItem number={2}>
                Name the report as shown below and select the Include resource IDs checkbox -
                <div className='mt-4'>
                    <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-3 py-2">
                        <ContentCopyIcon fontSize="small" />
                        <span className="font-semibold">ck-tuner-275595855473-hourly-cur</span>
                    </div>
                </div>
                <p className="mt-2">Ensure that the following configuration is checked</p>
                <input type="checkbox" name="" id="" placeholder='Include Resource IDs' checked/>
                <p className='mt-2'>Click on Next</p>
                <img src={page3_1} alt="" className="mt-3 rounded-md "/>
            </StepItem>
            
            <StepItem number={3}>
                In Configure S3 Bucket, provide the name of the S3 bucket that was created -
                <p>Ensure that the following configuration is checked</p>
                <input type="checkbox" name="" id="" placeholder='The following default policy will be applied to your bucket' checked />
                <p className='mt-2'>Click on Save</p>
                <div className='flex justify-between items-center'>
                    <img src={page3_2} alt="" className="mt-3 rounded-md "/>
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
                <input type="radio" name="" id="" placeholder='Hourly' checked/>
                <p className='mt-2'>Please make sure these checks are Enabled in Enable report data integration for:</p>
                <input type="checkbox" name="" id="" placeholder='Amazon Athena' checked />
                <img src={page3_3} alt="" className="mt-3 rounded-md "/>
            </StepItem>
            
            <StepItem number={5}>      
                Click on Next. Now, review the configuration of the Cost and Usage Report. Once satisfied, click onCreate Report.
            </StepItem>
        </ol>
    </>
  )
}

export default Page3