import {useState} from "react";
import Header from "./components/Header.js";

const App = () =>{
    const [users,setUsers] = useState([
        {
            name: "Eli"
        },
        {
            name: "John"
        },
        {
            name: "Roy"
        }
    ]);
    
    const [show, setShow] = useState(true);

    function deleteName(id){
        setUsers(users.filter((a,index)=>id !== index))
    }
    function handleShow(){
        setShow(!show);
    }
    return(
        <div>
        <Header title="Now I can add title from here!"/>
        {
            show && users.map((user, index)=>{
                    return (
                        <div key={index}>
                            <h1>{user.name}</h1>
                            <button onClick={deleteName.bind(this,index)}></button>
                        </div>
                    )
                })
        }
        <button onClick={handleShow}>Toggle Show</button>
        </div>
    ); 
}

export default App;