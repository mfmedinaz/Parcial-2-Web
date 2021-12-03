import { useState, useEffect } from "react";
import Room from "./Room";
import RoomDetail from "./RoomDetail";

function Rooms(props) {
  let [rooms, setRooms] = useState([]);
  let [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
        });
    }
    fetchData();
  });

  return (
    <div>
      <div className="row">
        <h1>My rooms</h1>
      </div>
      <div className="row">
        <div className="col">
          {rooms.map((r) => (
            <Room room={r} key={r.id} onClick={() => setSelectedRoom(r)} />
          ))}
        </div>

        <div className="col">

          <RoomDetail room={selectedRoom} />

        </div>
      </div>
    </div>
  );
}

export default Rooms;
