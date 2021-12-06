import { useState } from "react";

function Room(props) {
  let [room, setRoom] = useState(props.room);

  function setImageFromType(pRoom) {
    var image =
      "https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg";

    if (pRoom.type === "room") {
      image =
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/living-room-15-833102.png";
    } else if (pRoom.type === "kitcken") {
      image =
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/kitchen-2478327-2074569.png";
    }

    return image;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <a
        className="stretched-link"
        onClick={() => props.enableRoomDetails(room)}
      >
        <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        </div>
        <img
          className="card-img-top RoomImage"
          src={setImageFromType(room)}
          alt="Card image cap"
        />
      </a>
    </div>
  );
}

export default Room;
