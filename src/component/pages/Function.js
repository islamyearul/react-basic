import React, { useState } from 'react';

const Function = () => {

    const[name, setName] = useState({
        country: "",
    })

   const onchange = (e) =>{
        const nam = e.target.value
        setName({country: nam})
    }


    return (
        <div>
            <h1>This Functional Component</h1>
            <p>The Country Is {name.country}</p>
            <input type="text" onChange={()=>onchange}  name="name"></input><br/><br/>
            <button onClick={()=>setName({country: "Multa"})} >Change Country</button>
        </div>
    );
};

export default Function;