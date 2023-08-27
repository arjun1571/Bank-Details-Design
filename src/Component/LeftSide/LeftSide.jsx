
import bank from "../../assets/bank.png";
import up from "../../assets/up.svg";

const LeftSide = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        <button className="btn btn-primary ">
          Total amount: $5870
        </button>
        <button className="btn btn-primary">Pay amount</button>

        <div className="form-control ">
          <input
            type="text"
            placeholder="Pay amount"
            className="input input-bordered w-full max-w-xs input-primary"
          />
        </div>
      </div>
      <div className="mt-7 flex items-center">
        <button className="btn btn-primary btn-sm md:mr-7 mr-3">
          Select Payment Method
        </button>
        <div className="flex flex-col-reverse">
        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Bank</option>
        <option>Mobile E-Wallet</option>
        <option>Card</option>
      </select>
        </div>
      </div>
      <div className="mt-8 flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
          Bank Name
        </button>
        <div className="flex flex-col-reverse ">

        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Cimg Bank</option>
        <option>Sonali Bank</option>
        <option>Eastern Bank</option>
      </select>
        </div>
      </div>
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
      <div className="mt-8 text-center">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Remittance bank details
        </button>
      </div>
      <div className="mt-8">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Bank Details
        </button>
        <div className="mx-5 mt-5">
          <h1>
            <span className="font-bold">Owner Name </span>: Eva
          </h1>
          <h1>
            <span className="font-bold">Bank Name </span>: Sonali Bank
          </h1>
          <h1>
            <span className="font-bold">Account Num </span>: 4568785445525
          </h1>
          <h1>
            <span className="font-bold">Brance Name </span>: Dhaka
          </h1>
          <h1>
            <span className="font-bold">Routing Number </span>: 574548754654
          </h1>
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
      <div className="mt-5 text-center">
        <button className="btn btn-primary w-60  btn-sm md:mr-7 mr-3">
          submit
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
