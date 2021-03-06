import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
        }
    }
    login = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() { 
        return ( 
        <div className="loginPage">
            <form onSubmit={this.login}>
                <input 
                onChange={this.changeHandler}
                type="text" 
                className="username" 
                placeholder="Username"
                name="username" 
                value={this.state.username}/>
                <input 
                onChange={this.changeHandler}
                type="text" 
                className="password" 
                placeholder="Password" 
                name="password"
                value={this.state.password}/>
                <button onClick={this.login}>Login</button>
            </form>
        </div>  
        );
    }
}
 
export default Login;
