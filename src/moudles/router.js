import React from 'react'
import Home from '../components/pages/Home'
import Checking from '../components/pages/Checking'
import Movie from '../components/pages/Movie'
import ShowTime from '../components/pages/ShowTime'
import Vip from '../components/pages/Vip'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import ServiceCenter from '../components/pages/ServiceCenter'
import Detial from '../components/pages/Detial'
import { Route,Switch} from 'react-router-dom'

const RouterView = props => {
    return (
        <div>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/checking" component = {Checking} />
                <Route path = "/movie" component = {Movie} />
                <Route path = "/show-time" component = {ShowTime} />              
                <Route path = "/vip" component = {Vip} />  
                <Route path = "/login" component = {Login} />  
                <Route path = "/register" component = {Register} />  
                <Route path = "/service-center" component = {ServiceCenter} /> 
                <Route path = "/detial/:id" component = {Detial} />  
            </Switch>
            

        </div>
    )
}
 // <Redirect from = "**" to = "/not-found"/>   
export default RouterView