// A higher order component is a function that takes a component and return a new component with additional functionally.

function WithLoading(component){
    return function LoadingHOC(props){
        if(props.isLoading){
            return <h1>Loading...</h1>;
        }
        return <Component {...props}/>;
    };
}
const MyComponentWithLoading = withLoading (MyComponent);