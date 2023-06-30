import Pet from "./Pet";
import { Pet as PetType } from "./APIResponsesTypes";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
