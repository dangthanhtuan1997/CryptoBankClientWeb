import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <div className="nk-app-root">
            <div className="nk-main ">
                <Menu />
                <div className="nk-wrap ">
                    <Header />
                    <Dashboard />
                    <Footer />
                </div>
                <TransactionModal />
                <ConfirmTransactionModal />
                <ConfirmedTransactionModal />
                <RemindTransactionModal />
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
    }
})(DashboardPage);