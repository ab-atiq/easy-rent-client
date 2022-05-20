import React, { useEffect, useState } from "react";

function Clock() {
    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return <div style={{ fontSize: "20px", marginBottom: "10px", backgroundColor: '#ffbb55', }}>{clock}</div>;
}

export default Clock;