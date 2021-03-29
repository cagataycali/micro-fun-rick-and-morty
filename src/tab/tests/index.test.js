import { render, screen } from "@testing-library/react";
import Tab from "../components/Tab";
import { Card } from "react-bootstrap";

const characters = () => {
  const character = (
    <Card key={1}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return [character];
};

const episode = {
  id: 1,
  name: "Episode 1",
  air_date: "Air date",
  characters: [],
};

describe("Tab", () => {
  it("renders header correctly", () => {
    render(<Tab characters={characters} episode={episode} />);
    const element = screen.getByTestId("tab-header");
    expect(element.textContent).toBe(`${episode.id} ${episode.name}`);
  });
  it("renders description correctly", () => {
    render(<Tab characters={characters} episode={episode} />);
    const element = screen.getByTestId("tab-description");
    expect(element.textContent)
      .toBe(`This is the ${episode.id}st episode in ${episode.id}st session. It was aired on ${episode.air_date}. There are total of ${episode.characters.length} featured characters in this episode.`);
  });
  it("renders load more button correctly", () => {
    render(<Tab characters={characters} episode={episode} />);
    const element = screen.getByTestId("tab-load-more");
    expect(element.textContent).toBe(`Load more`);
  });
  it("renders characters correctly", () => {
    render(<Tab characters={characters} episode={episode} />);
    expect(screen.getByText("Featured").textContent).toBe(`Featured`);
  });
});
