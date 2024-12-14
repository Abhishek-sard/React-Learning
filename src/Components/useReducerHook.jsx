//useReducer is a hook used to manage more complex state logic in functional components, especially when the state depends on previous state values or multiple sub-values.

const { useReducer } = require("react");

cost initialState ={count: 0};

function reducer(state,action){
    switch(action.type){
        case 'increment':
        return{count: state.count + 1};
        case 'decrement':
        return{count:state.count -1};
        default:
            return state;
    }
}

const [state,dispatch] = useReducer(reducer,initialState);

return(
    <div>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
)