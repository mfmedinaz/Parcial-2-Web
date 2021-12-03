import { useState } from "react";

function Espacio(props) {

  let [espacio, setEspacio] = useState(props.espacio); 

  return (
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src="https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg?size=626&ext=jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{espacio.name}</h5>
    <p className="card-text">{espacio.address}</p>
  </div>
</div>

  );
}

export default Espacio;
