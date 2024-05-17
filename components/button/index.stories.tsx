import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { fn } from "@storybook/test";
import { useEffect, useState } from "react";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
    disabled: false,
  },

  render: function Render(Story, args) {
    const [isPending, setIsPending] = useState(Story.isPending);

    useEffect(() => {
      setIsPending(() => Story.isPending);
    }, [Story.isPending]);
    return (
      <Button
        {...Story}
        isPending={isPending}
        onClick={(event) => {
          if (isPending) return;
          setIsPending(() => true);
          setTimeout(() => {
            setIsPending(() => false);
          }, 2000);
          Story?.onClick?.(event);
        }}
      >
        바로가기
      </Button>
    );
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const BG타입브랜드: Story = {
  args: {
    variant: "BG-brand",
  },
};
export const BG타입강조: Story = {
  args: {
    variant: "BG-accent",
  },
};
export const BG타입비강조: Story = {
  args: {
    variant: "BG-neutral",
  },
};
export const Line타입브랜드: Story = {
  args: {
    variant: "Line-brand",
  },
};
export const Line타입강조: Story = {
  args: {
    variant: "Line-accent",
  },
};
export const Line타입비강조: Story = {
  args: {
    variant: "Line-neutral",
  },
};
