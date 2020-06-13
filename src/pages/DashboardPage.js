import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

class DashboardPage extends React.Component {
    
    render() {
        return (
            <div className="nk-app-root">
                {/* main @s */}
                <div className="nk-main ">
                    {/* sidebar @s */}
                    <Menu />
                    {/* sidebar @e */}
                    {/* wrap @s */}
                    <div className="nk-wrap ">
                        {/* main header @s */}
                        <Header />
                        {/* main header @e */}
                        {/* content @s */}
                        <Dashboard />
                        {/* content @e */}
                        {/* footer @s */}
                        <Footer />
                        {/* footer @e */}
                    </div>
                    {/* wrap @e */}
                </div>
                {/* main @e */}
            </div>
        );
    }
}

export default withRouter(DashboardPage);