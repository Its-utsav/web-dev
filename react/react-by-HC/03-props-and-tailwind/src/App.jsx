
import { Card } from "./components/Card"

export default function App() {
  let dataObj = [
    {
      name: "Sam",
      info: "hello world i am Sam",
      btnText: "click here",
      url: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah",
      info: "hello champ i am Sarah",
      btnText: "storke here",
      url: "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card url={"https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} username={"utsav"} info={"Hey there i am utsav from india "} btnText={"Visit"} />


      {
        dataObj.map((data, index) => {
          return (
            <Card url={data.url} username={data.name} info={data.info} btnText={data.btnText} key={index} />
          );
        })
      }
    </>
  )
}