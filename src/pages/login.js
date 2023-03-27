import React from 'react';
import { useEffect } from 'react';


const Login = (props) => {
    useEffect(() => {
        const isLoggedin = localStorage.getItem('isLoggedin')
        if (isLoggedin === 'true') {
            props.history.push('/home')
        }
    }, [props.history]);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form action="nw-page.html">
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" className="form-control" id="username" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <button className="btn btn-primary btn-block" onClick={() => { localStorage.setItem('isLoggedin', true); props.history.push('/home') }}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;