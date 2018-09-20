import React from 'react';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="index">
                    这是首页这是首页这是首页这是首页这是首页这是首页这是首页这是首页
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;
