import { useState } from "react";
import Device from "./Device";
import {FormattedMessage} from 'react-intl';

function RoomDetail(props) {
  let [roomDetail, setRoomDetail] = useState(props.roomDetail);

  for (let i = 0; i < roomDetail.devices.length; i++) {
    roomDetail.devices[i].number = i+1;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col"><FormattedMessage id="device" defaultMessage="My spaces default"/></th>
          <th scope="col"><FormattedMessage id="value" defaultMessage="My spaces default"/></th>
        </tr>
      </thead>
      <tbody>
        {roomDetail.devices.map((d) => (
          <Device device={d} key={d.id} />
        ))}
      </tbody>
    </table>
  );
}

export default RoomDetail;
