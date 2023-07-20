import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Aside } from "./components/Aside";
import { LayoutContainer } from "./styles/layout";
import { NewTypeOfDoc } from "./components/NewTypeOfDoc";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>

        <Aside />

        <NewTypeOfDoc />

      </LayoutContainer>

      <GlobalStyle />
    </ThemeProvider>
  )
}
