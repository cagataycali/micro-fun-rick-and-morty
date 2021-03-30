
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";

const Episode = (await import("Episode/Episode")).default;
const Location = (await import("Location/Location")).default;

const getEpisodes = (page = 0) =>
  fetch(`https://rickandmortyapi.com/api/episode?page=${page}`).then((res) =>
    res.json()
  );

const getLocations = (page = 0) =>
  fetch(`https://rickandmortyapi.com/api/location?page=${page}`).then((res) =>
    res.json()
  );

export async function getStaticProps(context) {
  const episodes = await getEpisodes();
  const locations = await getLocations();

  const _episodes = episodes.results.slice(0, 2);
  // _episodes.map((episode) => {
  //   episode.characters = episode.characters.slice(0, 2);
  // });

  const _locations = locations.results.slice(0, 2);
  // _locations.map((location) => {
  //   location.residents = locations.residents.slice(0, 2);
  // });

  return {
    props: { episodes, locations, _episodes, _locations },
  };
}

export default function Home(props) {
  // const { episodes, locations } = props;
  const [episodes, setEpisodes] = useState(props._episodes);
  const [locations, setLocations] = useState(props._locations);

  return (
    <Container>
      <h3>The Rick and Morty Characters Directory</h3>
      <Tabs
        defaultActiveKey="episodes"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="episodes" title="By Episodes">
          {episodes.map((episode) => (
            <Episode episode={episode} />
          ))}
        </Tab>
        <Tab eventKey="locations" title="By Locations">
          {locations.map((location) => (
            <Location location={location} />
          ))}
        </Tab>
      </Tabs>
    </Container>
  );
}
