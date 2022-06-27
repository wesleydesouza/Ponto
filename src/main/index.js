import {useState, useEffect} from "react";
import Hour from "../components/Hour";
import Button from "../components/Button";


 const Data = () => {
     
    const date = new Date();
     const [dateNow, setDateNow] = useState({
        date: date.toLocaleDateString("pt-BR"),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })
     
     useEffect(() => {
         const dateUpdate = setInterval(() => {
            const date = new Date();
            
            setDateNow({
                date: date.toLocaleDateString("pt-BR"),
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            })
        
        }, 1000);
        return() => clearInterval(dateUpdate);
     }, []);

     return(
         <>
            <Hour date={dateNow.date} hours={dateNow.hours} minutes={dateNow.minutes} seconds={dateNow.seconds}/>
            <Button date={dateNow.date} hours={dateNow.hours} minutes={dateNow.minutes} seconds={dateNow.seconds}/>
         </>
     )
}

export default Data;