export default function App() {
  // example of dynamic content
  const name = "UTSAV";
  let age = 17;
  const bornYear = 2006;
  const gender = "male";
  const google = "https://www.google.com";
  return (
    <>
      <h1>Hello react</h1>
      <p>
        {name} is {age} year old and {gender == "male" ? "his" : "her"} born
        year is {bornYear}.
      </p>
      <p style={{ color: "red" }}>text in red</p>
      <a href={google} target="_blank">
        visit google
      </a>
    </>
  );
}
