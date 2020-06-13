import React from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import TransactionModal from '../components/TransactionModal';
import ConfirmTransactionModal from '../components/ConfirmTransactionModal';
import ConfirmedTransactionModal from '../components/ConfirmedTransactionModal';

class DashboardPage extends React.Component {
    
    render() {
        return (
            <div className="nk-app-root">
                <div className="nk-main ">
                    <Menu />
                    <div className="nk-wrap ">
                        <Header />
                        <Dashboard />
                        <Footer />
                    </div>
                    <TransactionModal/>
                    <ConfirmTransactionModal/>
                    <ConfirmedTransactionModal/>
                </div>
            </div>
        );
    }
}

export default DashboardPage;