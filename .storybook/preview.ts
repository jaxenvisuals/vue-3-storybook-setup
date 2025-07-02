import type { Preview } from "@storybook/vue3-vite";

import "../src/assets/styles/tailwind/index.css";
import "../src/assets/styles/styles.scss";

const preview: Preview = {
  initialGlobals: {
    theme: "light",
    backgrounds: { value: "light" },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "Dark", value: "#000000" },
        light: { name: "Light", value: "#ffffff" },
        // 👇 Add your own
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || "light";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(selectedTheme);
      return story();
    },
  ],
};

export default preview;
