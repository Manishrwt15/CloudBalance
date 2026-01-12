import React from 'react'

const StepItem = ({ number, children }) => {
  return (
    <li className="flex gap-4 items-start">
      <span className="w-7 h-7 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm shrink-0">
        {number}
      </span>
      <div className="leading-relaxed w-full">{children}</div>
    </li>
  )
}

export default StepItem