import { render, screen } from "@testing-library/react";
import Tab from "../components/Location";

const location = {
  id: 1,
  name: "Earth (C-137)",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: [
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/45",
  ],
  url: "https://rickandmortyapi.com/api/location/1",
  created: "2017-11-10T12:42:04.162Z",
};

describe("Tab", () => {
  it("renders header correctly", () => {
    render(<Tab location={location} />);
    const element = screen.getByTestId("tab-header");
    expect(element.textContent).toBe(`${location.id} ${location.name}`);
  });
  it("renders description correctly", () => {
    render(<Tab location={location} />);
    const element = screen.getByTestId("tab-description");
    expect(element.textContent).toBe(
      `This is a ${location.type} located in ${location.dimension}. There are total of ${location.residents.length} known residents that are originated from here.`
    );
  });
  it("renders load more button correctly", () => {
    render(<Tab location={location} />);
    const element = screen.getByTestId("tab-load-more");
    expect(element.textContent).toBe("Load more");
  });
});
