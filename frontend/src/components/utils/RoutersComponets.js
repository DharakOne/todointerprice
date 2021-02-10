import React from "react"
import {Route} from "react-router-dom"

export default function RoutersComponent(props){
    return (
      <Route path={props.path}>
        {props.component}
      </Route>
    ) 
  }
  