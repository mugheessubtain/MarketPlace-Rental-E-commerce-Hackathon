'use client'
import { cn } from "@/lib/utils"
import { CarItem } from "../ui/CarCard"
import { Car } from "@/sanity/types/car";


export const CarList = ({ AllCars }: { AllCars: Car[] }) => {
  return (
    <div>
      <div
        className={cn(
          'flex flex-nowrap',
          'overflow-x-auto sm:overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden',
          'gap-5 lg:gap-3',
          'py-4'
        )}
      >
      {AllCars?.filter((car: Car) => car.tags?.includes('popular')).splice(0,9).map((car: Car) => (
        <CarItem
          key={car.id}
          title={car.name}
          type={car.type}
          gasoline={car.fuel_capacity}
          steering={car.transmission}
          capacity={car.seating_capacity}
          price={car.price_per_day}
          imageUrl={car.imageUrl}
        />
      ))}
    </div>
    </div>
  );
};

export const CarsListR = ({ AllCars }: { AllCars: Car[] }) => {
  return (
    <div>
      <div className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-5', 'lg:grid-cols-4'
      )}
      >
        {AllCars?.filter((car: Car) => car.tags?.includes('recommended')).splice(0,20).map((car: Car) => (
        <CarItem
        key={car.id}
        title={car.name}
        type={car.type}
        gasoline={car.fuel_capacity}
        steering={car.transmission}
        capacity={car.seating_capacity}
        price={car.price_per_day}
        imageUrl={car.imageUrl}
      />
      ))}
      </div>
    </div>
  )
}
export const CarsListComb = ({ AllCars }: { AllCars: Car[] }) => {

  return (
    <div>
      <div className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-2', 'lg:grid-cols-4'
      )}
      >
        {AllCars?.map((car: Car) => (
        <CarItem
          key={car.id}
          title={car.name}
          type={car.type}
          gasoline={car.fuel_capacity}
          steering={car.transmission}
          capacity={car.seating_capacity}
          price={car.price_per_day}
          imageUrl={car.imageUrl}
        />
      ))}
      </div>
    </div>
  )
}
