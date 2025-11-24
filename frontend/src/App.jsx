import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Protected from './components/Protected.jsx'
import Onboarding from './page/Onboarding/Onboarding.jsx'
import CostExplorer from './page/CostExplorer/CostExplorer.jsx'
import UserRoutes from './page/UserManagement/UserRoutes.jsx'
import AwsRoutes from './page/AWSServices/AwsRoutes.jsx'

function App() {
  
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}>
          {UserRoutes()}
          <Route path="onboarding" element={<Onboarding/>}/>
          <Route path="cost" element={<CostExplorer/>}/>
          {AwsRoutes()}
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
