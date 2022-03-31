import * as React from 'react';
import Sidebar from '../../components/partials/Sidebar';
import UserList from '../../components/users/UserList';


const RoleContainer = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">

          <h1> Roles</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleContainer;
