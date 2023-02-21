import "./styles.css";
import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
export default function App() {
  const [number, setNumber] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // const incrementHandler = () => {
  //   const lastNumber = number[number.length - 1];
  //   number.push(lastNumber + 1);
  //   setNumber(number);
  //   console.log(number);
  // };

  // const incrementHandler = () => {
  //   const lastNumber = number[number.length - 1];
  //   const stateCopy = [...number];
  //   stateCopy.push(lastNumber + 1);
  //   setNumber(stateCopy);
  //   console.log(stateCopy);
  // };

  console.log("App is rendering..");

  useEffect(() => {
    console.log("useEffect");

    setLoading(true);
    setTimeout(() => {
      // got data
      const dataFromApi = [1, 2, 3];
      setNumber(dataFromApi);
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    console.log("useEffect for numbers");
    if (number.length >= 10) {
      alert("mapp ma re");
    }
  }, [number]);

  const incrementHandler = () => {
    setLoading(true);
    // setTimeout(() => {
    const lastNumber = number[number.length - 1];
    setNumber([...number, lastNumber + 1]);
    setLoading(false);
    // }, 5000);
  };

  const decrementHandler = () => {
    setLoading(true);
    setTimeout(() => {
      const stateCopy = [...number];
      stateCopy.splice(0, 1);
      console.log(stateCopy);
      setNumber(stateCopy);
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {number.map((num, id) => (
          <li key={id}>{num}</li>
        ))}
      </ul>
      {/* <h2>{loading ? "I am doing work" : ""}</h2> */}
      <h2>{loading && "I am doing work"}</h2>
      <CustomButton isDisabled={loading} buttonHandler={incrementHandler}>
        Increment
      </CustomButton>
      <CustomButton isDisabled={loading} buttonHandler={decrementHandler}>
        Decrement
      </CustomButton>
    </div>
  );
}
