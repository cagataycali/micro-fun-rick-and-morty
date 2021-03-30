import React, { useState } from "react";
import {Card, Button, Row, Col} from 'react-bootstrap'
import Character from './Character'

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  url: string;
  residents: Array<String>;
}

const Location = (props: {location: Location}) => {
  
  const {location} = props
  const [residents, setResidents] = useState(location.residents.slice(0, 6))
  const [page, setPage] = useState(1)

  const loadMore = () => {
    const _page = page + 1
    setResidents(location.residents.slice(0, _page * 6))
    setPage(_page)
  }

  const renderLoadMoreButton = () => {
    if (residents.length === location.residents.length) {
      return null
    }
    return <Button data-testid="tab-load-more" variant="primary" onClick={loadMore}>Load more</Button>
  }

  return (
    <div>
      <Card>
        <Card.Header data-testid="tab-header">
          {location.id} {location.name}
        </Card.Header>
        <Card.Body>
          <Card.Text data-testid="tab-description">
            This is a {location.type} located in {location.dimension}. There are total of {location.residents.length} known residents that are originated from here.
          </Card.Text>
          <Row>{residents.map(character => {
            return (<Col md="auto" key={`${location.id}-${character}`}><Character
              apiURL={character}
            /></Col>)
          })}</Row>
          {renderLoadMoreButton()}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Location
