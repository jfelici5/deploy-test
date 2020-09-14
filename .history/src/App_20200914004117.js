import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Gallery from "./Gallery"
import Main from './Main'
import Novbar from './Navbar'

function App(){
    return(
      <main> 
      <BrowserRouter>  
      <Novbar/>    
      <Switch>
      <Route path = "/gallery" component = {Gallery}/>
      <Route path = "/" component = {Main}/>
      </Switch>
      </BrowserRouter>
        </main>
    )
}

export default App