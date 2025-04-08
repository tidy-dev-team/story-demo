import { fn } from '@storybook/test';

import Tag from "../components/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    size: { control: "radio", options: ["small", "medium"] },
    shape: { control: "radio", options: ["solid", "outline"] },
    ro: { control: "radio", options: ["readonly", "not"] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Tag label',
    icon: 'schedule',
    size: 'medium',
    shape: 'solid',
    ro: 'not',
  },
};

export const ReadOnly = {
  args: {
    label: 'Tag label',
    icon: 'schedule',
    size: 'medium',
    shape: 'solid',
    ro: 'readonly',
  },
};
