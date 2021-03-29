import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Component.module.css";
import Tab from "../components/Tab";
import {Card} from "react-bootstrap"

const characters = () => {
  const character = (
  <Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
  </Card>)
  return [character]
}

const episode = {
  id: 1,
  name: "Episode 1",
  air_date: "Air date",
  characters: [],
}

const loadMore = () => console.log('Load more')

export default function Fragment() {
  return <Tab className={styles.container} characters={characters} episode={episode} loadMore={loadMore} />;
}
