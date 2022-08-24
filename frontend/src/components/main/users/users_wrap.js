import React from 'react'
import { connect } from "react-redux"
import Users from "./users"
import getUsers from "../../../store/reducers/usersRed"

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
export default connect(mapStateToProps, { getUsers })(Users)