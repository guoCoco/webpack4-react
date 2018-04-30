import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="index">
                    这是首页ab
                    <div style={{width: '100px', height: '200px', backgroundColor: 'red'}}></div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Index;
