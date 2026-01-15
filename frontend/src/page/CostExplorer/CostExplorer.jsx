import React, { useEffect, useState } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart'
import TuneIcon from '@mui/icons-material/Tune'
import Filters from './utils/Filters'
import GroupBy from './utils/GroupBy'
import Table from './utils/Table'
import Chart from './Chart'
import { useCosts } from '../../hook/useCosts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useSelector} from 'react-redux';


const CostExplorer = () => {
  const {costs, loading, error, fetchCosts } = useCosts();

  const [chartType, setChartType] = useState('mscolumn2d')
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [groupBy, setGroupBy] = useState('SERVICE');
  const [filters, setFilters] = useState({});
  const [startDate, setStartDate] = useState(dayjs('2025-01-01'));
  const [endDate, setEndDate] = useState(dayjs('2025-05-01'));
  const selectedAccount = useSelector(state => state.account.selectedAccount);

  useEffect(() => {
    const data = {
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
      groupBy,
      filters,
      accountId: selectedAccount || undefined
    };
    fetchCosts(data);
  }, [groupBy, startDate, endDate, filters, selectedAccount, fetchCosts]);



  return (
    <div className="w-full  bg-gray-200 p-7 h-[calc(100vh-70px)] overflow-y-auto">
      <div>
        <h1 className="text-3xl font-semibold">Cost Explorer</h1>
        <p className="mt-4 text-gray-700">
          How to always be aware of cost changes and history.
        </p>
      </div>

      <div className="border border-gray-100 rounded-md mt-6 p-6 bg-gray-100 flex items-center justify-between">
          <GroupBy selectedGroupBy={groupBy} setSelectedGroupBy={setGroupBy} costs={costs} loading={loading} error={error}/>
          <div className='flex items-center gap-8'>
            <div className="month flex items-center gap-4">

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex gap-2 w-80">
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                      maxDate={endDate}
                      slotProps={{
                        textField: {
                          size: "small",
                          className: "bg-white rounded-md"
                        }
                      }}
                    />

                    <DatePicker
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                      minDate={startDate}
                      slotProps={{
                        textField: {
                          size: "small",
                          className: "bg-white rounded-md"
                        }
                      }}
                    />
                </div>
              </LocalizationProvider>


            </div>
            <button onClick={() => setFilterIsOpen(!filterIsOpen)} className={`px-3 py-2 border border-gray-400 rounded-md hover:bg-blue-700 hover:text-white transition ${filterIsOpen ? 'bg-blue-700 text-white' : ' '}`}>
              <TuneIcon />
            </button>
          </div>
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
            <Chart chartType={chartType} costs={costs} loading={loading} error={error}/>
          </div>

          {filterIsOpen && <Filters onChange={setFilters}/>}
        </main>
      </div>

      <div className="mt-6 p-4 bg-blue-300  text-center rounded-md">
        <p>We are showing top 1000 records by cost.</p>
      </div>

      <Table costs={costs} loading={loading} error={error}/>
    </div>
  )
}

export default CostExplorer
