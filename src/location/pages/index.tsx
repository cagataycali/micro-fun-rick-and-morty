import "bootstrap/dist/css/bootstrap.min.css";
import Location from "../components/Location";

const location = {
  id: 1,
  name: "Earth (C-137)",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: [
    "https://rickandmortyapi.com/api/character/31",
    "https://rickandmortyapi.com/api/character/42",
    "https://rickandmortyapi.com/api/character/33",
    "https://rickandmortyapi.com/api/character/44",
    "https://rickandmortyapi.com/api/character/35",
    "https://rickandmortyapi.com/api/character/46",
    "https://rickandmortyapi.com/api/character/37",
    "https://rickandmortyapi.com/api/character/48",
  ],
  url: "https://rickandmortyapi.com/api/location/1",
  created: "2017-11-10T12:42:04.162Z"
}

export default function Fragment() {
  return <Location location={location} />;
}
