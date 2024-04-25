import React,{useState} from "react"
import Navbar from "./Navbar"
import {useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"

const Home = ()=>{

    let [employee,setEmployee] = useState({
        username : "",
        useremail : ""
    })

    let {username,useremail} = employee

    let navigate = useNavigate()

    let handleInput = (a)=>{
        // console.log(a);
        let {name,value} = a.target
        setEmployee({...employee,[name]:value})
        
    }

    let handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log(employee);
        
        // logic to send data to server
        try{
            if(username === "" && useremail===""){
                alert("Please fill name and email")
            }else if(username === ""){
                alert("Please fill name ")
            }else if (useremail === ""){
                alert("Please fill email")
            }else{
                let payload = {username,useremail}
                axios.post("http://localhost:5000/employee",payload)
                toast.success('Successfully Added!')
                navigate("/viewall")
                
            }
            
        }catch(e){
            console.log(e);
        }finally{
            setEmployee({
                username : "",
                useremail : ""
            })
        }

    }
    return(
        <>
            <Navbar/>
                <div className="innerContainer">
                <div className="leftContainer">
                    
                    <h2>WELCOME TO HOME PAGE</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="Enter employee's name" value={username} onChange={handleInput} name="username"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter employee's email" value={useremail} onChange={handleInput} name="useremail"/>
                        </div>
                        <div>
                            <button>ADD</button>
                        </div>
                    </form>
                </div>
                <div className="rightContainer">  
                </div>
                </div>
            
            
        </>
    )
}

export default Home