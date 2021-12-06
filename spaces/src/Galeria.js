import { useState, useEffect } from "react";
import Espacio from "./Espacio";
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

function Galeria(props) {
  let [galeria, setGaleria] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setGaleria(data);
          localStorage.setItem("galeria", JSON.stringify(data));
        });
    }
    if (!navigator.onLine) {
      if (localStorage.getItem("galeria") === null) {
        setGaleria([{ name: "loading...", type: "none" }]);
      } else {
        const localGaleria = JSON.parse(
          localStorage.getItem("galeria") || "[]"
        );
        setGaleria(localGaleria);
      }
    } else {
      fetchData();
    }
  });

  return (
    <div>
      <div className="row">
        <h1><FormattedMessage id="mySpaces" defaultMessage="My spaces default"/></h1>
      </div>
      <div className="row">
        <div className="card-deck">
          {galeria.map((e) => (
            <Espacio espacio={e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galeria;
