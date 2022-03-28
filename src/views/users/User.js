import * as React from 'react';


const User = () => {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-3 mt-3">
              <ul className="list-group">
                <li className="list-group-item active">Users</li>
                <li className="list-group-item">Roles</li>
                <li className="list-group-item">Permissions</li>
              </ul>
            </div>
            <div className="col-9 mt-3">
              <h2>User Lists</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nur</td>
                    <td>nur</td>
                    <td>Admin</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default User;
  