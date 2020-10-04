
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'


const Logout = ({logout}) => {
    return (
        <div className="Logout">
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default connect(null, { logout })(Logout)