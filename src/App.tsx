import "./App.css";
import Button from "./components/button/Button";

function App() {
  const handleClick = () => {
    alert("You have clicked the button!");
  };
  return (
    <>
      <Button label="Click" onClick={handleClick} />
    </>
  );
}

export default App;
