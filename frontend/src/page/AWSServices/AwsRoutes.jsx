import React from 'react'
import { Route } from 'react-router-dom';
import EC2 from './Services/EC2'
import ASG from './Services/ASG'
import RDS from './Services/RDS'
import AWSServices from './AWSServices';

const AwsRoutes = () => {
  return (
    <Route path="aws" element={<AWSServices />}>
        <Route path="ec2" element={<EC2 />} />
        <Route path="asg" element={<ASG />} />
        <Route path="rds" element={<RDS />} />
    </Route>
  )
}

export default AwsRoutes