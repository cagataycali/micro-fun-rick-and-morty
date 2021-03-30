import React, { useState } from "react";
import {Card, Button, Row, Col} from 'react-bootstrap'
import Character from './Character'

type Episode = {
  id: number;
  name: string;
  air_date: string;
  characters: Array<String>;
}

const Episode = (props: {episode: Episode}) => {
  const {episode} = props
  const [characters, setCharacters] = useState(episode.characters.slice(0, 6))
  const [page, setPage] = useState(1)

  const loadMore = () => {
    // TODO: @cagataycali test loadMore in episode
    const _page = page + 1
    setCharacters(episode.characters.slice(0, _page * 6))
    setPage(_page)
  }

  const renderLoadMoreButton = () => {
    if (characters.length === episode.characters.length) {
      return null
    }
    return <Button data-testid="tab-load-more" variant="primary" onClick={loadMore}>Load more</Button>
  }

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
          <Row>{characters.map(character => {
            return (<Col md="auto" key={`${episode.id}-${character}`}><Character
              apiURL={character}
            /></Col>)
          })}</Row>
          {renderLoadMoreButton()}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Episode
