import React from 'react'
import {resources} from '../index.js'
import Table from '../Table.jsx'

const EC2 = () => {

  return (
    <div className='bg-gray-100 w-full'>
      <Table data={resources} />
    </div>
  )
}

export default EC2