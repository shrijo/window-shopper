
let instance;

export const init = (ref, x) => () => {
  instance = new QRCode('QRContainer', {
    text: x,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.Q,
  });
};

