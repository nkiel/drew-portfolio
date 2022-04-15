import React from 'react';
import ProjectSelect from '../portfolio/ProjectSelect'

import Birdhouse from '../portfolio/pages/Birdhouse'
import Aspen from '../portfolio/pages/Aspen'
import Smashpark from '../portfolio/pages/Smashpark'
import Mntn from '../portfolio/pages/Mntn'
import SipStudios from '../portfolio/pages/SipStudios'
import Beta from '../portfolio/pages/Beta'

import './portfolio.css'

const PORT_ENUM = {
    HOME: 0,
    BIRDHOUSE: 1,
    ASPEN: 2,
    SMASHPARK: 3,
    MNTN: 4,
    SIP_STUDIOS: 5,
    // BETA: 6
}

const PORT_INFO = [
    { value: 'HOME' },
    { value: 'BIRDHOUSE', component: <Birdhouse />, icon: '/drew-portfolio/res/projects/BIRDHOUSE.png', name: 'birdhouse' },
    { value: 'ASPEN', component: <Aspen />, icon: '/drew-portfolio/res/projects/ASPEN.png', name: 'aspen' },
    { value: 'SMASHPARK', component: <Smashpark />, icon: '/drew-portfolio/res/projects/SMASHPARK.png', name: 'smashpark' },
    { value: 'MNTN', component: <Mntn />, icon: '/drew-portfolio/res/projects/MNTN.png', name: 'mntn' },
    { value: 'SIP_STUDIOS', component: <SipStudios />, icon: '/drew-portfolio/res/projects/SIP_STUDIOS.png', name: 'sip studios' },
    // { value: 'BETA', component: <Beta />, icon: 'res/projects/BETA.png', name: 'beta' }
]

class MPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentView: PORT_ENUM.HOME }
        console.log('MMain state', this.state)
    }

    render() {
        return (
            <main id="portfolio-wrapper" tabIndex="-1">
                <ProjectSelect items={PORT_INFO} updateContent={(value) => { this.changeDisplay(value) }} />

                <div id="portfolio-content">
                    {PORT_INFO[this.state.currentView].component}
                    {PORT_INFO[this.state.currentView].component ? <>back to top</> : <></>}
                </div>
                <img id='display-footer' />
            </main>
        );
    }

    changeDisplay(newDisplay) {
        if (this.state.currentView === newDisplay) {
            this.setState({ currentView: 0 })
        } else {
            this.setState({ currentView: newDisplay });
        }
    }

    resetDisplay() {
        this.setState({ currentView: 0 })
    }
}

export default MPortfolio;