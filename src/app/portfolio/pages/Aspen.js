import React from 'react';

class Aspen extends React.Component {
    render() {
        return (
            <>
                <h1 className='project-title'>selling student housing like it's disneyland</h1>
                <p className='project-subtitle'>aspen heights is a student housing complex here in ames where I go to school. I was able to snag a marketing internship with them and was able to run their socials as well as work on some amazing guerilla marketing projects.</p>
                <div className='aspen-tweet-container'>
                    <img style={{'gridRow' : '1 / span 4'}} src='/drew-portfolio/res/projects/aspen/img1.png'></img>
                    <img style={{'gridRow' : '2 / span 4'}} src='/drew-portfolio/res/projects/aspen/img2.png'></img>
                    <img style={{'gridRow' : '1 / span 4'}} src='/drew-portfolio/res/projects/aspen/img3.png'></img>
                </div>
            </>
        );
    }
}

export default Aspen;