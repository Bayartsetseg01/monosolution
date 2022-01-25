import styles from '../styles/Home.module.css'
 function Form() {
   const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      first: event.target.fname.value,
      last: event.target.lname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      resume: event.target.resume.value,  
    }
    const JSONdata = JSON.stringify(data)

    const response = await fetch('/api/formm', {
      body: JSONdata,

      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await response.json()
    alert(` SUCCESS *-* : ${result.data}`)
  } 
     return(       
       <div className="containers">
         <h1 className={styles.title}>Designer</h1>
         <form onSubmit={handleSubmit}>
           <div className={styles.gri}> 
           <div className= "grid1"> 
             <label htmlFor='fname'> First name </label>
             <input type="text" placeholder="First name" required id='fname'/>{/* </input> */}
           </div>
           <div className="grid2"> 
             <label htmlFor='lname'> Last name </label>
             <input type="text" placeholder="Last name" required id='lname'/>{/* </input> */}
           </div>
           <div className="grid3">
             <label htmlFor='phone'> Phone </label>
             <input type="number" placeholder= "Phone" required id='phone'/> {/* </input> */}
           </div>
           <div className="grid4">
             <label htmlFor='email'> Email </label>
             <input type="text" placeholder="Email" required id='email'/>{/* </input> */}
           </div>
           <div className="grid5">
             <label htmlFor='resume'>Resume</label> 
             <input type='text' placeholder="Upload file" required id='resume' />  {/* </input> */}
           </div> 
           <div className="textt"> Maximum file size: 500 mb 
                                   File format: pdf, dox, .. </div>         
           </div>
             <button type="submit">Send</button> 
  
         </form>
      </div>
     )
 }
 export default Form;


