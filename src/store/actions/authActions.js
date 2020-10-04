
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
            if(response.error){
                alert(response.error)
            } else {
   
            console.log(response)
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

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        fetch('http://127.0.0.1:8000/wall-api/users/get-current-user/', {

        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
   
            console.log(response)
        }
    })
    .catch(console.log)
    }

}





//ACTION CREATORS
export const authSuccess = token => {
    return {
        type: "AUTH_SUCCESS",
        token
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: "AUTH_LOGOUT"
    };
}


