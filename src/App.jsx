import "./App.css";
import LeftSide from "./Component/LeftSide/LeftSide";
import Right from "./Component/LeftSide/RightSide/Right";

function App() {
  return (
    <>
      <div className=" justify-between p-3 max-w-screen-xl mx-auto md:my-20">
        {/* left site button  */}
        <div className="mb-10 mt-5">
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
