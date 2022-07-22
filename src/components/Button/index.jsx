import {useState, useEffect} from "react";
import Button from "@mui/material/Button";


const ButtonList = (props) => {

    const [pointInOut, setPointInOut] = useState(true)
    const [points, setPoint] = useState([{ date: props.date, 
        hour: props.hours, 
        minutes: props.minutes, 
        seconds: props.seconds,
        messege: "Entrou"
    }]);

    useEffect(() =>{
        const myList = localStorage.getItem("points");
        setPoint(JSON.parse(myList) || []);
    }, []);

    const addPoint = (e) =>{

        e.preventDefault()

        if(pointInOut){
        setPoint([...points, {
            date: props.date, 
            hour: props.hours, 
            minutes: props.minutes, 
            seconds: props.seconds,
            massege: "Saiu"
            }]);
            setPointInOut(false);
        }else{
            setPoint([...points, {
                date: props.date, 
                hour: props.hours, 
                minutes: props.minutes, 
                seconds: props.seconds,
                massege: "Entrou"
            }]);
            
            setPointInOut(true)
        }
        localStorage.setItem("points", JSON.stringify(points));
    }

    return(
        <>
            <Button variant="outlined" type="submit" onClick={addPoint}>Ponto</Button>
        </>
    )
}

export default ButtonList;