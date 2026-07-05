import { useState, useEffect } from "react";

const THEME_CHANGE_EVENT = "themechange";

function useTheme() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }));
    }, [theme]);

    useEffect(() => {
        const syncTheme = (event) => {
            const nextTheme = event.detail || localStorage.getItem("theme") || "dark";

            setTheme((currentTheme) => (currentTheme === nextTheme ? currentTheme : nextTheme));
        };

        window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
        window.addEventListener("storage", syncTheme);

        return () => {
            window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
            window.removeEventListener("storage", syncTheme);
        };
    }, []);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return [theme, toggleTheme];
}

export default useTheme;