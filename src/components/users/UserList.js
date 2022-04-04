import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import getUserData from '../../services/users/userData';
import Modal from 'react-bootstrap/Modal';
import AssignRole from './AssignRole';
import AssignRoleEdit from './AssignEditRole';



const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editData, setEditData] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    useEffect(() => {
        setUsers(getUserData);
    }, [setUsers]);

    const editUser = (item) => {
        setEditData(item);
        handleShowEditModal();


    }

    const deleteUser = (index) => {
        const userData = users.slice();
        userData.splice(index, 1);
        // const userData = users.filter((item) => item.id !== id);
        setUsers(userData);
        toast.success("You have successfully deleted a role",
        {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000 //2second
        });

    }

    const onSubmitAssignRole = (data) => {
        const userData = users;
        // userData.unshift(data);
        for (let index = 0; index < userData.length; index++) {
            if (userData[index].id === data.id) {
                userData[index] = data;
            }
        }
        setUsers(userData);
        setShowModal(false);
        toast.success("You have successfully assigned a role",
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000 //2second
            });


    }
    const onSubmitAssignRoleEdit = (data) => {
        const userData = users;
        // userData.unshift(data);
        for (let index = 0; index < userData.length; index++) {
            if (userData[index].id === data.id) {
                userData[index] = data;
            }
        }
        setUsers(userData);
        setShowEditModal(false);
        toast.success("You have successfully edited a role",
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000 //2second
            });

    }

    return (

        <>
            <ToastContainer />
            <div>
                <div style={{ float: "left" }}>
                    <h2>User Lists</h2>
                </div>


                <div className='float-end'>
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
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.role != null ? item.role.name : "-"}</td>
                            <td>
                                <button className="btn btn-success mr-2" onClick={() => editUser(item)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
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

            {/* assinging role........................ */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                animation={true}
                centered
            >
                <AssignRole onSubmit={onSubmitAssignRole} closeModal={handleCloseModal} />

            </Modal>

            {/* editing role............... */}
            <Modal
                show={showEditModal}
                onHide={handleCloseEditModal}
                animation={true}
                centered
            >
                <AssignRoleEdit onSubmit={onSubmitAssignRoleEdit} closeModal={handleCloseEditModal} editData={editData} />

            </Modal>
        </>
    );
};

export default UserList;
