import { useEffect, useState } from "react";


const List = () => {
  

  const getStorageList = localStorage.getItem("points");
  let list = JSON.parse(getStorageList) || [];
  const [listPoint, setListPoint] = useState([]);
  
  useEffect(() => {

    setListPoint(list)

    console.log(listPoint)
  }, [getStorageList])

  return (
    <>
        <section>
          <h3>Pontos</h3>
          <hr/>
          <ul>
            <p>Hora</p> <p>Data</p>
            {listPoint.map((point, index) => <li key={index}>{point.hour}:{point.minutes}<small>({point.massege})</small> {point.date}<hr/></li>)}
          </ul>
        </section>
    </>
    
  );
};

export default List;
