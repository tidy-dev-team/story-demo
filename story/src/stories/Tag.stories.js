import { fn } from '@storybook/test';

import Tag from "../components/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Tag',
  component: Tag,
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    size: { control: "radio", options: ["small", "medium"] },
    shape: { control: "radio", options: ["solid", "outline"] },
    ro: { control: "radio", options: ["readonly", "editable"] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Editable = {
  args: {
    label: 'Tag label',
    icon: 'schedule',
    size: 'medium',
    shape: 'solid',
    ro: 'editable',
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
