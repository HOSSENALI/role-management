import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import getUserData from '../../services/users/userData';
import Modal from 'react-bootstrap/Modal';
import AssignRole from './AssignRole';



const UserList = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        setUsers(getUserData);
    }, [setUsers]);

    const onSubmitAssignRole=(data)=>{
        const userData=users;
        userData.unshift(data);
        setUsers(userData);
        setShowModal(false);
        alert("You have successfully added role")

    }

    return (

        <>

 <div>
                <div style={{ float: "left" }}>
                    <h2>User Lists</h2>
                </div>


                <div style={{ float: "right" }}>
                    <button className="btn btn-success" onClick={handleShowModal}>+ Assign Role</button>
                </div>
            </div>

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
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.role != null ? item.role : "-"}</td>
                            <td>
                                <button className="btn btn-success mr-2">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr className='noData'>
                            <td colSpan={5}>No data found</td>
                        </tr>
                    )}

                </tbody>
            </table>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                animation={true}
                centered
            >
                <AssignRole onSubmit={onSubmitAssignRole} closeModal={handleCloseModal}/>

                </Modal>
        </>
    );
};

export default UserList;
