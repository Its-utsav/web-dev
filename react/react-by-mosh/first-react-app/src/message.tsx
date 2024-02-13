function Message() {
  // JSX = JavaScript XML
  // TSX = TypeScrtipt XML

  // eg of dynmic data
  const name = "Utsav";
  if (name) return <h1>Hello, {name} !!</h1>;
  else return <h1>Hello, World !!</h1>;
}

export default Message;
