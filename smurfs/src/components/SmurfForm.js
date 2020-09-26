import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postNewSmurf } from '../actions'


const SmurfForm = (props) => {
    const [newSmurf, setnewSmurf] = useState({
        name: 'enter name',
        age: 'enter age',
        height: 'enter heign in cm'
    })

    const handleChanges = (e) => {
        setnewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.postNewSmurf(newSmurf)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChanges}
                type="text"
                name="name"
                value={newSmurf.name}
            />
            <input
                onChange={handleChanges}
                type="text"
                name="age"
                value={newSmurf.age}
            />
            <input
                onChange={handleChanges}
                type="text"
                name="height"
                value={newSmurf.height}
            />
            <button>Add New Smurf</button>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        // not sure if this is needed since I only want postNewSmurf
        // but I need the post new smurf to have thunk so it needs to be enhanced.
        ...state
    }
}
export default connect(mapStateToProps, {postNewSmurf})(SmurfForm)