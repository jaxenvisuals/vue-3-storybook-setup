import AppButton from "@/components/buttons/AppButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Buttons/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label of the button",
      defaultValue: "Click Me",
    },
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    label: "Simple Button",
  },
};
