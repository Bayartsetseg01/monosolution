import { Button } from "reactstrap";
import {useState, useEffect} from "react";
import { useForm} from "react-hook-form";

import styles from "../styles/Home.module.css";


function Form() {
  const {register, formState:{errors}} = useForm();
  const initialValues = {fname: "", lname: "",phone: "", email: "", resume: ""};
  const [formValue, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange =(e) => {
    const{name, value} = e.target;
    setFormValues({...formValue, [name]: value});


  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
   const data = {
     first: event.target.fname.value,
     last: event.target.lname.value,
     phone: event.target.phone.value,
     email: event.target.email.value,
     resume: event.target.resume.value,
   };
   const JSONdata = JSON.stringify(data);

   const response = await fetch("/api/formm", {
     body: JSONdata,

     headers: {
       "Content-Type": "application/json",
     },                   
     method: "POST",
   });

   const result = await response.json();
   alert(` SUCCESS *-* : ${result.data}`);
 };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.fname){
      errors.fname = "first req";
    }
    if(!values.lname){
      errors.lname = "last req";
    }
    if(!values.phone){
      errors.phone = "phone req";
    }
    if(!values.email){
      errors.email = "email req";
    }
    if(!values.resume){
      errors.resume = "resume req";
    }
    return errors;
  };
  
  return (
    <div className="containers">
      
      <pre>{ JSON.stringify(formValue, undefined, 2)}</pre> 
      <h1 className="formTitle">Designer</h1>
      <form onSubmit={handleSubmit}>
        <div className="gri">
          <div className="grid1">
            <label htmlFor="fname"> First name </label>
            <input 
              type="text" 
              name= "fname"
              placeholder="First name" 
              required id="fname" 
              value={formValue.fname} /*{...register('fname', {required:true})}*/ 
              onChange = {handleChange}
              />
            
            {/* {errors.fname && errors.fname.type == "required" && <p> enter</p>} */}
              <p>{formErrors.fname}</p>
          </div>
          
          <div className="grid2">
            <label htmlFor="lname"> Last name </label>
            <input type="text" 
              name= "lname"
              placeholder="Last name" 
              required id="lname" 
              value={formValue.lname} 
              onChange = {handleChange}
            />
            {/* </input> */}
            <p>{formErrors.lname}</p>
          </div>
          <div className="grid3">
            <label htmlFor="phone"> Phone </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{8}"
              required id="phone"
              value={formValue.phone}
              onChange = {handleChange}
            />{" "}
            {/* </input> */}
            <p>{formErrors.phone}</p>
          </div>
          
          <div className="grid4">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              required id="email"
              value={formValue.email}
              onChange = {handleChange}
            />
             <p>{formErrors.email}</p>
            {/* </input> */}
          </div>
          
          <div className="grid5">
            <label htmlFor="resume">Resume</label>
            {/*  <input type='text' placeholder="Upload file" accept= ".pdf, .doc" required id='resume' />  {/* </input> */}
            <div class="upload-btn-wrapper">
              <button class="btn1"> Upload file</button>
            <input 
              type="file"
              name="resume" 
              accept=".pdf, .doc" 
              required id="resume" 
              value={formValue.resume}
              onChange = {handleChange} 
              />
            </div>
            {/* <p>{formErrors.resume}</p> */}
          </div> 
          <div className="textt">
            {" "}
            Maximum file size: 500 mb File format: pdf, dox, ..{" "}
          </div>
        </div>
        <div className="btn">
          {" "}
          <button class="button2" type="submit">
            Send
          </button>{" "}
          
        </div>
      </form>
    
    </div>
  )
}
export default Form;
