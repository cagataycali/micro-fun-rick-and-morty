import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Tabs, Tab, Col } from "react-bootstrap";
// We need to use top level await on these modules as they are async.
// This is actually what let's module federation work with NextJS
const TabContent = (await import("Tab/Tab")).default;
const CardComponent = (await import("Card/Card")).default;


const getEpisodes = (page = 1) =>
  fetch(`https://rickandmortyapi.com/api/episode?page=${page}`).then((res) =>
    res.json()
  );

export async function getStaticProps(context) {
  const episodes = await getEpisodes();
  return {
    props: { episodes }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { episodes } = props;

  const characterPlaceholder = {
    name: "Cagatay",
    origin: {
      name: "Cagatay Cali",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
    gender: "Male",
    race: "White",
    status: "Married",
  };

  const renderCharacters = (episode) => {
    return episode.characters.slice(0, 8).map((character) => {
      return (
        <Col md="auto" key={`${episode.id}-${character}`}>
          <CardComponent apiURL={character} character={characterPlaceholder} />
        </Col>
      );
    });
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
          {episodes.results.slice(0, 2).map((episode) => (
            <TabContent
              episode={episode}
              characters={() => renderCharacters(episode)}
              loadMore={() => {
                console.log("load more");
                // TODO: @cagataycali load more have to be binded right here.
              }}
            />
          ))}
        </Tab>
        <Tab eventKey="locations" title="By Locations">
          <Row>
            <Col>
              <CardComponent character={characterPlaceholder} />
            </Col>
            
            <Col>
              <CardComponent character={characterPlaceholder} />
            </Col>
            
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}
