import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ROLES } from "../src/constants/roles.js";

import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Protected from './routes/Protected.jsx';
import Unauthorized from './components/Unauthorized.jsx';

import Onboarding from './page/Onboarding/Onboarding.jsx';
import CostExplorer from './page/CostExplorer/CostExplorer.jsx';
import AWSServices from './page/AWSServices/AWSServices.jsx';
import EC2 from './page/AWSServices/Services/EC2.jsx';
import ASG from './page/AWSServices/Services/ASG.jsx';
import RDS from './page/AWSServices/Services/RDS.jsx';

import UserManagement from './page/UserManagement/UserManagement.jsx';
import Table from './page/UserManagement/Table.jsx';
import AddUser from './page/UserManagement/Users/AddUser.jsx';
import EditUser from './page/UserManagement/Users/EditUser.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />}>
            
            <Route index element={<Navigate to="user" replace />} />

            <Route element={<Protected allowedRoles={[ROLES.ADMIN, ROLES.READONLY]} />}>
              <Route path="user" element={<UserManagement />}>
                <Route index element={<Table />} />
                <Route path="add" element={<AddUser />} />
                <Route path="edit" element={<EditUser />} />
              </Route>
            </Route>

            <Route element={<Protected allowedRoles={[ROLES.ADMIN]} />}>
              <Route path="onboarding" element={<Onboarding />} />
            </Route>

            <Route element={<Protected allowedRoles={[ROLES.ADMIN, ROLES.READONLY, ROLES.CUSTOMER]} />}>
              <Route path="cost" element={<CostExplorer />} />
            </Route>

            <Route element={<Protected allowedRoles={[ROLES.ADMIN, ROLES.READONLY, ROLES.CUSTOMER]} />}>
              <Route path="aws" element={<AWSServices />}>
                <Route path="ec2" element={<EC2 />} />
                <Route path="asg" element={<ASG />} />
                <Route path="rds" element={<RDS />} />
              </Route>
            </Route>

          </Route>
        </Route>

        {/* Catch all */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
