import React from 'react';

class Smashpark extends React.Component {
    render() {
        return (
            <>
                <h1 className='project-title'>the social media defibulator</h1>
                <p className='project-subtitle'>smash park, the one-of-a-kind "entertainment" venue, had abandoned social accounts that needed love. I was honored that they trusted me with the passwords. </p>
                <div className='cal-container'>
                    <img className='cal' src='/drew-portfolio/res/projects/smashpark/img1.png'></img>
                    <p className='desc' >over ninety posts on three platforms for every month. thank you sprout social (and countless energy drinks)</p>
                </div>
                <div className='smash-tweet-container'>
                    <h1>for my next trick, watch me triple engagment</h1>
                    <img style={{ 'alignSelf': 'start' }} src='/drew-portfolio/res/projects/smashpark/tweet1.png'></img>
                    <hr></hr>
                    <img style={{ 'alignSelf': 'end' }} src='/drew-portfolio/res/projects/smashpark/tweet2.png'></img>
                </div>
            </>
        );
    }
}

export default Smashpark;