import { fn } from '@storybook/test';

import Tag from "../components/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    size: { control: "text" },
    shape: { control: "text" },
    ro: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Medium = {
  args: {
    size: 'medium',
    label: 'Tag',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Tag',
  },
};
