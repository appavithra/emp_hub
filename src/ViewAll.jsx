import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"
import {NavLink} from  "react-router-dom"
import { RiEdit2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdExpandMore } from "react-icons/md";



const ViewAll = ()=>{
    let [employee,setEmployee] = useState([])

    // resolev promise using async and await
    let fetchApi = async () =>{
        let {data} = await axios.get("http://localhost:5000/employee");
        setEmployee(data)
    }
    console.log(employee);

    // [] --> compoundDidmount() --> only once
    useEffect(()=>{
        try{
            fetchApi()
        }catch(e){
            console.log(e);
        }
    },[])

    //delete emp 
    let deleteEmp =(id)=>{
        console.log(id);
        axios.delete("http://localhost:5000/employee/"+ id);
        window.location.assign("/viewall");
    }

    return(
        <>
            <Navbar/>
            <h1 id="viewHead">Information of All the Employees</h1>
            <div className="tableContainer">
            <table>
                <thead>
                    <th>ID</th>
                    <th>EMP NAME</th>
                    <th>EMP EMAIL</th>
                    <th colSpan={3}> MORE OPTION</th>
                </thead>
                <tbody>
                    {employee.map(val =>{
                        console.log(val);
                        return(
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.username}</td>
                                <td>{val.useremail}</td>
                                <td>
                                    <NavLink to = {`/singleemp/${val.id}`}>
                                        <button id="tableMore"><MdExpandMore /></button>
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to = {`/edit/${val.id}`}>
                                        <button id="tableEdit"><RiEdit2Fill /></button>
                                    </NavLink>
        
                                </td>
                                <td >
                                    <button onClick={()=>deleteEmp(val.id)} id="tableDel">
                                    <ImCross />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ViewAll