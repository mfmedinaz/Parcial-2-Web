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
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { PieChart } from "recharts";
import PieChartEnergy from "./PieChartEnergy";

function Rooms(props) {
  let [rooms, setRooms] = useState([]);
  let [selectedRoom, setSelectedRoom] = useState(null);

  const { homeid } = useParams();

  useEffect(() => {
    async function fetchData() {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
      )
        .then((res) => res.json())
        .then((data) => {
          const newArray = [];
          for (let i = 0; i < data.length; i++) {
            if (homeid === data[i].homeId) {
              data[i].id = i;
              newArray.push(data[i]);
            }
          }
          localStorage.setItem("rooms", JSON.stringify(newArray));
          setRooms(newArray);
        });
    }

    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null) {
        setRooms([{ name: "loading...", type: "none" }]);
      } else {
        const localRooms = JSON.parse(localStorage.getItem("rooms") || "[]");
        setRooms(localRooms);
      }
    } else {
      fetchData();
    }
  });

  function enableRoomDetails(pSelectedRoom) {
    setSelectedRoom(pSelectedRoom);
  }

  return (
    <div>
      <div className="row">
        <h1>
          <FormattedMessage id="myRooms" defaultMessage="My rooms default" />
        </h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="card-deck">
            {rooms.map((r) => (
              <Room room={r} key={r.id} enableRoomDetails={enableRoomDetails} />
            ))}
          </div>
        </div>

        <div className="col">
          {selectedRoom != null ? (
            <RoomDetail roomDetail={selectedRoom} key={selectedRoom.id} />
          ) : (
            true
          )}
        </div>
      </div>
      <div className="row"><h1><FormattedMessage id="stats" defaultMessage="stats default" /></h1></div>
        <div className="row powerUsage"><FormattedMessage id="powerUsage" defaultMessage="Power default" /></div>
        <div className="row">
          <PieChartEnergy dataChart={rooms}/>
      </div>
    </div>
  );
}

export default Rooms;
