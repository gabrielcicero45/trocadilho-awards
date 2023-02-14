import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pun from "./Pun";

describe("<Pun/>", () => {
  const pun = {
    date: "01/02/2023",
    votes: 10,
    dev: "cicero.medeirios",
    context:
      "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
    message: "Lorem ipsus",
  };

  it("Contains the date that it was made", () => {
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const punDate = screen.getByRole("cell", { name: "01/02/2023" });

    expect(punDate).toBeInTheDocument();
  });

  it("Contains the number of votes", () => {
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const punVotes = screen.getByRole("cell", { name: 10 });

    expect(punVotes).toBeInTheDocument();
  });
  it("Contains the Discord user who made the Pun", () => {
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const punDev = screen.getByRole("cell", { name: /cicero\.medeirios/i });

    expect(punDev).toBeInTheDocument();
  });
  it("Must contain the message", () => {
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const punMessage = screen.getByRole("cell", { name: "Lorem ipsus" });

    expect(punMessage).toBeInTheDocument();
  });
  it("Must contain the context", () => {
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const punContext = screen.getByRole("cell", {
      name: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
    });

    expect(punContext).toBeInTheDocument();
  });

  it("Clicking the vote button should update the vote count.", ()=>{
    render(
      <Pun
        date={pun.date}
        initialVotes={pun.votes}
        dev={pun.dev}
        context={pun.context}
        message={pun.message}
      />
    );
    const voteButton = screen.getByRole('button')
    userEvent.click(voteButton)
    
    const votesUpdated = screen.getByRole("cell", { name: 11 });
    
    expect(votesUpdated).toBeInTheDocument()
  });
});
