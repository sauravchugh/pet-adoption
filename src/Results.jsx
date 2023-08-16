// pets is an array of objects extracted from api call and passed here as a prop
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              id={pet.id}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city},${pet.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
