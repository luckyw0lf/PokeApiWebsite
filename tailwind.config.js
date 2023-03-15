/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../assets/background.jpg')"
      },
      colors: {
        normal:"#545436",
        status:"#545436",
        fire:"#ac4f0c",
        water:"#0e3289",
        grass:"#5f902d",
        electric:"#826904",
        ice:"#256363",
        fighting:"#9a2620",
        poison:"#803380",
        ground:"#644f14",
        flying:"#270f70",
        psychic:"#950631",
        physical:"#950631",
        bug:"#86931a",
        rock:"#93802d",
        ghost:"#5a467a",
        dark:"#5a463a",
        dragon:"#3506a9",
        special:"#3506a9",
        steel:"#313149",
        fairy:"#561219",
        bag: "#b72e2e",
        bag_light: "#d34141",
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(normal|fire|water|grass|electric|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dark|dragon|steel|fairy|physical|special|status)/
  }]
}
