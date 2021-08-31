import React,{FC} from 'react'



const LoginView:FC=()=> { 

    return (
        <div>
            <form>         
                <p>Email Address</p>
                <input type="text" name="email" placeholder="Email Address"></input>
                <p>Password</p>
                <input type="text" name="password" placeholder="password"></input>
            </form>
        </div>
    )
}

export default LoginView
