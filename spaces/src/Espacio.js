import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Espacio(props) {
  let [espacio, setEspacio] = useState(props.espacio);

  function setImageFromType(pEspacio) {
    var image =
      "https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg";

    if (pEspacio.type === "house") {
      image =
        "https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/256/42486-house-icon.png";
    } else if (pEspacio.type === "loft") {
      image =
        "https://thosepatternedwalls.files.wordpress.com/2017/02/industrial-style-accent-wall1.jpg?w=256&h=256&crop=1";
    }

    return image;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top EspacioImage"
        src={setImageFromType(espacio)}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{espacio.name}</h5>
        <p className="card-text">{espacio.address}</p>
        
        <Link to={"rooms/" + espacio.id} className="stretched-link">
        </Link>
      </div>
    </div>
  );
}

export default Espacio;
