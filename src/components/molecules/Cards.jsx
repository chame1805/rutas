import './Cards.css';

function Card({ character }) {
    return (
        <div id="card">
            <img src={character.image} alt={character.name} id="card-img" />
            <div id="card-content">
                <h1>{character.name}</h1>
                <h2>{character.species} - {character.status}</h2>
                <p>Location: {character.location.name}</p>
                <p>ID: {character.id}</p>
            </div>
        </div>
    );
}

export default Card;
