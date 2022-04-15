import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import ProjectSelect from '../portfolio/ProjectSelect'
import { defaultStyles, transitionStyles } from './portfolio-animate'

import Birdhouse from '../portfolio/pages/Birdhouse'
import Aspen from '../portfolio/pages/Aspen'
import Smashpark from '../portfolio/pages/Smashpark'
import Mntn from '../portfolio/pages/Mntn'
import SipStudios from '../portfolio/pages/SipStudios'
import Beta from '../portfolio/pages/Beta'

import './portfolio.css'
import '../portfolio/projects.css'
import { wait } from '@testing-library/user-event/dist/utils';

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

const page_animation_duration = 3000

class MPortfolio extends React.Component {

    animationDelay = 0

    constructor(props) {
        super(props);
        this.state = { currentView: PORT_ENUM.HOME, lastView: PORT_ENUM.HOME, hideArr: PORT_INFO.map(() => { return true }) }
        // this.state = { currentView: PORT_INFO.map((value, index, array) => { array.push(false) }) }
        console.log('MMain state', this.state)
    }

    // render() {
    //     return (
    //         <main id="portfolio-wrapper" tabIndex="-1">
    //             {/* <ProjectSelect items={PORT_INFO} /> */}
    //             <ProjectSelect items={PORT_INFO} updateContent={(value) => { this.changeDisplay(value) }} />

    //             <div id="portfolio-content">
    //                 {PORT_INFO.map((item, index) => {
    //                     return (item.component ?
    //                         <div className='hide-container' hidden={this.state.currentView !== index} key={'portfolio' + index}>
    //                             <Animated animationIn='fadeInDown' animationOut='fadeOutUp' animationInDuration={3000} animationOutDuration={3000} isVisible={this.state.currentView === index} timeout={300}>
    //                                 <div className='animated-content'>
    //                                     {PORT_INFO[index].component}
    //                                     <span style={{ align: 'center' }} onClick={() => this.clearDisplay()}>back to top</span>
    //                                 </div>
    //                             </Animated>
    //                         </div> : null)
    //                 })}
    //             </div>
    //             <img id='display-footer' />
    //         </main>
    //     );
    // }

    render() {
        return (
            <main id="portfolio-wrapper" tabIndex="-1">
                {/* <ProjectSelect items={PORT_INFO} /> */}
                <ProjectSelect items={PORT_INFO} updateContent={(value) => { this.changeDisplay(value) }} />

                <div id="portfolio-content">
                    <div id='animated-container' style={{ '--page-change-duration': page_animation_duration + 'ms' }} className={this.state.portfolioContent ? 'content' : ''}>
                        {/* <div className='hide-container' hidden={this.state.currentView === 0}> */}
                        {PORT_INFO.map((item, index) => {
                            return (item.component ?
                                <Animated key={'portfolio' + index} animationIn='fadeInDown' animationOut='fadeOutUp' animationInDelay={this.state.animationDelay} animationInDuration={page_animation_duration} animationOutDuration={page_animation_duration} isVisible={this.state.currentView !== 0} timeout={300}>
                                    <div className='animated-content' hidden={this.state.hideArr[index]}>
                                        {PORT_INFO[index].component}
                                        <p className='close-portfolio-btn' onClick={() => this.clearDisplay()}>back to top</p>
                                    </div>
                                </Animated> : null)
                        })}
                    </div>
                </div>
                <img id='display-footer' />
            </main>
        );
    }

    changeDisplay(newDisplay) {
        // hide old display
        let currentHideArr = this.state.hideArr
        console.log('state pre changes', this.state)
        // let saveState
        this.setState((prevState) => {
            let obj = { lastView: prevState.currentView }
            if (prevState.currentView === newDisplay) {
                obj.currentView = 0
            } else {
                obj.currentView = newDisplay
            }
            currentHideArr[prevState.currentView] = true
            currentHideArr[obj.currentView] = false
            obj.portfolioContent = obj.currentView !== 0
            obj.hideArr = currentHideArr
            this.animationDelay = prevState.currentView !== 0 ? page_animation_duration : 0
            return obj
        }, () => {
            console.log('state update cb', this.state)
            wait(this.state.lastView !== 0 ? page_animation_duration : 0).then(() => {
                // this.setState({'hideArr': { oldView: true}})
                currentHideArr[this.state.lastView] = true
                currentHideArr[this.state.currentView] = false
                console.log('new hide ARR', currentHideArr)
                this.setState({ hideArr: currentHideArr }, () => {
                    console.log('hidearr cb', this.state)
                })
                // setHideArr(hideArr[oldView]=true)
                // this.state.hideArr[this.state.currentView] = false
                // this.state.hideArr[this.state.currentView] = false
                console.log('post wait', this.state)
            })
        })
        // console.log('state', this.state)

        // wait(page_animation_duration).then()
        // this.state.currentView[newDi] = false
        // if (this.state.currentView[newDisplay]) {
        //     this.state.currentView[newDisplay] = false
        //     this.setState({ currentView: newDisplay });
        // }
        //display new display
    }

    clearDisplay() {
        this.changeDisplay(0)
    }

    getAnimationDelay() {
        return this.state.lastView !== 0 ? page_animation_duration : 0
    }
}

export default MPortfolio;