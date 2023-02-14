import { render, screen } from "@testing-library/react";
import TrocadilhoList from "./TrocadilhoList";

describe("<TrocadilhoList/>", () => {
  const trocadilhosAvailable = [
    {
      date: "13/02/2023",
      votes: 10,
      dev: "cicero.medeirios",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
    {
      date: "13/02/2023",
      votes: 10,
      dev: "cicero.medeirios",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
  ];
  const trocadilhosEmpty = [];
  it("A list of available trocadilhos should be displayed on the page", () => {
    render(<TrocadilhoList trocadilhos={trocadilhosAvailable} />);

    screen.logTestingPlaygroundURL();
    const trocadilhosTable = screen.getByRole("table");

    expect(trocadilhosTable).toBeInTheDocument();
  });

  describe("When the list is empty", () => {
    it("A message should be displayed saying that the list is empty", () => {
      render(<TrocadilhoList trocadilhos={trocadilhosEmpty} />);

      const emptyMessage = screen.getByText(/Lista vazia!/i);

      expect(emptyMessage).toBeInTheDocument();
    });
  });
});
