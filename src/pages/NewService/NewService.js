import React, { useEffect, useState } from 'react';

const NewService = () => {
    const [newService, setNewService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/getnewService')
        .then(res => res.json())
        .then(data => setNewService(data));

    }, []);
  return (
    <div>
        <h1>NewService{newService.length}</h1>
    </div>
  )
}

export default NewService