import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() //Crear contexto
export const useDarkModeContext = () => useContext(DarkModeContext) //Permite usar el context

export const DarkModeProvider = (props) => { //Definir proveedor del context, para saber cuales componentes puede definir y cuales no
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            document.body.firstElementChild.classList.add('darkMode')
        } else {
            document.body.firstElementChild.classList.remove('darkMode')
        }
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}