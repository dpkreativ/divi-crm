module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "contact-doodle":
          "url(https://res.cloudinary.com/dpkreativ/image/upload/o_10/v1627045399/divi-crm/doodlebg_k5w7bx.png)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
