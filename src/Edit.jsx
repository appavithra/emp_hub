import React,{useState,useEffect} from "react"
import Navbar from "./Navbar"
import {useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"

const Edit = ()=>{

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

    // to get the data automatically in input field,fetch data by id
    let {id} = useParams()
    console.log(id);

    let getApi = async ()=>{
        let {data} = await axios.get("http://localhost:5000/employee/"+id);
        // console.log(data);
        setEmployee(data)
    }

    // console.log(employee);
    useEffect(()=>{
        try{
            getApi()
        }catch(e){
            console.log(e);
        }
    },[])

    //? to get the data automatically in input field,fetch data by id


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
                axios.put("http://localhost:5000/employee/"+id,payload)
                toast.success('Successfully Updated!')
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
            <div className="editContainer">
            <h1>UPDATE THE DETAILS</h1>
            <div className="editInnerContainer">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Enter employee's name" value={username} onChange={handleInput} name="username"/>
                </div>
                <div>
                    <input type="text" placeholder="Enter employee's emale" value={useremail} onChange={handleInput} name="useremail"/>
                </div>
                <div>
                    <button>UPDATE</button>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}

export default Edit