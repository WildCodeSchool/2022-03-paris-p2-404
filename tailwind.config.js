module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Common to both winter and summer modes
        "color-font-dark": "var(--color-font-dark)",
        "color-font-light": "var(--color-font-light)",
        "color-heart-icon": "var(--color-heart-icon)",
        // Winter mode
        "color-winter-primary": "var(--color-winter-primary)",
        "color-winter-header": "var(--color-winter-header)",
        "color-winter-footer": "var(--color-winter-footer)",
        "color-winter-background": "var(--color-winter-background)",
        "color-winter-button": "var(--color-winter-button)",
        // Winter mode on hover
        "color-winter-hover-mobile-footer":
          "var(--color-winter-hover-mobile-footer)",
        "color-winter-hover-desktop-header":
          "var(--color-winter-hover-desktop-header)",
        // Summer mode
        "color-summer-primary": "var(--color-summer-primary)",
        "color-summer-header": "var(--color-summer-header)",
        "color-summer-footer": "var(--color-summer-footer)",
        "color-summer-background": "var(--color-summer-background)",
        "color-summer-button": "var(--color-summer-button)",
        // Summer mode on hover
        "color-summer-hover-mobile-footer":
          "var(--color-summer-hover-mobile-footer)",
        "color-summer-hover-desktop-header":
          "var(--color-summer-hover-desktop-header)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
