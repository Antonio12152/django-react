import React, { useState, useEffect } from 'react'


const App = () => {
    const [data, newData] = useState([])
    useEffect(() => {
        if (data.length === 0) {
            fetch('api/user')
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [])
    return (
        <div>
            <ul></ul>
        </div>
    )
}

export default App