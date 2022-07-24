
import { GlobalStyles } from "./assets/styles/global";
import { Profile } from "./components/Profile";
import { ThemeButton } from "./components/ThemeButton";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./assets/styles/theme/light";
import dark from "./assets/styles/theme/dark";
import { usePersistedState } from "./utils/usePersistedState";
import { useState } from "react";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenContactModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseContactModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <ThemeButton theme={handleTheme} />
      <GlobalStyles />
      <Profile onOpenContactModal={handleOpenContactModal} />
      <ContactModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseContactModal} />
        <Footer/>
    </ThemeProvider>
  )
}


