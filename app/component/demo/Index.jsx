import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="index">
                    这是demo
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;