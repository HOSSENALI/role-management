import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import getUserData from '../../services/users/userData';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import getRoleMasterData from '../../services/roles/roleMasterData';
import getUserHasNoRoleData from '../../services/users/userHasNoRoleData';


const AssignRole = (props) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [user, setUser] = useState("");
    const [role, setRole] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const changeUser = (e) => {
        setUser(e.target.value);
    }
    const changeRole = (e) => {
        setRole(e.target.value);
    }
    const submitRole = () => {
        if (user === "" || role === "") {
            alert("Please select all value");
            return false;
        }
        const userData = JSON.parse(user);
        const roleData = JSON.parse(role);
        const data = {
            id: 1000,
            username: userData.username,
            name: userData.name,
            password: userData.password,
            role: roleData.name
        };
        props.onSubmit(data);


    }

    useEffect(() => {
        setUsers(getUserData);
        setRoles(getRoleMasterData);

    }, [setUsers])
    return (

        <>
            <Modal.Header closeButton>
                <Modal.Title>Assign Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Select User
                        </Form.Label>
                        <Col sm="6" >
                            <select className='form-control' style={{ appearance: "revert" }} onChange={changeUser} required>
                                <option>Please select a users</option>
                                {users.map((item, index) => (

                                    item.role === null &&
                                    <option value={JSON.stringify(item)} key={item.id}>{item.username}</option>
                                ))}

                            </select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Select Role
                        </Form.Label>
                        <Col sm="6">
                            <select className='form-control' style={{ appearance: "revert" }} onChange={changeRole} required>
                                <option>Please select a role</option>
                                {roles.map((item, index) => (
                                    <option value={JSON.stringify(item)} key={item.id}>{item.name}</option>
                                ))}

                            </select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-danger' onClick={props.closeModal}>
                    Close
                </button>
                <button className='btn btn-success' onClick={submitRole}>
                    Save
                </button>
            </Modal.Footer>
        </>
    );
};

export default AssignRole;
