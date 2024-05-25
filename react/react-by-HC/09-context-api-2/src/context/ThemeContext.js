import { createContext, useContext } from "react";

export const themeContext = createContext({
  themeMode: "dark",
  dark: () => {},
  light: () => {},
  // we can injects varibles or methods
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
