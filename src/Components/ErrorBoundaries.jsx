//error boundaries are components that catch javascript error anywhere in their child component tree and log those errors, displaying a fallback UI.

class ErrorBoundary extends React.component{
    constructor(props){
        super(props);
        this.state ={hasError: false};
    }
    static getDerivedStateFromError(error){
        return{hasError: true};
    }
    componentDidCatch(error,info){
        logErrorToMyService(error,info);
    }
    render(){
        if(this.state.hasError){
            return<h1>Something went wrong.</h1>
        }
        return this.props.children;
    }
}