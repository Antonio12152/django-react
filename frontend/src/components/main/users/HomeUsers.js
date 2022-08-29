import React from 'react'

const HomeUsers = (props) => {
    return (
        <div>
            <h3>{props.name} </h3>
            <span>Age: {props.age} </span>
            <span>Country: {props.country} </span>
            <span>Company: {props.company} </span>
        </div>
    )
}
export default HomeUsers