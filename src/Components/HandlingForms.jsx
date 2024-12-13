//you can handle form inputs using controlled components, where form values are controlled by React state.
//you can use the `useState` hook to create a state variable to store the form values.

const { useState } = require("react");

function FormComponent(){
    const[name, setName] =useState('');

    const handleSubmit = (event)=>{
        alert('A name was submitted:' + name);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}