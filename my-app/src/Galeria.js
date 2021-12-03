import { useState, useEffect } from "react";
import Espacio from "./Espacio"

function Galeria(props) {
  let [galeria, setGaleria] = useState([]);

  useEffect(()=>{

    async function fetchData(){
      fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
      .then(res =>res.json())
      .then(data =>{
        setGaleria(data)
    }
      )
    }
    fetchData();
    });

  return (
    <div>
      <div className="row">
        <h1>My spaces</h1>
      </div>
      <div className="row">

      {galeria.map((r) => (
                    <Espacio espacio={r} key={r.id} />
                  ))}

      </div>
    </div>
  );
}

export default Galeria;
