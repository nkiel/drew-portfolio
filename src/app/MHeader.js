import React from 'react';
import { Link } from 'react-router-dom';
import './mheader.css';

class MHeader extends React.Component {
    render() {
        return (
            <header tabIndex="-1" id="site-header-wrapper">
                <div id="logo-wrapper">
                    <Link to="/"><img id="logo" src="res/drew_logo.png" /></Link>
                </div>
            </header>
        );
    }
}

export default MHeader;