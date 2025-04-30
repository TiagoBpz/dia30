import Image from "next/image";
import logo from "../assets/exp.png";

export default function Home() {
  return (
    <>
      <h1 className="bg-orange-50 border-5 border-orange-800 text-gray-800 font-bold rounded-lg justify-center flex items-center p-5">ABOBRA</h1>
      <div className="bg-stone-500 border-10 border-gray-800 rounded-lg w-full justify-center flex items-center p-57">
        <Image className="w-200 h-auto" src={logo} alt="img" />
      </div>


    </>


  );
}
