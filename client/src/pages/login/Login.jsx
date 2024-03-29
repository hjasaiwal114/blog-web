import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">
                <form  className="loginForm">
                    <label>Email</label>
                    <input className="loginInput" type="password" placeholder="Enter your password..." />
                    <button className="loginButton">Login</button>
                </form>
                <button className="loginRegisterButton">Register</button>
            </span>
        </div>
    );
}