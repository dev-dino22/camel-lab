import { useState } from "react";
import Modal from "./Modal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
  tags: ["!autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => {
      setOpened(true);
    };
    const handleClose = () => {
      setOpened(false);
    };
    const [mounted, setMounted] = useState(true);

    const handleUnmount = () => {
      setMounted(false);
      setOpened(false);
      setMounted(true);
    };
    return (
      <>
        <button onClick={() => handleOpen()}>Open Modal</button>

        <Modal
          opened={opened}
          onClose={handleClose}
          onUnmount={handleUnmount}
        />
      </>
    );
  },
};
