import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css'
import ManageAllOrderCart from './ManageAllOrderCart'
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const ManageAllOrder = () => {
    // lerader vai er order
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://guarded-taiga-13015.herokuapp.com/api/find/singleCarRent')
        .then(res => res.json())
        .then(data => setAllOrder(data));

    }, []);


    const handleDelete = id => {
        fetch(`https://guarded-taiga-13015.herokuapp.com/api/find/deletesingleCarRent/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result.message){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Order has been Deleted',
                showConfirmButton: false,
                timer: 1500
            })
        const remainig = allOrder.filter(service => service._id !== id);
        setAllOrder(remainig);
            }
            
        });
        }
        // rony baier order
    const [secallOrder, setSecAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://guarded-taiga-13015.herokuapp.com/api/allOrders')
        .then(res => res.json())
        .then(data => setSecAllOrder(data));

    }, []);

    const handleDeleteSec = id => {
        fetch(`https://guarded-taiga-13015.herokuapp.com/api/deleteallOrders/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result.message){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Order has been Deleted',
                showConfirmButton: false,
                timer: 1500
            })
        const remainig = secallOrder.filter(service => service._id !== id);
        setSecAllOrder(remainig);
            }
            
        });
        }

  return (
    <div className="manageallorderbody">
        <h1>ManageAllOrder {allOrder.length}</h1>
        <div className="manageallordercart">
        {
            allOrder.map(data => <ManageAllOrderCart
            alldata={data}
            key={data._id}
            deletfunc={handleDelete}
            ></ManageAllOrderCart>)
        }
        </div>
        <br />
        <h1>ManageAllOrder {secallOrder.length}</h1>
        <div className="manageallordercart">
        {
            secallOrder.map(data => <div 
            key={data._id}>
                <p><strong>{data.fullName}</strong></p>
                <p>{data.userId}</p>
                <p>{data.address}</p>
                <p>{data.year}</p>
                <p>{data.division}</p> 
                <p>{data.serviceId}</p> 
                <button onClick={() => handleDeleteSec(data._id)} className="delete-btn" ><DeleteIcon></DeleteIcon></button>              
            </div>)
        }
        </div>
    </div>
  )
}

export default ManageAllOrder