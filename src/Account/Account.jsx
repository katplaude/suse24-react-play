import {useParams} from "wouter";
function Account(){
   const user = useParams()
    return(
        <h1>Hello {user.name}</h1>
    )
}
export default Account