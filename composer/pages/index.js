
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Tabs, Tab, Col, Button } from "react-bootstrap";

const Episode = (await import("Episode/Episode")).default;
const Location = (await import("Location/Location")).default;

const getEpisodes = (url) =>
  fetch(url || "https://rickandmortyapi.com/api/episode").then((res) =>
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
  const _locations = locations.results.slice(0, 2);
  
  return {
    props: { episodes, locations, _episodes, _locations },
  };
}

export default function Home(props) {
  const [allEpisodes, setAllEpisodes] = useState(props.episodes)
  const [allLocations, setAllLocations] = useState(props.locations)

  const [episodePage, setEpisodePage] = useState(0)
  const [locationPage, setLocationPage] = useState(0)
  const [episodes, setEpisodes] = useState(props._episodes);
  const [locations, setLocations] = useState(props._locations);

  const loadMoreEpisode = async () => {
    let _allEpisodes = allEpisodes
    if (episodes.length === allEpisodes.results.length) {
      if (_allEpisodes.info.next) {
        const _nextEpisodes = await getEpisodes(allEpisodes.info.next);
        _allEpisodes = {
          info: _nextEpisodes.info,
          results: [..._allEpisodes.results, ..._nextEpisodes.results],
        };
        setAllEpisodes(_allEpisodes);
      }
    }

    const _page = episodePage + 1;
    setEpisodes(_allEpisodes.results.slice(0, _page * 10));
    setEpisodePage(_page);
  };

  const loadMoreLocation = async () => {
    let _allLocations = allLocations;
    if (locations.length === allLocations.results.length) {
      if (_allLocations.info.next) {
        const _nextLocations = await getLocations(allLocations.info.next);
        _allLocations = {
          info: _nextLocations.info,
          results: [..._allLocations.results, ..._nextLocations.results],
        };
        setAllLocations(_allLocations);
      }
    }

    const _page = locationPage + 1;
    setLocations(_allLocations.results.slice(0, _page * 10));
    setLocationPage(_page);
  };

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
          <Button
            data-testid="tab-load-more"
            variant="primary"
            onClick={loadMoreEpisode}
          >
            Load More Episode
          </Button>
        </Tab>
        <Tab eventKey="locations" title="By Locations">
          {locations.map((location) => (
            <Location location={location} />
          ))}
          <Button
            data-testid="tab-load-more"
            variant="primary"
            onClick={loadMoreLocation}
          >
            Load More Location
          </Button>
        </Tab>
      </Tabs>
    </Container>
  );
}
