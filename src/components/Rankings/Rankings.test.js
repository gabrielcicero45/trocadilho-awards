import { render, screen } from "@testing-library/react";
import Rankings from "./Rankings";

const renderComponent = () => {
  const puns = [
    {
      date: "12/02/2023",
      votes: 15,
      dev: "cicero.medeirios",
      context:
        "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
      message: "Lorem ipsus",
    },
  ];
  const devs = [
    {
      name: "cicero.mderos",
      puns: 20,
    },
  ];
  render(<Rankings puns={puns} devs={devs} />);
};

describe("<Rankings/>", () => {
  it("Should render two rankings tables", () => {
    renderComponent();
    const rankingTables = screen.queryAllByRole("table");

    expect(rankingTables).toHaveLength(2);
  });
});
