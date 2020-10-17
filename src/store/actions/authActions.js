export const login = (creds) => {
    return dispatch => {
        fetch('http://127.0.0.1:8000/rest-auth/login/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(creds)
        })
        .then(resp => resp.json())

        .then(response => {
            if(response.error || response.detail || response.non_field_errors){
                alert(response.error || response.detail || response.non_field_errors + ' Please Verify Your Email before logging in.')
            } else {
            const token = response.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            dispatch(getCurrentUser())
            }
        })
        .catch(console.log)
    }
}

export const signup = (creds) => {
    return dispatch => {
        fetch('http://127.0.0.1:8000/rest-auth/registration/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(creds)
        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error || response.detail || response.email || response.non_field_errors){
               
                alert(response.error || response.detail || response.email || response.non_field_errors)
            } else {
                console.log(response)
                const token = response.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(getCurrentUser())
                dispatch(checkAuthTimeout(3600));
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => dispatch => {
    let token = localStorage.token
    return fetch('http://127.0.0.1:8000/wall-api/users/get-current-user/', {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Accept": 'application/json',
            "Authorization": "Token " + token
        },
    })
        .then(resp => resp.json())
       
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
            dispatch(setCurrentUser(response))
        }
    })
    .catch(console.log)
}


export const logoutUser = () => dispatch => {
    console.log('triggered new logout user function')
    return fetch('http://127.0.0.1:8000/rest-auth/logout/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",

        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error || response.non_field_errors){
                console.log(response)
                alert(response.error || response.non_field_errors)
            } else {
                console.log(response)
                alert(response.detail)
                localStorage.removeItem('token');
                localStorage.removeItem('expirationDate');
                dispatch(logout())
            }
        })
        .catch(console.log)
    
}


//ACTION CREATORS
export const authSuccess = token => {
    return {
        type: "AUTH_SUCCESS",
        token
    }
}

export const setCurrentUser = user => {
    return {
        type: "CURRENT_USER",
        user
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const logout = () => {
    
    return {
        type: "AUTH_LOGOUT"
    };
}

export const checkToken = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}


