import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabNavigation from "./TabNavigation";

describe("<TabNavigation />", () => {
  it("Should render the PunsList button", () => {
    render(<TabNavigation />);
    const punsListButton = screen.getByRole("button", {
      name: /Lista de Trocadilhos/i,
    });

    expect(punsListButton).toBeInTheDocument();
  });

  it("Should render the Add Puns button", () => {
    render(<TabNavigation />);
    const addPunsButton = screen.getByRole("button", {
      name: /Adicionar trocadilho/i,
    });

    expect(addPunsButton).toBeInTheDocument();
  });

  it("Should render the Rankings button", () => {
    render(<TabNavigation />);
    const rankingsButton = screen.getByRole("button", { name: /Rankings/i });

    expect(rankingsButton).toBeInTheDocument();
  });

  describe("When the Puns list button is clicked", () => {
    it("Should update the Puns list state", () => {
      const changeState = jest.fn();

      render(<TabNavigation renderPunsList={changeState} />);

      const punsListButton = screen.getByRole("button", {
        name: /Lista de Trocadilhos/i,
      });

      userEvent.click(punsListButton);

      expect(changeState).toBeCalled();
    });
  });

  describe("When the Add Puns button is clicked", () => {
    it("Should update the Add Puns state", () => {
      const changeState = jest.fn();
      render(<TabNavigation renderAddPun={changeState}/>)
      const addPunsButton = screen.getByRole("button", {
        name: /Adicionar trocadilho/i,
      });

      userEvent.click(addPunsButton)
      
      expect(changeState).toBeCalled();
    });
  });

  describe("When the Rankings button is clicked", () => {
    it("Should update the Rankings state", () => {
      const changeState = jest.fn();
      render(<TabNavigation renderRankings={changeState}/>)
      const rankingsButton = screen.getByRole("button", { name: /Rankings/i });

      userEvent.click(rankingsButton);

      expect(changeState).toBeCalled();
    });
  });

});
