import { Route } from "react-router-dom"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const Routes = () => {
    
    return(
        <Switch>
            <Route path="/sss"><Home/></Route>
            <Route exact path="/"><Login/></Route>
            <Route path="/Register"><Register/></Route>
        </Switch>
    )
}