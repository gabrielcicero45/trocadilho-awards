import { render, screen } from "@testing-library/react";
import PunsRanking from "./PunsRanking";

const renderComponent = () => {
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

  render(<PunsRanking punsRanking={puns} />);
};

describe("<PunsRanking />", () => {
  it("Renders the puns rankings table.", () => {
    renderComponent();
    const punsRankingTable = screen.getByRole("table");

    expect(punsRankingTable).toBeInTheDocument();
  });

  it("Has the same size as the data entry", () => {
    renderComponent();
    const punsRankingRows = screen.queryAllByRole("row");

    expect(punsRankingRows).toHaveLength(2);
  });

  describe("When the list is empty", () => {
    const punsRankingEmpty = [];
    
    it("A message should be displayed saying that the list is empty", () => {
      render(<PunsRanking punsRanking={punsRankingEmpty} />);

      const emptyMessage = screen.getByText(/Ainda não há dados suficientes para gerar um ranking!/i);

      expect(emptyMessage).toBeInTheDocument();
    });
  });
});
