import { useState, useEffect } from "react";
import Room from "./Room";
import RoomDetail from "./RoomDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Device(props) {
  let [device, setDevice] = useState(props.device);

  return (
    <tr>
    <th scope="row">{device.number}</th>
    <td>{device.id}</td>
    <td>{device.name}</td>
    <td>{device.desired.value}</td>
    </tr>
  );
}



export default Device;
