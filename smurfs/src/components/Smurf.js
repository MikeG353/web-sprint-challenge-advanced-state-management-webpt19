import React from 'react'

const Smurf = (props) => {
    return (
        <div className="smurf">
            <p className="smurf-name">Name: {props.smurf.name}</p>
            <p className="smurf-age">Age: {props.smurf.age}</p>
            <p className="smurf-height">Height: {props.smurf.height}</p>
        </div>
    )
}
export default Smurf