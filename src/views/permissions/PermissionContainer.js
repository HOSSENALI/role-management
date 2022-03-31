import * as React from 'react';
import Sidebar from '../../components/partials/Sidebar';
import PermissionList from '../../components/permissions/PermissionList';
import UserList from '../../components/users/UserList';


const PermissionContainer = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">

            {/* <h1> Permissions</h1> */}
            <PermissionList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionContainer;
