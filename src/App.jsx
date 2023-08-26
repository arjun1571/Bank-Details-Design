import "./App.css";
import LeftSide from "./Component/LeftSide/LeftSide";
import Right from "./Component/LeftSide/RightSide/Right";

function App() {
  return (
    <>
      <div className="md:flex justify-between p-3 max-w-screen-lg mx-auto md:my-20">
        {/* left site button  */}
        <div className="mb-10">
        <LeftSide></LeftSide>
        </div>
        {/* rihgt side button  */}
        <div className="">
          <Right></Right>
        </div>
      </div>
    </>
  );
}

export default App;
