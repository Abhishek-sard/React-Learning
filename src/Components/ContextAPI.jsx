//Context API allows you to share values (such as themes, authentication status, etc.) between components without having to pass props manually at every level.

const ThemeContext = React.createContext('light');

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <div className={theme}>This is a {theme} theme.</div>;
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}
