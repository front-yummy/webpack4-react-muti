import React from 'react';
import '../../public/css/common.pcss';
import '../../public/css/shop.pcss';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="shop">
                    这是商城
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;