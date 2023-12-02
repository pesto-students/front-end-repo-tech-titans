import { ErrorRounded } from "@mui/icons-material";
import { styled } from "@mui/material";
import { red, grey } from "@mui/material/colors";
const styles = {
  error: { color: red["700"] },
  info: { color: grey["700"] },
};

const Message = styled("div")({
  height: "61vh",
  display: "grid",
  placeItems: "center",
});

const MessageContainer = ({ error, children }) => {
  console.log("CONTAINER", error);
  return (
    <Message
      className="msg-container"
      style={error ? styles.error : styles.info}
    >
      {children}
    </Message>
  );
  ErrorRounded;
};

export default MessageContainer;
