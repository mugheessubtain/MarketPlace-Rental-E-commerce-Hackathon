"use client"

// page.tsx

import Hero from "@/components/major/hero";
import { client } from "@/sanity/lib/client";
import { allCars_Q } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";

export default function Page() {
  const [cars, setCars] = useState([]); // State to store the fetched cars

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const Cars = await client.fetch(allCars_Q);
        // console.log("cars", Cars);
        setCars(Cars); // Update state with fetched cars
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <div>
        <Hero Cars={cars} /> Pass the fetched cars as props
      </div>
    </>
  );
}
