import chakraTheme from "@chakra-ui/theme";
import { extendBaseTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendBaseTheme({
  colors,
});

export default theme;
