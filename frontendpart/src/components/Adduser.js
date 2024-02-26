import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [age, setAge] = useState();
  const [phoneno, setPhoneno] = useState();
  const navigate = useNavigate();
  const [ error ,setError]=useState(false)
  const collectData = async () => {
   if(!fname || !lname || !email || !location || !age || !phoneno || !typeof fname === "string"){
    setError(true)
    return false
   }
    console.log(fname, lname, email, location, age, phoneno);
    let result = await fetch("http://localhost:4000/adduser", {
      method: "post",
      body: JSON.stringify({ fname, lname, email, location, age, phoneno }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result)

    if (result) {
      // console.log(result)
      navigate("/userlist");
      // alert("User info added succsessfully");
    }
  };
  return (
    <div className="Adduser userfrom ">
      <h1>Add User Information </h1>
      <from > 
        <div className=" gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="form-control inputfrom"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />{error && !fname && <span className="invalidinput">*** Please Enter Valid First Name</span>}
         
          <input
            type="text"
            placeholder="Last Name"
            className="form-control   inputfrom"
            value={lname}
            required
            onChange={(e) => setLname(e.target.value)}
            // {...register("lname", {
            //   required: "last name is required",
            // })}
          />{error && !lname && <span className="invalidinput">*** Please Enter Valid Last name</span>}
        </div>
        <div className="">
          <input
            type="email"
            placeholder="Email Id"
            className="form-control  inputfrom"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // {...register("email", {
            //   required: "email is required",
            // })}
            
          />{error && !location && <span className="invalidinputlast">*** Please Enter Valid Email</span>}
          <input
            type="text"
            placeholder="Location"
            className="form-control inputfrom"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            // {...register("fname", {
            //   required: "Location is required",
            // })}
          />{error && !location && <span className="invalidinputlast">***Please Enter Valid Location</span>}
        </div>
        <div className=" justify-content-lg-center">
          <input
            type="number"
            placeholder="Age"
            className="form-control fromlast"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            // {...register("age", {
            //   required: "age is required",
            // })}
          />{error && !location && <span className="invalidinputlast">*** Please Enter Valid AGE</span>}
          </div>
      <div>
      <input
            type="number"
            placeholder="Mobile No."
            className="form-control  fromlast "
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            
          />{error && !location && <span className="invalidinputlast">*** Please Enter Valid Phone Number</span>}
      </div>
        
        <button
          type="submit"
          onClick={collectData}
          className="btn btn-outline-dark submitbtn"
        >Submit
        </button>
      </from>
    </div>
  );


  }


export default Adduser;
