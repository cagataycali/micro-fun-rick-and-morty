import { render, screen } from "@testing-library/react";
import Tab from "../components/Episode";
import fetchMock from "jest-fetch-mock";

const episode = {
  id: 1,
  name: "Episode 1",
  air_date: "Air date",
  characters: [
    "https://rickandmortyapi.com/api/character/38",
  ],
};


describe("Tab", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
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
  // it("renders load more button correctly", () => {
  //   render(<Tab episode={episode} />);
  //   const element = screen.getByTestId("tab-load-more");
  //   expect(element.textContent).toBe("Load more");
  // });
  // it("renders characters correctly", async () => {
  //   render(<Tab episode={episode} />);
  //   await screen.findByText("Beth Smith")
  //   expect(screen.getByText("Beth Smith").textContent).toBe("Beth Smith");
  // });
});
