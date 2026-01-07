import React, { useState } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart'
import TuneIcon from '@mui/icons-material/Tune'

import BarChart from './Charts/BarChart'
import TimeChart from './Charts/TimeChart'
import WaterfallChart from './Charts/StackedChart'
import Filters from './Filters'

const CostExplorer = () => {
  const groupByOptions = ['Service','Instance Type','Account ID','Platform','Region','Usage Type Group']

  const [chartType, setChartType] = useState('mscolumn2d')
  const [filterIsOpen, setFilterIsOpen] = useState(false)

  return (
    <div className="w-full h-full bg-gray-200 p-7 overflow-y-auto">
      <div>
        <h1 className="text-3xl font-semibold">Cost Explorer</h1>
        <p className="mt-4 text-gray-700">
          How to always be aware of cost changes and history.
        </p>
      </div>

      <div className="border border-gray-100 rounded-md mt-6 p-6 bg-gray-100">

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

          <button onClick={() => setFilterIsOpen(!filterIsOpen)} className={`px-3 py-2 border border-gray-400 rounded-md hover:bg-blue-700 hover:text-white transition ${filterIsOpen ? 'bg-blue-700 text-white' : ' '}`}>
            <TuneIcon />
          </button>
        </div>

        <div className="bg-white rounded-md mt-6 p-6 w-full">

          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold">Cost ($)</h1>

            <div className="border border-gray-400 rounded-md flex w-32">
              <button className="flex-1 p-2 border-r hover:bg-gray-100" onClick={() => setChartType('mscolumn2d')}>
                <BarChartIcon />
              </button>
              <button className="flex-1 p-2 border-r hover:bg-gray-100" onClick={() => setChartType('msline')}>
                <TimelineIcon />
              </button>
              <button className="flex-1 p-2 hover:bg-gray-100" onClick={() => setChartType('stackedcolumn2d')}>
                <WaterfallChartIcon />
              </button>
            </div>
          </div>

          <main className="flex gap-6">
            <div className="flex-1 min-w-0">
              {chartType === 'mscolumn2d' && <BarChart />}
              {chartType === 'msline' && <TimeChart />}
              {chartType === 'stackedcolumn2d' && <WaterfallChart />}
            </div>

            {filterIsOpen && <Filters/>}
          </main>
        </div>

        <div className="mt-6 p-4 bg-blue-300 rounded-md">
          <p>We are showing top 1000 records by cost.</p>
        </div>
      </div>
    </div>
  )
}

export default CostExplorer
