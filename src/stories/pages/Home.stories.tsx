// /stories/pages/home.stories.jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from "../../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = () => <Home />