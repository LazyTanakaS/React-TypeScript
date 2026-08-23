import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmModal from "./ConfirmModal";

describe("ConfirmModal", () => {
  it("show title and message, when isOpen=true", () => {
    render(
      <ConfirmModal
        isOpen={true}
        onClose={() => {}}
        onConfirm={vi.fn()}
        title="Delete transaction"
        message="Are you sure?"
        confirmText="Delete"
        cancelText="Cancel"
      />,
    );

    expect(screen.getByText("Delete transaction")).toBeInTheDocument();
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
  });

  it("start onClose when click on button Cancel", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
      <ConfirmModal
        isOpen={true}
        onClose={onClose}
        onConfirm={vi.fn()}
        title="Delete transaction"
        message="Are you sure?"
        confirmText="Delete"
        cancelText="Cancel"
      />,
    );

    await user.click(screen.getByText("Cancel"));

    expect(onClose).toHaveBeenCalled();
  });

  it("use btn-danger, when isDangerous=true", () => {
    const onClose = vi.fn();

    render(
      <ConfirmModal
        isOpen={true}
        isDangerous={true}
        onClose={onClose}
        onConfirm={vi.fn()}
        title="Delete transaction"
        message="Are you sure?"
        confirmText="Delete"
        cancelText="Cancel"
      />,
    );

    expect(screen.getByText("Delete")).toHaveClass("btn-danger");
  });
});
