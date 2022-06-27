
const Hour = (props) => {
    let seconds = props.seconds;
   
    return(
        <>
           <h1>{props.hours}:{props.minutes}:{props.seconds}</h1>
           <p>{props.date}</p>
        </>
    )
}

export default Hour;