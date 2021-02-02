import React, {useState, useEffect } from "react";
import Datatable from  "./datatable"

export default function App () {
    const[data,setData] = useState({});

   
    useEffect (() => {
        fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
        .then(response => response.json())
        .then((json) => setData(json));
     }, [] );
     
     return (
         <div>
         <div>
        <select  className="custom-select" >
             <option value="Completed">Completed</option>
            <option value="InProgress">InProgress</option>
        </select>   
        
</div>
   <Datatable data={data}/>
</div>
     );   
}

  
    
   