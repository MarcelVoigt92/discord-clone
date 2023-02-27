import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";

import "./Chat.css";

const Messages = ({ roomId }) => {
  const { id } = useParams();
  const { document } = useDocument("servers", id);

  return (
    <div className="messages-wrapper">
      <div className="messages">
        {document?.messsages?.map((message) => (
          <div className="messsageBody">
            <p className="message-username">
              <img src={message.image} alt="" />
              <strong>{message.user}</strong> {message.time}
            </p>

            <p className="message-text">{message.messageBody}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
