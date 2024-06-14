import Card from "../molecules/Cards";

function Section({ characters }) {
  return (
    <div className="card-container">
      {
      characters.map(character => (<Card character={character}/> ))}
    </div>
  );
}

export default Section;
