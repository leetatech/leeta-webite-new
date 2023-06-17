import { useState, useEffect } from 'react'

const useDarkTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect( () => {
    const mode = window.matchMedia('(prefers-color-scheme: dark)');

    const checkdark = event => {
      const darkmode = event.matches ? true : false;
      setIsDarkMode(darkmode);
    }

    mode.addEventListener("change", checkdark);

    // check auto
    if(mode){
      mode.matches ?  setIsDarkMode(true) : setIsDarkMode(false);
    }

    return () => {
      mode.removeEventListener("change", checkdark);
    }
  }, [])

  return isDarkMode;
}

export default useDarkTheme