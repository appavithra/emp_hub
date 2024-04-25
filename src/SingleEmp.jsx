import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const SingleEmp = () => {

    let navigate = useNavigate()

    let [emp,setEmp] = useState("")

    //hook--> we can access the parameter(slug) that is present in url by destructing the particular slug
    let {id} = useParams()
    console.log(id);

    // resolve promise -->async and await
    let getApi = async ()=>{
        let {data} = await axios.get("http://localhost:5000/employee/"+id);
        // console.log(data);
        setEmp(data)
    }

    console.log(emp);
    useEffect(()=>{
        try{
            getApi()
        }catch(e){
            console.log(e);
        }
    },[])



  return (
    <>
        <div className="viewmoreContainer">
        <section className='singleEmp'>
            <h3><span>ID : </span> {emp.id}</h3>
            <h3><span>USERNAME :</span> {emp.username}</h3>
            <h3><span>USEREMAIL : </span>{emp.useremail}</h3>
            
        </section>
        <div id='viewbuttons'>
                <button onClick={()=>navigate(-1)}>GO-BACK</button>
                <button onClick={()=>navigate("/")}>HOME</button>
        </div>
        </div>
    </>
  )
}

export default SingleEmp
