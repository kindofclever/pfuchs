import { Theme } from "@mui/material";

const getRandomThemeColor = (theme: Theme) => {
  const paletteColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.warning.main,
    theme.palette.success.main,
    theme.palette.error.main,
    theme.palette.primary.dark,
    theme.palette.secondary.dark,
    theme.palette.warning.dark,
    theme.palette.success.dark,
    theme.palette.error.dark,
    theme.palette.primary.light,
    theme.palette.secondary.light,
    theme.palette.warning.light,
    theme.palette.success.light,
    theme.palette.error.light
  ];

  const randomIndex = Math.floor(Math.random() * paletteColors.length);
  return paletteColors[randomIndex];
};

export { getRandomThemeColor };
