/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#03253b",
                secondary: "#b8c3c9",
                tertiary: "#051e2c",
                "black-100": "#0a1c29",
                "black-200": "#026c53",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #0a3937",
            },
            screens: {
                xs: "450px",
            },
        },
    },
    plugins: [],
};
