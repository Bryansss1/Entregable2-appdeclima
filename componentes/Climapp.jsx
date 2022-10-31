import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Clima = () => {
    const climasimg=["☀️","⛅","🌧️","⛈️","🌁","🌨️"]
    const backgroundWheater=["https://i.pinimg.com/originals/69/da/8f/69da8f67ba69f246eeea92652a333a53.gif","https://acegif.com/wp-content/uploads/gifs/sun-61.gif","https://i.makeagif.com/media/11-06-2015/bs4ZRd.gif","https://acegif.com/wp-content/uploads/gif/snwflks-5.gif","https://i.gifer.com/origin/91/914ce629b8470a3a26e62c3cd02668fa_w200.gif"]
    const [weather,setWeather]=useState({})
    const [tempuwu,setTemp]=useState(true)

const cambio=()=>{
    setTemp(!tempuwu)
}

    useEffect(()=>{
      const success= pos => {
          const lat=pos.coords.latitude.toFixed(2)
          const lon=pos.coords.longitude.toFixed(2)
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79fc7d47fd6ef06c6f4a9578a87ae9ff`)
          .then(res=>setWeather(res.data))  
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

  const temp=weather.main?.temp
  const tempC=Math.round(temp-273.15)

  console.log(weather)

const cambioback=(climaa)=>{
  switch(climaa.weather?.[0].main){
    case "Clouds": return backgroundWheater[2]
    break
    case "Rain":return backgroundWheater[1]
    break
    case "Clear":return backgroundWheater[0]
    break
    case "Thunderstorm":return backgroundWheater[4]
    break
    case "Snow":return backgroundWheater[3]
    break
  }
}
document.body.style=`background-image:url(${cambioback(weather)})`
  const climazzz=(clima)=>{
  switch(clima.weather?.[0].main){
    case "Clouds": return climasimg[1]
    break
    case "Rain":return climasimg[2]
    break
    case "Clear":return climasimg[0]
    break
    case "Thunderstorm":return climasimg[3]
    break
    case "Snow":return climasimg[5]
    break
    case "Mist","Smoke":return climasimg[4]
    break
  }
}
    return (
        <article className='Climapp'>
            <h1>App Clima By Bryansss</h1>
            <p>{weather.name} {weather.sys?.country}</p>
            <small>bryans 30/10/22</small>
            <div className='Climapp-seccioninfo'>
            <div className='imgclima-detalle'>
            <p className='ilu'>{climazzz(weather)}</p>
            <p>{tempuwu?tempC+"°C":tempC*1.8+32 +"°F"}</p> 
            <p>{weather.weather?.[0].description}</p>
            </div>
           
            <ul>
                <li>Clouds/Nubes {weather.clouds?.all}%</li>
                <li>Pressure/Presion {weather.main?.pressure}</li>
                <li>Speed-Wind/Velocidad-viento {weather.wind?.speed}m/s</li>
            </ul>
            </div>
            <button onClick={cambio}>°C/°F</button>
            <button onClick={()=>alert("espero te haya gustado att bryans2022")}>Show the name him creator</button>
        </article>
    );

};

export default Clima;