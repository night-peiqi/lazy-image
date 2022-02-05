// Button.stories.js|jsx

import React from 'react';

import LazyImage from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'LazyImage',
  component: LazyImage,
};

export const Primary = () => (
  <LazyImage src="https://img.kaikeba.com/30155111102202dcbz.png" />
);
Primary.storyName = 'I am the LazyImage';
