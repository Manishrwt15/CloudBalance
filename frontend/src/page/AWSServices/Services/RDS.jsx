import React from 'react'
import {resources2} from './index.js'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const RDS = () => {
  return (
    <div className='bg-gray-100 h-screen w-full'>
      <table className='border-gray-100 table-auto bg-white rounded-md w-full mt-8'>
                <thead className='border-b-2 border-gray-200'>
                    <tr className='bg-blue-900 text-left text-white'>
                        <th className='p-2'>
                          Resource ID
                          <button className=''><FilterAltIcon fontSize='small'/></button>
                        </th>
                        <th className='p-2'>
                          Resource Name
                          <button className=''><FilterAltIcon fontSize='small'/></button>
                        </th>
                        <th>
                          Engine
                          <button className=''><FilterAltIcon fontSize='small'/></button>
                        </th>
                        <th className='p-2'>
                          Region
                          <button className=''><FilterAltIcon fontSize='small'/></button>
                        </th>
                        <th className='p-2'>
                          Status
                          <button className=''><FilterAltIcon data for this on fontSize='small'/></button>
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        resources2.map((resource) => (
                            <tr key={resource.id} className='border-b border-gray-100  m-8'>
                                <td className='p-2 text-blue-700'>
                                  {resource.resourceId}
                                  <button className='cursor-pointer '><ContentCopyIcon/></button>
                                </td>
                                <td className='p-2'>{resource.name}</td>
                                <td className='p-2'>{resource.engine}</td>
                                <td className='p-2'>{resource.region}</td>
                                <td className='p-2'>{resource.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
      </table>
    </div>
  )
}

export default RDS