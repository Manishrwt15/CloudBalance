import React from 'react'

const GroupBy = () => {

    const groupByOptions = ['Service','Instance Type','Account ID','Platform','Region','Usage Type Group']

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center flex-wrap gap-3">
            <h1 className="font-bold">Group By:</h1>

            {groupByOptions.map((option, index) => (
              <button
                key={index}
                className="bg-white px-4 py-2 rounded-md text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition">
                {option}
              </button>
            ))}

            <select className="bg-white px-4 py-2 rounded-md text-blue-700 font-semibold border">
              <option>More</option>
              <option>Tag</option>
              <option>Linked Account</option>
              <option>Purchase Option</option>
              <option>Operation</option>
              <option>Record Type</option>
              <option>Savings Plan</option>
              <option>Reservation</option>
              <option>Amortized</option>
            </select>
        </div>
    </div>
  )
}

export default GroupBy