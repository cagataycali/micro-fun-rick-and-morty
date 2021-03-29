import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";

const placeholder = {
  name: "",
  image: "",
  origin: {
    name: ""
  },
  gender: "",
  race: "",
  status: "",
}

export default function Fragment() {
  return (
    <Card
      character={placeholder} apiURL="https://rickandmortyapi.com/api/character/38"
    />
  );
}
