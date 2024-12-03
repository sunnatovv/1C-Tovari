/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
      screens: {
        sm: "100%", // Kichik ekranlarda to'liq kenglik
        md: "768px", // O'rta ekranlarda 768px
        lg: "1024px", // Katta ekranlarda 1024px
        xl: "1280px", // Juda katta ekranlarda 1280px
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%)",
      },
      fontFamily: {
        gilroy: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
