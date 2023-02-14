import { render, screen } from "@testing-library/react";
import PunsList from "./PunsList";

describe("<PunsList/>", () => {
  describe("A list of available puns should be displayed on the page", () => {
    const puns = [
      {
        date: "01/02/2023",
        votes: 10,
        dev: "cicero.medeirios",
        context:
          "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
        message: "Lorem ipsus",
      },
      {
        date: "01/02/2023",
        votes: 10,
        dev: "cicero.medeirios",
        context:
          "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
        message: "Lorem ipsus",
      },
    ];

    it("Renders the puns table.", () => {
      render(<PunsList puns={puns} />);
      const punsTable = screen.getByRole("table");

      expect(punsTable).toBeInTheDocument();
    });

    it("Has the same size as the data entry", () => {
      render(<PunsList puns={puns} />);
      const punsRows = screen.queryAllByRole("row");

      expect(punsRows).toHaveLength(puns.length);
    });
  });

  describe("When the list is empty", () => {
    const punsEmpty = [];
    it("A message should be displayed saying that the list is empty", () => {
      render(<PunsList puns={punsEmpty} />);

      const emptyMessage = screen.getByText(/Lista vazia!/i);

      expect(emptyMessage).toBeInTheDocument();
    });
  });
});
