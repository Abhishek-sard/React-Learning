//custom hooks allow you to extract logic into reusable functions that can be shared across components.

function useLocalStorage(key,initialValue){
    const [storedValue, setStoredValue] = useState(() =>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value)=>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON. stringify(value));
    };
    return[storedValue, setValue];
}
//usage
const [name, setName] = useLocalStorage('name', 'john');