const names = ["utsav", "harray", "jay", "sam"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// from react official
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    chemist: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
// task only render chemist chemist data

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipes({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredients) => (
          <li key={ingredients}>{ingredients}</li>
        ))}
      </ul>
    </div>
  );
}
export default function App({ name, age = 12, bornYear = 2012, isMale }) {
  // example of dynamic content
  // const name = "UTSAV";
  // let age = 17;
  // const bornYear = 2006;
  // const isMale = true;
  const google = "https://www.google.com";
  // map metod
  const listItems = names.map((name, index) => {
    return <li key={index}>{name}</li>;
  });
  // filter all even numbers and store in new array
  const evenNum = numbers.filter((num) => (num & 1) == 0);

  // for rendering list
  const evenList = evenNum.map((num, index) => <li key={index}>{num}</li>);

  const chemist = people.filter((person) => person.profession === "chemist");

  const renderChemist = chemist.map((one, index) => (
    <li key={index}>
      <p>{one.id}</p>
      <p>{one.name}</p>
      <p>{one.profession}</p>
    </li>
  ));

  return (
    <>
      <h1>Hello react</h1>
      <p>
        {name} is {age} year old and {isMale ? "his" : "her"} born year is{" "}
        {bornYear}.
      </p>
      <p style={{ color: "red" }}>text in red</p>
      <a href={google} target="_blank">
        visit google
      </a>
      {/* <ul>{listItems}</ul>
        <ul>{evenList}</ul>
        <h2>only chemist data</h2>
        <ul>{renderChemist}</ul> */}
      {/* Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>. */}
      <div>
        <h1> Recipes</h1>
        {/* {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredients, index) => (
                <li key={index}>{ingredients}</li>
              ))}
            </ul>
          </div>
        ))} */}
        {recipes.map((recipe) => (
          <Recipes key={recipe.id} {...recipe} />
        ))}
      </div>
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
