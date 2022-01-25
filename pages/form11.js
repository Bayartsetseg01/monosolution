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
             <input type="text" placeholder= "Phone" required id='phone'/> {/* </input> */}
           </div>
           <div className="grid4">
             <label htmlFor='email'> Email </label>
             <input type="text" placeholder="Email" required id='email'/>{/* </input> */}
           </div>
           <div className="grid5">
             <label htmlFor='resume'>Resume</label> 
             <input type='text' placeholder="Upload file" required id='resume' /> {' '}{/* </input> */}
           </div> 
           <div className="grid6">
             <p> Maximum file size: 500 mb File format: pdf, dox, ..</p>
           </div>

          </div>
          
        
             <button type="submit">Send</button> 
  
         </form>
      </div>
     )
 }
 export default Form;


 /* .title {
  font-family: 'Mohave', sans-serif;
  font-weight: Bold;
  font-size: 36px;
  color: #000000;
  letter-spacing:0;
  line-height: 51px;
  opacity: 1;
  margin: 108px 633px 40px 601px;
}
.gri {
  display: grid;
  grid-template-columns: 285px 285px;
  grid-template-rows: 69px 69px 69px;
  grid-gap: 40px;
  margin: auto 360px auto 400px;
}

.gri label{
  font-family: 'Inter';
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0px;
  
  padding-left:12px;
  opacity: 1;
}
.gri input{
  height: 40px;
  width: 280px;
  display:flex;
  border: 1px solid #A7A9AB;
  background: #FFFFFF 0% 0% no-repeat padding-box;
 padding-left:12px; 
}

.text {
  color: #777;
}
.btn {
  display: block;
  width: 150px;
  padding: 8px 0;
  margin: 20px auto;
  background: #eeede0;
  border-radius: 4px;
  color: white;
 
  justify-content: center;
  align-items: center;
} */
