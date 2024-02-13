// import { Fragment } from "react"; // for Fragment element //v1
import { useState } from "react";

// props jast like function argument
// props {items:[],heading:"String"}

interface ListGroupProps {
  items: string[];
  heading: string;
  // passing fnction via props

  onSelectItem: (items: string) => void;
}
function ListGroup({ items, heading ,onSelectItem}: ListGroupProps) {
  // let city = ["Delhi", "Mumbai", "Surat", "New York", "Jaipur", "Rajkot"];
  // now you know the real use of map ,filter ,reduce

  //   city = [];
  // conditional rendering

  // outside of tsx

  //   if (city.length === 0)
  //     return (
  //       <>
  //         <h1>List </h1>
  //         <p>No city found</p>
  //       </>
  //     );

  // variable of conditional rendering

  //   let meg = city.length === 0 ? <p>No city found</p> : null;

  // function(best part we giv parameters) of conditional rendering

  //   let meg = () => {
  //     city.length === 0 ? <p>No city found</p> : null;
  //   };

  //   let selectedIndex = -1;

  //   const handleClick = (e: MouseEvent) => {
  //     // typescript complier don't kown which event it is so we need to specify this
  //     // we are just clicking
  //     console.log(e);
  //     selectedIndex = index

  //   };
  // this is Hook - hook is a function that allow us to tap into built-in featuresin react
  //   const arr = useState(-1); // give array of 2 element
  //   // 1 element is variable
  //   // 2 updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // each component have own set
  // for eg , if i use the component agin in app.tsx and click on differnt city so active class as per where i click

  return (
    // need one more element called h1

    // NOTE 1. in react we cant return more than one element but we can use nested element

    // not to good with creating one more element
    // <div>
    // <Fragment>
    // empty angular bractes

    <>
      <h1>{heading} </h1>
      {/* conditinal rendering in jsx */}

      {/* {city.length === 0 ? <p>No city found</p> : null} */}

      {/* {props.items.length === 0 && <p>No city found</p>} */}
      {items.length === 0 && <p>No city found</p>}
      {/* true  && 1 -> 1 */}
      {/* true  && 'utsav -> 'utsav' */}
      {/* false  && 'utsav' -> false */}

      {/*  may be this (conditinal rendering do with function or with any variable that is declare above of return statement ) */}

      {/* {meg()} */}
      {/*  above with function */}

      <ul className="list-group">
        {items.map((city, index) => {
          return (
            <li
              key={city}
              //   adding class  with jsx aka tsx
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={
                // handleClick
                (e) => {
                  setSelectedIndex(index);
                  onSelectItem(city)
                  //   not do any thing
                  // react don't know about that selectedIndex variable // so we need to tell react that varianle data or state may be chage or update // see at useState
                  console.log(e);

                  // if onclick task is small than ok ,but if onclick has many task then we use function
                  // we give SyntheticBaseEvent created by react team for all browser
                }
              }
            >
              {city}
            </li>
          );
        })}
      </ul>
    </>

    // </Fragment>
    // </div>
  );
}

export default ListGroup;

// props  vs state
// ------------------------------------
// props - input passed to the componets 
// state - managed by a components
// --------------------
// props - similar to function arg 
// state - locale variable
//  -----------
//  props - immutable(can't chage)
// state - mutable
// ----------------
// props -- cause a re render
// state -- cause a re render
