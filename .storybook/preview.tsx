import React from "react"
import type { Preview } from "@storybook/react"
import "../app/globals.css"
import "./assets/story.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],

  tags: ["autodocs"],
}

export default preview
