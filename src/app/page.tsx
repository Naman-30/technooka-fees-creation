import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh] flex justify-center items-center">
      <div className="max-w-[450px] p-5 rounded-md sm:border-[#0065A7] sm:border">
        <h1 className="text-3xl font-bold text-center text-[#0065A7] mb-7">Login</h1>
        <input type="text" placeholder="Enter Email" className="w-full border rounded-md p-2 mb-5 bg-gray-100"/>
        <input type="password" placeholder="Enter Password" className="w-full border rounded-md p-2 mb-5  bg-gray-100 "/>
        <button className="w-full p-[9px] bg-[#0065A7] text-white font-semibold rounded-md
         mt-0.5">Login</button>
      </div>
    </main>
  );
}
