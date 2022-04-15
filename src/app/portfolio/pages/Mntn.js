import React from 'react';

class Mntn extends React.Component {
    render() {
        return (
            <>
                <h1 className='project-title'>man in charge</h1>
                <p className='project-subtitle'>mntn is a sustainable lifestyle brand offering sustainable t-shirts for sale.  I was put in charge of the instagram team overseeing engagement and content creation and later was added to the tiktok and twitter teams.</p>
                <div className='cal-container'>
                    <img className='cal' src='/drew-portfolio/res/projects/mntn/img1.png'></img>
                    <p className='desc'>all tweets and instagram posts were scheduled in sked.</p>
                </div>
                <div className='mntn-social-container'>
                    <h2>here's some of my copy across all three of the platforms</h2>
                    <img src='/drew-portfolio/res/projects/mntn/img2.png'></img>
                    <img src='/drew-portfolio/res/projects/mntn/img3.png'></img>
                    <img src='/drew-portfolio/res/projects/mntn/img4.png'></img>
                    <img src='/drew-portfolio/res/projects/mntn/img5.png'></img>
                    {/* <div>
                    TODO add videos... lookinto
                        <img src=''></img>
                    </div> */}
                </div>
            </>
        );
    }
}

export default Mntn;