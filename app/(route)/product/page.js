"use client";

import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    alert("You are going to the home page");
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        onClick={handleNavigation} 
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Home Page
      </button>
    </div>
  );
}

export default Page;
   
