import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pun from "./Pun";

const renderComponent = (props = {}) => {
  const pun = {
    date: "01/02/2023",
    votes: 10,
    dev: "cicero.medeirios",
    context:
      "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
    message: "Lorem ipsus",
  };

  return render(
    <Pun
      date={pun.date}
      initialVotes={pun.votes}
      dev={pun.dev}
      context={pun.context}
      message={pun.message}
      {...props}
    />
  );
};

describe("<Pun/>", () => {
  it("Contains the date that it was made", () => {
    renderComponent();

    const punDate = screen.getByRole("cell", { name: "01/02/2023" });

    expect(punDate).toBeInTheDocument();
  });

  it("Contains the number of votes", () => {
    renderComponent();
    const punVotes = screen.getByRole("cell", { name: 10 });

    expect(punVotes).toBeInTheDocument();
  });

  it("Contains the dev who made the Pun", () => {
    renderComponent();
    const punDev = screen.getByRole("cell", { name: /cicero\.medeirios/i });

    expect(punDev).toBeInTheDocument();
  });

  it("Must contain the message", () => {
    renderComponent();
    const punMessage = screen.getByRole("cell", { name: "Lorem ipsus" });

    expect(punMessage).toBeInTheDocument();
  });

  it("Must contain the context", () => {
    renderComponent();
    const punContext = screen.getByRole("cell", {
      name: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
    });

    expect(punContext).toBeInTheDocument();
  });

  it("Must contain the vote button", () => {
    renderComponent();
    const voteButton = screen.getByRole("button");

    expect(voteButton).toBeInTheDocument();
  });

  it("Clicking the vote button should update the vote count.", () => {
    renderComponent();
    const voteButton = screen.getByRole("button");

    userEvent.click(voteButton);

    const votesUpdated = screen.getByRole("cell", { name: 11 });

    expect(votesUpdated).toBeInTheDocument();
  });
});
