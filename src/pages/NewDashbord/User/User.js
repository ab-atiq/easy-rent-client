import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import './User.css'


const User = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/users/findAll')
            .then(res => res.json())
            .then(data => setAllUsers(data));

    }, []);
    console.log(allUsers)
    return (
        <div className='all-users'>
            <h1>All Users</h1>

            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Id</th>
                        <th className='th-none'>User Password</th>
                    </tr>
                </thead>


                {
                    allUsers.map((data) => <tbody className='alluser-cart-tbody'>
                        <tr>
<<<<<<< HEAD
                            <td>{data.userName}</td>
                            <td>{data.email}</td>
                            <td className='warning'>{data._id}</td>
                            <td className='primary th-none'>{data.password}</td>

                        </tr>
=======
                            <th>User Name</th>
                            <th>User Email</th>
                            <th className='hide-id'>User Id</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
               
       
                {
                allUsers.map((data) => <tbody className='alluser-cart-tbody'>
                <tr>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td className='warning hide-id'>{data._id}</td>
                    <div className="btn-body">
                    <button onClick={() => handleAllDelete(data._id)} className='user-delete-btn' ><DeleteIcon></DeleteIcon></button>
                    </div>
>>>>>>> development

                    </tbody>
                    )
                }

            </table>

        </div>
    )
}

export default User