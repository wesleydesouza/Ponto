import {useState, useEffect} from "react";
const Button = (props) => {

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

    const addPoint = () =>{

        if(pointInOut){
        setPoint([...points, {
            date: props.date, 
            hour: props.hours, 
            minutes: props.minutes, 
            seconds: props.seconds,
            messege: "Saiu"
            }]);
            setPointInOut(false);
        }else{
            setPoint([...points, {
                date: props.date, 
                hour: props.hours, 
                minutes: props.minutes, 
                seconds: props.seconds,
                messege: "Entrou"
            }]);
            
            setPointInOut(true)
        }
        localStorage.setItem("points", JSON.stringify(points));
    }

    return(
        <>
            <button type="submit" onClick={addPoint}>Ponto</button>
        </>
    )
}

export default Button;