const errorContainerStyle = {
  height: "61vh",
  display: "grid",
  placeItems: "center",
};

const Error = ({ children }) => {
  return (
    <div className="error-container" style={errorContainerStyle}>
      {children}
    </div>
  );
};

export default Error;
