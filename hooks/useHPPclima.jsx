import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const useHPPclima=(url,accessdata)=>{


const [weather,setWeather]=useState({})
const [tempuwu,setTemp]=useState(true)

const cambio=()=>{
setTemp(!tempuwu)
}

useEffect(()=>{
  const success= pos => {
      const lat=pos.coords.latitude.toFixed(2)
      const lon=pos.coords.longitude.toFixed(2)
      axios.get(url)
      .then(res=>setWeather(accessdata(res)))  
  }
  const options={
        enableHightAccuary:true,
        timeout:2000,
        maximunAge:0
    }
const error=()=>{
    setTimeout(() => {
    }, timeout);
   return(
    <div>
    <h2></h2>
    </div>
   )
}
  navigator.geolocation.getCurrentPosition(success,error,options);
},[])
}