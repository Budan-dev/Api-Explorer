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
    <div style={{ padding: 24 }}>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: 200, borderRadius: 50 }}
      />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      <p>Location: {character.location?.name}</p>
    </div>
  );
}

export default PostDetails;
