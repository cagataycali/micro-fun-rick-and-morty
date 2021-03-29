import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

const character = {
  name: "Beth Smith",
  image: "https://via.placeholder.com/150",
  origin: {
    name: "Origin",
  },
  gender: "",
  race: "",
  status: "",
};

describe("Card", () => {
  it("renders title correctly", () => {
    render(<Card character={character} />);
    const element = screen.getByTestId("card-title");
    expect(element.textContent).toBe(character.name);
  });
  it("renders description correctly", () => {
    render(<Card character={character} />);
    const element = screen.getByTestId("card-description");
    expect(element.textContent).toBe(
      `From ${character.origin.name} identifies as ${character.gender} of ${character.race} race.`
    );
  });
  it("renders status correctly", () => {
    render(<Card character={character} />);
    const element = screen.getByTestId("card-status");
    expect(element.textContent).toBe(`Current Status: ${character.status}`);
  });
  it("renders image src correctly", () => {
    render(<Card character={character} />);
    const element = screen.getByTestId("card-image");
    expect(element.src).toContain(character.image);
  });
});
