import React from 'react';
import './Dashboard.css';
import WidgetContainer from './widgets/WidgetContainer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <WidgetContainer />
    </div>
  );
};

export default Dashboard;
