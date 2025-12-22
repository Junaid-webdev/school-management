import React, { useEffect } from 'react'

const Fetch = () => {

    useEffect(()=>{
        getUserApi();
    },[])

    async function getUserApi(){
        const url = "http://127.0.0.1:8000/api/student";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        
    }

  return (<>
  
  <h1>Fetch data from</h1>
  
  </>
    
  )
}

export default Fetch