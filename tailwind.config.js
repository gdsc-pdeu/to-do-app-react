module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
    boxShadow: {
    	"red": "0px 3px 12px rgb(127 29 29)",
    	"yellow" : "0 3px 12px rgb(120 53 15)",
    	"blue" : "0 3px 12px rgb(30 58 138)"
      }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};