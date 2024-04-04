
export default function App({name,age=12,bornYear=2012,isMale}) {
  // example of dynamic content
  // const name = "UTSAV";
  // let age = 17;
  // const bornYear = 2006;
  // const isMale = true;
  const google = "https://www.google.com";
  return (
    <>
      <h1>Hello react</h1>
      <p>
        {name} is {age} year old and {isMale? "his" : "her"} born
        year is {bornYear}.
      </p>
      <p style={{ color: "red" }}>text in red</p>
      <a href={google} target="_blank">
        visit google
      </a>
    </>
  );
}


// export default function App({text}) {
//   return (
//     <>
//       <h1>{text}</h1>
//     </>
//   );
// }
