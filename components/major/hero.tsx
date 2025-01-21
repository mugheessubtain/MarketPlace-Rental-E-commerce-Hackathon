
import Options from "../ui/option";
import { UpDownArrowIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { HeroAds } from "../ui/carAd";
import Link from "next/link";
import { CarList, CarsListR } from "./Carist";
import { Car } from "@/sanity/types/car";

interface HeroProps {
  Cars: Car[];
}

export default function Hero({ Cars }: HeroProps) {
  // Map car data to include image URLs
  const mappedCars = Cars.map((car) => ({
    ...car
    
  }));
  console.log("hello",mappedCars);

  return (
    <div>
      <section className="p-4 mx-4">
        {/* Hero Ads Section */}
        <HeroAds />

        {/* Pick-Up and Drop-Off Options */}
        <div className="flex flex-col md:flex-row bg-white justify-between items-center">
          <Options className="flex-1" title="Pick - Up" />
          <div className="flex items-center mx-4 -my-4 z-10">
            <Button size="lg">
              <UpDownArrowIcon />
            </Button>
          </div>
          <Options className="flex-1" title="Drop - Off" />
        </div>

        {/* Popular Cars Section */}
        <div className="flex justify-between my-3 mx-6">
          <h3 className="text-secondary-300 font-semibold">Popular Cars</h3>
          <Link
            href="/cars"
            className="text-primary-500 font-semibold hover:underline transition"
          >
            View all
          </Link>
        </div>
        <CarList AllCars={mappedCars} />

        <hr className="border-b-2 my-10" />

        {/* Car Recommendations Section */}
        <div className="flex justify-start my-3 mx-6">
          <h3 className="text-secondary-300 font-semibold">Car Recommendations</h3>
        </div>
        <CarsListR AllCars={mappedCars} />
      </section>
    </div>
  );
}

