// useRef is used to persist values across renders without causing re-renders. it is commonly used for accessing Dom elements directly or storing mutable values.

const { useEffect } = require("react");

const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
},[]);

return<input ref={inputRef}/>