import React, { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const FILTER_DATA = {
  Service: ["AWS Lambda", "Amazon DynamoDB", "Amazon EC2", "Amazon RDS", "Amazon Redshift", "Amazon S3"],
  Instance_Type: ["c5.large","c5.xlarge","db.t3.large","db.t3.medium","db.t3.micro","db.t3.small","db.t4g.medium","m5.large","t3.large","t3.medium"],
  Region: ["ap-south-1","us-east-2","us-west-2"],
};

const Filters = ({ onChange }) => {
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});

  const toggleExpand = (filter) => {
    setExpandedFilter((prev) => (prev === filter ? null : filter));
  };

  const toggleValue = (filter, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [filter]: prev[filter]?.includes(value)
        ? prev[filter].filter((v) => v !== value)
        : [...(prev[filter] || []), value],
    }));
  };

  const resetAll = () => {
    setSelectedValues({});
    setExpandedFilter(null);
  };

  useEffect(() => {
    onChange?.(selectedValues);
  }, [selectedValues, onChange]);

  return (
    <div className="w-72 h-full border border-gray-300 rounded-md bg-white overflow-y-auto">
      <div className="flex items-center justify-between border-b p-3">
        <h1 className="font-semibold">Filters</h1>
        <button onClick={resetAll} className="flex items-center gap-2 text-blue-800 text-sm">
          Reset All <RestartAltIcon fontSize="small" />
        </button>
      </div>

      <div className="px-3 pb-3">
        {Object.keys(FILTER_DATA).map((filter) => (
          <div key={filter} className="mb-2">
            <div onClick={() => toggleExpand(filter)} className="flex items-center gap-3 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100 rounded">
              <input type="checkbox" disabled checked={!!selectedValues[filter]?.length} />
              {filter}
            </div>

            {expandedFilter === filter && (
              <div className="ml-6 space-y-1">
                {FILTER_DATA[filter].map((value) => (
                  <label key={value} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={selectedValues[filter]?.includes(value) || false} onChange={() => toggleValue(filter, value)}/>
                    {value}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
