import React from 'react'
import {resources} from '../utils/index.js'
import Table from '../utils/Table.jsx'

const EC2 = () => {

  return (
    <div className='bg-gray-100 w-full'>
      <Table data={resources} />
    </div>
  )
}

export default EC2