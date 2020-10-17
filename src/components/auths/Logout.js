
import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'


const Logout = ({logoutUser}) => {
    console.log(logoutUser)
    return (
        <div id="Logout">
            <form onSubmit={logoutUser}>
                <input className='button' type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default connect(null, { logoutUser })(Logout)