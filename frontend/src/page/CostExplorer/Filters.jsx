import React from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt'


const Filters = () => {
    const filters = ['Service','Instance Type','Account ID','Platform','Region','Usage Type Group','Purchase Option','API Operation','Resource','Tags','Charge Type','Availabilityzone']

  return (
    <div className="w-72 h-full shrink-0 border border-gray-300 rounded-md bg-white overflow-y-auto">
        <div className="flex items-center justify-between border-b p-3">
            <h1 className="font-semibold">Filters</h1>
            <button className="flex items-center justify-between gap-2 text-blue-800 text-sm">
                Reset All <RestartAltIcon fontSize="small" />
            </button>
            </div>

        <div className="p-3 space-y-2">
            <p className="text-blue-700 text-sm"> No filters currently added.</p>
            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-400 rounded-md"/>
        </div>

        <div className="px-3 pb-3">
            {filters.map((filter, index) => (
                <label key={index} className="flex items-center gap-3 py-2 text-sm">
                <input type="checkbox" className="h-4 w-4" />
                {filter}
                </label>
            ))}
        </div>
    </div>
  )
}

export default Filters