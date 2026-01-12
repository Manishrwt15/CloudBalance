import React from 'react'
import {resources2} from '../utils/index.js'
import Table from '../utils/Table.jsx'

const RDS = () => {
  return (
    <div className='bg-gray-100  w-full'>
      <Table data = {resources2} />
    </div>
  )
}

export default RDS