import React from 'react';
const user = {
    userName: '',
    password: ''
}
const Authentication = (props) => {

    const onInputBlur = (event) => {
        if (event.target.id === 'userName')
            user.userName = event.target.value
        else if (event.target.id === 'password')
            user.password = event.target.value
    }
    return (
        <div>
            <h2>Login</h2>
            <span className="flexCol">
                <input placeholder='UserName' type='text' id='userName' onBlur={onInputBlur}></input>
                <input placeholder='Password' type='password' id='password' onBlur={onInputBlur}></input>
                <button className="btnLogin" onClick={props.onLogin.bind(this, user)}>Login</button>
            </span>
        </div>
    );
}

export default React.memo(Authentication);