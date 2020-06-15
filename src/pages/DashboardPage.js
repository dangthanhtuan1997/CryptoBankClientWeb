import React, { useState, useEffect } from 'react';
import { onGetUserInfo } from '../actions';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

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