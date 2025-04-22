import NavBar from "@/Components/ServerComponents/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className=" min-w-fit bg-slate-700 flex flex-col items-center w-full h-full pb-32 gap-36">
      <div className=" flex flex-col text-center items-center">
        <h1 className=" text-6xl font-bold font-mono text-fuchsia-500 mt-10">X-TREME Budget Software</h1>
        <p className=" font-mono italic mt-3 text-xs">Banned in 7 countries!</p>
      </div>
      <div className=" text-center flex flex-col items-center font-mono bg-slate-400 gap-3 w-3/4 rounded-xl p-10">
        <h1 className=" text-4xl mb-5">About X-Treme Budget Software</h1>
        <p>X-Treme Budget Software is the new industry standard for budgeting software.</p>
        <p>Whether you're looking to become a millionaire or figure out how to get out of debt, X-Treme Budget Software does it all!</p>
        <p>Act fast! Pull out your debit card or cryptocurrency of choice and take ownership of your financial freedom.</p>
      </div>

      <div className=" text-center flex flex-col items-center font-mono bg-slate-400 gap-3 w-3/4 rounded-xl p-10">
        <h1 className="text-4xl bg-slate-500 rounded-lg p-3 mb-10">Now Accepting Corley Coin!</h1>
        <Image
        src={"/CC.png"}
        width={1000}
        height={1000}
        alt="A Corley Coin"
        />
      </div>
    </main>
    </>
  );
}
