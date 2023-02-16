import { render, screen } from "@testing-library/react";
import DevsRanking from "./DevsRanking";

const renderComponent = () => {
  const devs = [
    {
      name: "bione",
      puns: 25,
    },
    {
      name: "julia",
      puns: 20,
    },
  ];

  render(<DevsRanking devsRanking={devs} />);
};

describe("<DevsRanking />", () => {
  it("Renders the devs rankings table.", () => {
    renderComponent();
    const devsRankingTable = screen.getByRole("table");

    expect(devsRankingTable).toBeInTheDocument();
  });

  it("Has the same size as the data entry", () => {
    renderComponent();
    const devsRankingRows = screen.queryAllByRole("row");

    expect(devsRankingRows).toHaveLength(2);
  });

  describe("When the list is empty", () => {
    const devsRankingEmpty = [];

    it("A message should be displayed saying that the list is empty", () => {
      render(<DevsRanking devsRanking={devsRankingEmpty} />);

      const emptyMessage = screen.getByText(/Lista vazia!/i);

      expect(emptyMessage).toBeInTheDocument();
    });
  });
});
