import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getCharacter } from "../utils/getCharacter";

export type Character = {
  name: string;
  image: string;
  origin: {
    name: string
  };
  gender: string;
  race: string;
  status: string;
}

const CardComponent = (props: {character: Character, apiURL?: string}) => {
  const [character, setCharacter] = useState(props.character)
  const [loaded, setLoaded] = useState(false)
  // TODO: @cagataycali jest.spy fetch then test the code below.
   useEffect(() => {
    if (!props.apiURL) {
      setLoaded(true)
      return
    }

    getCharacter(props.apiURL)
      .then(character => {
        setCharacter(character)
        setLoaded(true)
      })
      .catch(err => {
        console.log(err)
        // TODO: @cagataycali err handling
      })
  }, [])

  if (!loaded) {
    return null
  }
   
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img data-testid="card-image" variant="top" src={character.image} />
      <Card.Body>
        <Card.Title data-testid="card-title">{character.name}</Card.Title>
        <Card.Text data-testid="card-description">
          From {character.origin.name} identifies as {character.gender} of {character.race} race.
        </Card.Text>
        <Card.Text data-testid="card-status">
          Current Status: {character.status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
