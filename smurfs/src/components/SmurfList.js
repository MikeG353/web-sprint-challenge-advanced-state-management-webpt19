import React from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'

const SmurfList = (props) => {
    console.log(props)
    return(
        <>
            {props.smurfs.map((smurf) => (
                <Smurf 
                    key={smurf.id}
                    smurf={smurf}
                />
            ))}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {})(SmurfList)