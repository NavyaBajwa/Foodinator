import Image from "next/image";
import { Inter } from "next/font/google";
import { TitleReveal } from "@/components/TitleReveal";
import SearchIngredients from "@/components/SearchIngredients";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="absolute text-center top-14">
        <TitleReveal />
      </div>
      <div className="mt-20 w-full flex flex-col items-center pb-14">
        <p className="mt-6 text-center pt-5 text-black-100 pb-9">
          Start typing to enter the ingredients you wish to use in your next dish!
        </p>
        <SearchIngredients />
      </div>
    </div>
  );
}