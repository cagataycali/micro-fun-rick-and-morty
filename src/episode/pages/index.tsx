import "bootstrap/dist/css/bootstrap.min.css";
import Episode from "../components/Episode";

const episode = {
  id: 1,
  name: "Episode 1",
  air_date: "Air date",
  characters: [
    "https://rickandmortyapi.com/api/character/31",
    "https://rickandmortyapi.com/api/character/42",
    "https://rickandmortyapi.com/api/character/33",
    "https://rickandmortyapi.com/api/character/44",
    "https://rickandmortyapi.com/api/character/35",
    "https://rickandmortyapi.com/api/character/46",
    "https://rickandmortyapi.com/api/character/37",
    "https://rickandmortyapi.com/api/character/48",
  ],
}

export default function Fragment() {
  return <Episode episode={episode} />;
}
