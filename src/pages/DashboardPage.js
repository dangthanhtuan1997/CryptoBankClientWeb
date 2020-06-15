import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';

import Dashboard from '../components/Dashboard';
import TransactionModal from '../components/TransactionModal';
import ConfirmTransactionModal from '../components/ConfirmTransactionModal';
import ConfirmedTransactionModal from '../components/ConfirmedTransactionModal';
import RemindTransactionModal from '../components/RemindTransactionModal';
import { onGetUserInfo } from '../actions';
import { connect } from 'react-redux';

function DashboardPage(props) {
    useEffect(() => {
        const { onGetUserInfo } = props;
        onGetUserInfo();
    }, []);

    return (
        <Dashboard />
    );
}

export default connect(state => {
    return {
        
    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
    }
})(DashboardPage);