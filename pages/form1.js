/* const Form = () => {
    return (
        <div>
        <form onSubmit = {handleSearchSubmit}>
        <InputWithLabel id= "search" value = {searchTerm} isFocused
        onInputChange = {handleSearchInput}>
        <strong>
        search
        </strong>
        </InputWithLabel>

        <button type = "submit" disabled = {!searchTerm}>
        submit
        </button>
        </form>

        </div>
    );
}; */
//import Card from '../ui/Card';
import {useRef} from 'react';
function Form (){
    return (
      // <Card>
            <form>
                <div>
                    <label htmlFor = 'title'> First name </label>
                     <input type = 'text' required id = 'title'/> 
                </div>
               
                
            </form>
       // </Card>
    );
}

export default Form; 

/* const Form = () => {
    return (
        <div>
            <h1> <b>Designer</b></h1>
        </div>
        <form>
            

        </form>
        

    );

}
export default Form; */