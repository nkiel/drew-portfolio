import React from 'react';
import { Link } from 'react-router-dom';
import './mnav.css'

class MNav extends React.Component {
    constructor(props) {
        super(props);
        if(!this.props.navList) {
            this.navList = [
                { link: 'about', text: 'about' },
                { link: 'writing', text: 'writing' }
            ];
        } else {
            this.navList = this.props.navList;
        }
    }

    render() {
        /*
        {this.props.navList.map((item, index) => (
                        <li onClick={this.props.updateContent(item.value)}>
                            <a href="about.html">about</a>
                        </li>
                    ))}
        */
        return (
            <nav id="site-nav-wrapper" className='solid-bg'>
				<ul id="nav-list" style={{'--nav-cnt': this.navList.length}}>
                    {this.navList.map((item, index) => (
                        <li key={index}><Link to={item.link}>{item.text}</Link></li>
                    ))}
				</ul>
			</nav>
        );
    }
}

export default MNav;