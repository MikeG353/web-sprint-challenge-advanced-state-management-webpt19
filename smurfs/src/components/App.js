import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getSmurfList } from '../actions'

import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = (props) => {
  useEffect(() => {
    props.getSmurfList();
  }, [])

  return (
    <div className="App">
      <div className="smurf-form">
        <SmurfForm />
      </div>
      <div className="smurf-list">
        <SmurfList />
      </div>      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    is_loading_data: state.is_loading_data,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfList })(App);
