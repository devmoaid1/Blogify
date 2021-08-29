import React from 'react'

function LoginView() {
    return (
        <div>
            <form>
                <p>Email Address</p>
                <input type="text" name="email"></input>
                <p>Password</p>
                <input type="text" name="password"></input>
            </form>
        </div>
    )
}

export default LoginView
