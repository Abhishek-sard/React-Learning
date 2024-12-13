//Conditional Rendering: you can render different elements based on the app's state or props.

if(isLoggedIn){
    return<h1>Welcome back!</h1>;
}else{
    return<button>Login</button>;
}