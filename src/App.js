import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Gallery from "./Gallery"
import Main from './Main'

function App(){
    return(
        <main> 
      <BrowserRouter>      
      <Switch>
      <Route exact path = "/" component = {Main}/>
      <Route exact path = "/gallery" component = {Gallery}/>
      </Switch>
      </BrowserRouter>
        </main>
    )
}

export default App