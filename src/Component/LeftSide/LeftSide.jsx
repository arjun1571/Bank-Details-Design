import { useState } from "react";
import bank from "../../assets/bank.png";
import up from "../../assets/up.svg";

const LeftSide = () => {
  const [bankdata,setBankData]=useState('Bank')
  const handleFromData = (event) => {
    setBankData(event.target.value);
  };
  return (
    <div className="">

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <button className="btn btn-primary ">Total amount: $5870</button>
        <div className="flex flex-col-reverse w-28">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        <div className="form-control ">
          <input
            type="text"
            placeholder="Pay amount"
            className="input input-bordered w-full max-w-xs input-primary"
          />
        </div>
      </div>
      <div onChange={handleFromData} className="mt-7 flex items-center">
        <button className="btn btn-primary btn-sm md:mr-7 mr-3">
          Select Payment Method
        </button>
        <div className="flex flex-col-reverse">
          <select
          name="selectBank"
            defaultValue={"select"}
            className="select select-primary w-full max-w-xs "
          >
            <option value={"select"}>Select One</option>
            <option>Bank</option>
            <option>Mobile E-Wallet</option>
          </select>
        </div>
      </div>
{bankdata === "Mobile E-Wallet" ? <>
<div className="mt-8 md:flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
          Country
        </button>
        <div className="flex flex-col-reverse">
        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Bangladesh</option>
        <option>India</option>
        <option>Nepal</option>
      </select>
        </div>
      </div>
</> :
  <>
        <div className="mt-8 flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
          Bank Name
        </button>
        <div className="flex flex-col-reverse ">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              Select One
            </option>
            <option>Cimg Bank</option>
            <option>Sonali Bank</option>
            <option>Eastern Bank</option>
          </select>
        </div>
      </div>
  </>
}
      <div className="mt-10 lg:flex items-center">
        <div>
          <img className="w-40 mx-auto" src={bank} alt="" />
        </div>
        <div className="md:mx-8 mt-5 items-start">
          <h1 className="text-center">A/C No : 20200002020</h1>
          <h1 className="text-center">A/C Name : Arju chandra Das</h1>
          <h1 className="text-center">A/C Type : Current</h1>
          <h1 className="text-center">IFSC : Ratnovaapvs</h1>
        </div>
      </div>
      <div className="mt-8 ">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Remittance bank details
        </button>
      </div>
      <div className="mt-8">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Bank Details
        </button>
        <div  className="mx-5 mt-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Bank Name</span>
            </label>
            <input
              type="text"
              placeholder="Bank Name"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Account Number</span>
            </label>
            <input
              type="text"
              placeholder="Account Number"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brance Name</span>
            </label>
            <input
              type="text"
              placeholder="Brance Name"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Routing Number</span>
            </label>
            <input
              type="text"
              placeholder="Routing Number"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center md:mx-20 mx-10">
          <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
            Payment Recept document
          </button>
          <img className="w-14" src={up} alt="" />
        </div>
      </div>
      <div className="mt-5 ">
        <input className="btn btn-primary w-60  btn-sm md:mr-7 mr-3" type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default LeftSide;
