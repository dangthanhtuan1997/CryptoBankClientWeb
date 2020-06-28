import React, { useState, useEffect } from 'react';
import { onGetUserInfo, onGetTransactions } from '../actions';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

function DashboardPage(props) {
    const { user, onGetUserInfo, transaction, onGetTransactions } = props;

    useEffect(() => {
        if (!user.userInfo) {
            onGetUserInfo();
        }

        if (user.userInfo && !transaction.data) {
            onGetTransactions();
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
        onGetTransactions: () => dispatch(onGetTransactions())
    }
})(DashboardPage);