import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
          <Link to='/admin'>  <h1>dashboard page</h1></Link>
        </div>
    );
};

export default Dashboard;