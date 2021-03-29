import * as React from "react";
import {Card, Button, Row} from 'react-bootstrap'

type Character = {
  name: string;
  image: string;
  origin: {
    name: string
  };
  gender: string;
  race: string;
  status: string;
}

type Episode = {
  id: number;
  name: string;
  air_date: string;
  characters: Array<Character>;
}

const Tab = (props: {characters: Function, episode: Episode, loadMore?: any}) => {
  const {characters, episode, loadMore} = props

  return (
    <div>
      <Card>
        <Card.Header data-testid="tab-header">
          {episode.id} {episode.name}
        </Card.Header>
        <Card.Body>
          <Card.Text data-testid="tab-description">
            This is the {episode.id}st episode in {episode.id}st session. It was aired on {episode.air_date}.
            There are total of {episode.characters.length} featured characters in this episode.
          </Card.Text>
          <Row>{characters()}</Row>
          <Button data-testid="tab-load-more" variant="primary" onClick={loadMore}>Load more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tab;
