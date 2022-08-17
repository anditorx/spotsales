const mainColors = {
  red1: '#D42A53',
  red2: '#ff7675',
  white: 'white',
  black: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  yellow: 'yellow',
  grey1: '#858587',
  grey2: '#CBCBCF',
  grey3: '#dfe4ea',
  blue: '#0599ED',
  indigo: '#0c2461',
  skyblue: '#ACCEFF',
};

export const colors = {
  primary: mainColors.red1,
  red2: mainColors.red2,
  indigo: mainColors.indigo,
  white: 'white',
  black: 'black',
  yellow: 'yellow',
  grey1: mainColors.grey1,
  grey2: mainColors.grey2,
  grey3: mainColors.grey3,
  blue: mainColors.blue,
  skyblue: mainColors.skyblue,
  text: {
    default: mainColors.black,
    grey: mainColors.grey1,
  },
  button: {
    disable: {
      background: mainColors.grey2,
      text: mainColors.grey1,
    },
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
  },
  loadingBackground: mainColors.black2,
};
