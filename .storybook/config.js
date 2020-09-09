import { configure } from '@storybook/react'

function loadStories() {
  // You can require as many stories as you need.
  require('./../src/Button/storybook/Button.stories.js')
}

configure(loadStories, module)