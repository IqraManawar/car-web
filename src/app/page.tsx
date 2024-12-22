
"use client"
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";
import CarList from "./list/carlist";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Popular Cars</h2>
        
        {/* Car list container with responsive grid */} 
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render the CarList component to show the list of cars */}
          <CarList />
        </div> 

        {/* {/* Show more cars button */}



        <button
          className="mt-6 w-full sm:w-auto text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          aria-label="billing info" onClick={() =>router.push('./rentalform')}
        >
          Billing Info
        </button>
      </div>
      <Footer />
    </div>
  );
}

