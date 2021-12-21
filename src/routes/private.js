import { Route,Redirect} from "react-router-dom"
import useAuth from "../hooks/useAuth"

function Private(props){
   const [token] = useAuth()
   if(token){
    return  <Route {...props}/>
}
return <Redirect to="/"/>
   
}

export default Private