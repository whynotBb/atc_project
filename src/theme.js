// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 10}rem`;

const fontSizes = {
    title: pixelToRem(26),
    subtitle: pixelToRem(16),
    default: pixelToRem(15),
    sm: pixelToRem(14),
};

const colors = {
    primary: "#1a89e3",
    primaryLight: "#01bff3",
    primaryDark: "#1b26b3",
    secondary: "#e50200",
    border: "#e5e5e5",
    borderLight: "#efefef",
    borderDark: "#b5b5b5",
    black: "#222222",
    gray1: "#606060",
    gray2: "#888888",
    gray3: "#9f9f9f",
    gray4: "#eeeeee",
};

const common = {
    flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
    fontSizes,
    colors,
    common,
};

export default theme;
