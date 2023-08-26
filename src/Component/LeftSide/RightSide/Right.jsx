import flag from "../../../assets/flag.svg";
import up from "../../../assets/up.svg";
import nogod from "../../../assets/nogod.png";
import bkash from "../../../assets/bkash.png";

const Right = () => {
  return (
    <div className="md:p-5">
      <div className="flex">
        <button className="btn btn-primary md:mr-7 mr-3">
          Total amount: $5870
        </button>
        <button className="btn btn-primary">Pay amount: $200</button>
      </div>
      <div className="divider"></div>
      <div className="mt-7 flex items-center">
        <button className="btn btn-primary btn-sm md:mr-7 mr-3">
          Select Payment Method
        </button>
        <div className="flex flex-col-reverse">
          <button className="btn btn-primary md:mr-7 mr-3  btn-sm">Bank</button>
          <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
            Mobile E-Wallet
          </button>
        </div>
      </div>
      <div className="mt-8 md:flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
          Country
        </button>
        <div className="flex items-center ">
          <img className="w-20 mt-2" src={flag} alt="" />
          <img className="w-20 mt-2 mx-2" src={flag} alt="" />
          <img className="w-20 mt-2" src={flag} alt="" />
        </div>
      </div>
      <div className="mt-8 md:flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3 btn-sm mb-3">
          Types of mobile banking
        </button>
        <div className="flex items-center ">
          <img className="w-20 mt-2" src={nogod} alt="" />
          <img className="w-20 mt-2 mx-2" src={bkash} alt="" />
        </div>
      </div>
      <div className="mt-10 ">
        <h1>Nagad Number : 0185274855</h1>
        <h1>Account Type : agent</h1>
        <h1>Address : Dhaka</h1>
      </div>
      <div className="mt-8 text-center">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Remittance Mobile E-Wallet
        </button>
      </div>
      <div className="mt-8">
        <button className="btn btn-sm btn-primary    md:mr-7 mr-3">
          Wallet Details
        </button>
        <div className="mt-5 mx-5">
        <h1>Nagad Number : 0185274855</h1>
        <h1>Account Type : agent</h1>
        <h1>Address : Dhaka</h1>
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

export default Right;
