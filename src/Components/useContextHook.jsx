//useContext Hook: useContext is used to sharing data between components without having to pass props manually through every level of the component tree.

const { useContext } = require("react");

const ThemeContext = React.createContext('light');
const theme = useContext(ThemeContext);