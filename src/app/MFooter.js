import React from 'react';
import './mfooter.css';

class MFooter extends React.Component {
    render() {
        return (
            <footer tabIndex="-1" id="site-footer-wrapper">
                <div>
				    <p className="content-only"
					        style={{'fontSize':'1em', 'textAlign':'center', 'fontFamily':'futura-lt-w01-light,sans-serif'}}>
					    Due to cavity issues will no longer be taking payment in
					    gum.</p>
                </div>
                <div id="contact">

                </div>
                <div id="copyright">
				<small><i>
						Copyright &copy; 2022 <a href='http://kielserver.com'>kielserver.com</a> <br />
					</i></small>
			    </div>
            </footer>
        );
    }
}

export default MFooter;