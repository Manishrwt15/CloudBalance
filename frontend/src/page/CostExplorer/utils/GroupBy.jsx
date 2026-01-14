import React from 'react'

const GroupBy = ({ selectedGroupBy, setSelectedGroupBy }) => {

    const groupByOptions = ['Service','Instance Type','Account ID', 'Usage Type', 'Platform', 'REGION']

    const handleSelect = (option) => {
     setSelectedGroupBy(option.toUpperCase().replace(' ', '_')); 
    };

    const sortedOptions = selectedGroupBy ? [selectedGroupBy, ...groupByOptions.filter(o => selectedGroupBy !== o.toUpperCase().replace(' ', '_'))]: groupByOptions;

  
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center flex-wrap gap-3">
            <h1 className="font-bold">Group By:</h1>

            {sortedOptions.map((option, index) => {
              const displayOption = groupByOptions.find(o => option === o.toUpperCase().replace(' ', '_')) || option;

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(displayOption)}
                  className={`px-4 py-2 rounded-md font-semibold transition ${
                    selectedGroupBy === displayOption.toUpperCase().replace(' ', '_')
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-blue-700 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {displayOption}
                </button>
              );
            })}

            <select className="bg-white px-4 py-2 rounded-md text-blue-700 font-semibold border"
                value={selectedGroupBy}
                onChange={(e) => handleSelect(e.target.value)}
            >
                <option value="PURCHASE_OPTION">PURCHASE OPTION</option>
                <option value="USAGE_TYPE_GROUP">USAGE TYPE GROUP</option>
                <option value="API_OPERATION">API OPERATION</option>
                <option value="RESOURCE">RESOURCE</option>
                <option value="AVAILABILITY_ZONE">AVAILABILITY ZONE</option>
                <option value="TENANCY">TENANCY</option>
                <option value="LEGAL_ENTITY">LEGAL ENTITY</option>
                <option value="BILLING_ENTITY">BILLING ENTITY</option>
                <option value="COST">COST</option>
            </select>
        </div>
    </div>
  )
}

export default GroupBy