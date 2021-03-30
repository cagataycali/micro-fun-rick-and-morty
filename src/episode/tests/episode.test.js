import { render, screen } from "@testing-library/react";
import Tab from "../components/Episode";
import { Card } from "react-bootstrap";

const episode = {
  id: 1,
  name: "Episode 1",
  air_date: "Air date",
  characters: [
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/45",
  ],
};

describe("Tab", () => {
  it("renders header correctly", () => {
    render(<Tab episode={episode} />);
    const element = screen.getByTestId("tab-header");
    expect(element.textContent).toBe(`${episode.id} ${episode.name}`);
  });
  it("renders description correctly", () => {
    render(<Tab episode={episode} />);
    const element = screen.getByTestId("tab-description");
    expect(element.textContent)
      .toBe(`This is the ${episode.id}st episode in ${episode.id}st session. It was aired on ${episode.air_date}. There are total of ${episode.characters.length} featured characters in this episode.`);
  });
  it("renders load more button correctly", () => {
    render(<Tab episode={episode} />);
    const element = screen.getByTestId("tab-load-more");
    expect(element.textContent).toBe("Load more");
  });
  it("renders characters correctly", () => {
    render(<Tab episode={episode} />);
    expect(screen.getByText("Beth Smith").textContent).toBe("Beth Smith");
  });
});
