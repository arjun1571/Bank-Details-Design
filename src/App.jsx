import "./App.css";
import LeftSide from "./Component/LeftSide/LeftSide";

function App() {
  return (
    <>
      <div className="md:flex justify-between p-3 max-w-screen-xl mx-auto md:my-20 my-5">
        {/* left site button  */}
        <div>
        <LeftSide></LeftSide>
        </div>
        {/* rihgt side button  */}
        <div>
          <h1>hello2</h1>
        </div>
      </div>
    </>
  );
}

export default App;
