import React, {useEffect, useState} from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Table = ({data}) => {

    const [tableData, setTableData] = useState([])
    const [sort, setSort] = useState({column: null, direction: 'asc'});
    const cols  = Object.keys(data[0]);

    const getLabel = (key) =>
        key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    }

    useEffect(() => {
        setTableData(data);
    }, [data]);

    const handleSort = (key) => {

        const direction = sort.column === key && sort.direction === 'asc' ? 'desc' : 'asc';

         const sorted = [...tableData].sort((a, b) => {
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
            return 0
        })

        setSort({ column: key, direction })
        setTableData(sorted)
    }

    const renderCellValue = (value) => {
        if (value === null || value === undefined) return '-'

        if (typeof value === 'object') {
            return JSON.stringify(value)
        }

        return value
    }


  return (
    <table className='border-gray-100 table-auto bg-white rounded-md w-full mt-8'>
                <thead className='border-b-2 border-gray-200'>
                    <tr className='bg-blue-900 text-left text-white'>
                        {cols.map((col,index) => (
                            <th key={index}className='p-2'>
                                {getLabel(col)}
                            <button onClick={() => handleSort(col)}><FilterAltIcon fontSize='small'/></button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        (tableData? tableData : data).map((row,index) => (
                            <tr key={index} className='border-b border-gray-200 hover:bg-gray-50'>
                                {cols.map((col) => (
                                    <td key={col} className="p-2">
                                        {renderCellValue(row[col])}
                                        {col === 'resourceId' && (
                                        <button className="ml-2 cursor-pointer" onClick={() => handleCopy(row[col])}>
                                            <ContentCopyIcon fontSize="small" />
                                        </button>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
      </table>
  )
}

export default Table