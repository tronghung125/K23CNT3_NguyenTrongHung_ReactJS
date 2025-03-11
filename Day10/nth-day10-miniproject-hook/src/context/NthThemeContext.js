import React, { createContext, useContext, useState } from 'react'
const ThemeContext = createContext();


export default function NthThemeContext({children}) {
    const [theme , setTheme] =  useState("light");

    const toggleTheme = () =>
    {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
        <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
export function useTheme(){
    return useContext(ThemeContext);
}