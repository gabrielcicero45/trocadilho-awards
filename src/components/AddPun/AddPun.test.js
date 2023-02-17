import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPun from "./AddPun";

const renderComponent = (props = {}) => {
  const pun = {
    id: Date.now(),
    date: "01/02/2023",
    votes: 12,
    dev: "cicero.medeirios",
    context:
      "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
    message: "Lorem ipsus",
  };
  render(<AddPun pun={pun} {...props} />);
};

describe("<AddPun/>", () => {
  it("Must contain the date input", () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/Data/i);

    expect(dateInput).toBeInTheDocument;
  });

  it("Must contain the dev input", () => {
    renderComponent();
    const devInput = screen.getByLabelText(/Dev/i);

    expect(devInput).toBeInTheDocument;
  });

  it("Must contain the context input", () => {
    renderComponent();
    const contextInput = screen.getByLabelText(/Contexto/i);

    expect(contextInput).toBeInTheDocument;
  });

  it("Must contain the message input", () => {
    renderComponent();
    const messageInput = screen.getByLabelText(/Trocadilho/i);

    expect(messageInput).toBeInTheDocument;
  });

  it("Must contain the submit button", () => {
    renderComponent();
    const submitButton = screen.getByRole("button", { name: /Adicionar/i });

    expect(submitButton).toBeInTheDocument;
  });

  describe("When the submit button is clicked", () => {
    it("The on submit method must be called", () => {
      const handleSubmit = jest.fn();
      renderComponent({ handleSubmit: handleSubmit });

      const submitButton = screen.getByRole("button", { name: /Adicionar/i });

      userEvent.click(submitButton);

      expect(handleSubmit).toBeCalled();
    });
  });

  describe("When the user changes the dev value input", () => {
    it("The on change method must be called", () => {
      const handlePunChange = jest.fn();
      renderComponent({ handlePunChange: handlePunChange });

      const devInput = screen.getByLabelText(/Dev/i);
      userEvent.type(devInput, "cicero.medeiros");

      expect(handlePunChange).toBeCalled();
    });
  });

  describe("When the user changes the context value input", () => {
    it("The on change method must be called", () => {
      const handlePunChange = jest.fn();

      renderComponent({ handlePunChange: handlePunChange });
      const contextInput = screen.getByLabelText(/Contexto/i);
      userEvent.type(contextInput, "Context here");
      expect(handlePunChange).toBeCalled();
    });
  });

  describe("When the user changes the message value input", () => {
    it("The on change method must be called", () => {
      const handlePunChange = jest.fn();

      renderComponent({ handlePunChange: handlePunChange });
      const messageInput = screen.getByLabelText(/Trocadilho/i);
      userEvent.type(messageInput, "Pun here");
      expect(handlePunChange).toBeCalled();
    });
  });

  describe("When the user changes the date value input", () => {
    it("The on change method must be called", async() => {
      const handlePunChange = jest.fn();

      renderComponent({ handlePunChange: handlePunChange });
      const dateInput = screen.getByLabelText(/Data/i);

      await userEvent.type(dateInput,"2023-01-01", { delay: 100 })

      expect(handlePunChange).toBeCalled()
    });
  });
});
