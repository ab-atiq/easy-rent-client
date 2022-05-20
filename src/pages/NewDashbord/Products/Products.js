import React, { useEffect, useState } from "react";
import ProductCart from './ProductCart';
import './Products.css';
import Swal from 'sweetalert2';

const Products = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  const handleDelete = id => {
    fetch(`http://localhost:5000/api/deleteservices/${id}`, {
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
    const remainig = services.filter(service => service._id !== id);
    setServices(remainig);
        }
        
    });
    }

  return (
    <div className="productsbody">
        <h1>Products</h1>
        <div className="allproduct">
          {services.map((cardata) => (
            <ProductCart 
            key={cardata._id}
            alldata={cardata}
            deletfunc={handleDelete}
            ></ProductCart>
          ))}

        </div>
    </div>
  )
}

export default Products