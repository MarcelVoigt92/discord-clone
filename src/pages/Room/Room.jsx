import { Chat, Input } from "../../components/index";
import "./Room.css";

const Room = () => {
  return (
    <div className="room">
      <Chat />
      <Input />
    </div>
  );
};

export default Room;
