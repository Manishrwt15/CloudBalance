import React from 'react'
import page2_1 from '../../../assets/page2_1.png';
import page2_2 from '../../../assets/page2_2.png';
import page2_3 from '../../../assets/page2_3.png';

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

const Page2 = () => {
  return (
    <>
        <ol className="bg-white mt-6 p-6 rounded-md border border-gray-300 space-y-6">
          <StepItem number={1}>
           Go to the <span className="text-blue-700 underline cursor-pointer">CK-Tuner-Role</span>.
           <img src={page2_1} alt="" className="mt-3 rounded-md border"/>
          </StepItem>

          <StepItem number={2}>
            In Permission policies, click on Add permissions  &gt; Attach Policy.
            <img src={page2_2} alt="" className="mt-3 rounded-md border"/>
          </StepItem>

          <StepItem number={3}>
            Filter by Type &gt; Customer managed then search for cktuner-CostAuditPolicy, cktuner-SecAuditPolicy, cktuner-TunerReadEssentials and select them.
            <img src={page2_3} alt="" className="mt-3 rounded-md border"/>
          </StepItem>

          <StepItem number={4}>      
            Now, click on Add permissions
          </StepItem>
          
        </ol>
    </>
  )
}

export default Page2