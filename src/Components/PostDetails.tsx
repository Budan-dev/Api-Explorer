import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
  }

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <div className="loading">Loading...</div>;

  return (
    <div className="post-details">
      <div style={{ marginLeft: 24 }}>
        <h1>{character.name}</h1>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin?.name}</p>
        <p>Location: {character.location?.name}</p>
      </div>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: 200, borderRadius: 50 }}
      />
    </div>
  );
}

export default PostDetails;
