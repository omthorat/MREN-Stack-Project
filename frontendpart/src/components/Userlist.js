
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Userlist() {
 let [users,setUsers]= useState([]);
 let [order,setOrder] = useState('ASC')
 useEffect(()=>{
  getUsers();

 },[])
 const getUsers = async ()=>{
  let result = await fetch("http://localhost:4000/userlist");
  result = await result.json();
  setUsers(result);
 }
 const sorting = (col) =>{
  if(order === "ASC"){
    
    const sorted = [...users].sort((a,b)=>a[col].toLowerCase()>b[col].toLowerCase() ? 1 :-1);

    const sorted1=[...users].sort((a, b) =>
  a.age.toString().localeCompare(b.age.toString())
);
    setUsers(sorted,sorted1);
    setOrder("DSC");
  }
  if(order === "DSC"){
    const sorted = [...users].sort((a,b)=>a[col].toLowerCase()<b[col].toLowerCase() ? 1 :-1);
    const sorted1=[...users].sort((a, b) =>
    a.age.toString().localeCompare(b.age.toString()));
    setUsers(sorted,sorted1)
    setOrder("ASC");
  }
 }
 const deleteuser= async(id)=>{
  let result = await fetch(`http://localhost:4000/userinfos/${id}`,{
    method:'Delete'
  });
  result = await result.json()
   if(result){
    // alert("deleted")
    getUsers()
   }
 }
 
  return (
    <div className='container'>
      <table  className='table table-striped table-danger bordered hover container m-auto mt-5 w-75'>
      <thead>
      <tr>
          <th onClick={()=>sorting("fname")}>First Name</th>
          <th onClick={()=>sorting("lname")} >Last Name</th>
          <th onClick={()=>sorting("email")} >Email</th>
          <th onClick={()=>sorting("location")}>Location</th>
          <th onClick={()=>sorting("age","number")}>Age</th>
          <th onClick={()=>sorting("phoneno","number")}>Mobile No.</th>
          <th>Oprations</th>
        </tr>
      </thead>
      <tbody>
      {
            users.map((item,i)=>{
              return <tr key={i}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td>{item.age}</td>
                <td>{item.phoneno}</td>
                <td><Link to={"/update/"+item._id}><button className="btn btn-sm btn-primary m-1">Update</button></Link>
                <button onClick={()=>deleteuser(item._id)} className="btn btn-sm btn-danger">Delete</button></td>
              </tr>

            })
          }
    
        
      </tbody>
    </table>



      {/* <table className='table  table-danger maintable '>
      <thead className='container' >
        <tr className="p-2" >
          <th className="tablehead">First Name</th>
          <th className=" tablehead">Last Name</th>
          <th className=" tablehead">Email</th>
          <th className=" tablehead">Location</th>
          <th className=" tablehead">Age</th>
          <th className=" tablehead">Mobile No.</th>
        </tr>
      </thead>
      <tbody>
      
          {
            users.map((item,i)=>{
              return <tr key={i}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td>{item.age}</td>
                <td>{item.phoneno}</td>
              </tr>

            })
          }
    
        </tbody>
      </table> */}
    </div>
  )
}
export default Userlist