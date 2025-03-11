import { useTheme } from "../context/NthThemeContext";


export default function NthThemeToggle(){
    const {theme , toggleTheme}    = useTheme();
    return (
        <button onClick={toggleTheme}>
            Chuyển sang {theme === "light" ? "tối" : "sáng"}
        </button>
    );
}