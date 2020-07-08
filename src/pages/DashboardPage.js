import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

function DashboardPage(props) {
    return (
        <Dashboard />
    );
}

export default connect(state => {
    return {
    }
}, dispatch => {
    return {
    }
})(DashboardPage);