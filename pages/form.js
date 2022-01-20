import styles from '../styles/Home.module.css'
 function Form() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.fname.value,
      last: event.target.lname.value,
      phot: event.target.phone.value,
      e: event.target.email.value,
      r: event.target.resume.value,
  
    }

    const JSONdata = JSON.stringify(data)

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
     return(       
       //<Card>
         <form  onSubmit={handleSubmit} >
           <div>
             <h1 className={styles.title}>Designer</h1>
             <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap" rel="stylesheet"></link>
           </div>
           <div class={styles.gri}>
           <div class= "grid1"> 
             <label htmlFor='fname'> First name </label>
             <input type='text' placeholder="First name" required id='fname'></input>
           </div>
           <div class="grid2"> 
             <label htmlFor='lname'> Last name </label>
             <input type='text' placeholder="Last name" required id='lname'></input>
           </div>
           <div class="grid3">
             <label htmlFor='phone'> Phone </label>
             <input type='text' placeholder= "Phone" required id='phone'></input>
           </div>
           <div class="grid4">
             <label htmlFor='email'> Email </label>
             <input type='text' placeholder="Email" required id='email'></input>
           </div>
           <div class="grid5">
             <label htmlFor='resume'>Resume</label> 
             <input type='text' placeholder="Upload file " required id='resume'></input> 
           </div>
          </div>
        
             <button type="submit">Send</button> 
  
         </form>
      // </Card>
     );
 }
 export default Form;


