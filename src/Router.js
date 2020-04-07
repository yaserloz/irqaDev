import React from 'react'
import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom'
import Index from './screens/Index'
import About from './screens/About/About'
import PostView from './screens/Post/PostView'
import Contact from './screens/Contact/Contact'



// import Contact from './pages/Contact'

const Router = props => {
    return (
        
        <ReactRouter >
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/about" exact component={About} />
                <Route path="/post/:id" exact component={PostView} />
                <Route path="/contact" exact component={Contact} />

            </Switch>
        </ReactRouter>
    )
}

export default Router
