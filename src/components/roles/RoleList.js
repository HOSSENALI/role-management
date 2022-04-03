import React, { useEffect, useState } from "react";
import getRolePermissionsData from "../../views/roles/rolePermissionsData";


const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        setRoles(getRolePermissionsData);
    }, [setRoles]);

    return (
        <>
            <h2>Role Lists</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Permissions</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                {/* another way of printing loop */}
                                {Array.prototype.map.call(item.permissions, item => item.name).join(", ")} 
                            </td>
                            <td>
                                <button className="btn btn-success mr-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}

                    {roles.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-danger">
                                No Data found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default RoleList;
