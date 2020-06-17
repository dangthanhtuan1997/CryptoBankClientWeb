import React, { useState, useEffect } from 'react';
import { onGetUserInfo } from '../actions';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

function DashboardPage(props) {
    const { user, transaction, onGetTransactions, onGetUserInfo } = props;

    useEffect(() => {
        if (!user.userInfo) {
            onGetUserInfo();
        }
    });

    return (
        <Dashboard />
    );
}

export default connect(state => {
    return {
        user: state.userReducer,
        transaction: state.transactionReducer
    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
    }
})(DashboardPage);