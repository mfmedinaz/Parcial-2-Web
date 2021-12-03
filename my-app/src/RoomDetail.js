import { useState } from "react";

function RoomDetail(props) {

  let [roomdetail, setRoomDetail] = useState(props.roomdetail); 

  return (
<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <p className="card-text">{roomdetail.name}</p>
  </div>
  <img className="card-img-top" src="https://st2.depositphotos.com/1228731/5370/i/950/depositphotos_53709565-stock-photo-white-flower-plot-and-blue.jpg" alt="Card image cap" />
</div>


  );
}

export default RoomDetail;
