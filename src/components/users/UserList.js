import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import getUserData from '../../services/users/userData';


const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>
    {
        setUsers(getUserData);
    })
    return (

        <>
        
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
                    {users.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.role!=null ? item.role: "-"}</td>
                            <td>
                                <button className="btn btn-success mr-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    {users.length == 0 &&(
                        <tr className='noData'>
                            <td colSpan={5}>No data found</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </>
    );
};

export default UserList;
