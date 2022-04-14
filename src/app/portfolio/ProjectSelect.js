import React from 'react';

class ProjectSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentView: '' };
        // this.updateContent = this.updateContent.bind(this);
    }

    render() {
		var projectCnt = 0
		for(let i = 0; i<this.props.items.length; i++) {
			if(this.props.items[i].icon || this.props.items[i].name)
                projectCnt++;
		}
		console.log(`grid-template: "${(25.0 / projectCnt) + 'vw'}" auto`) //style={`grid-template: "${template}" auto`}
        return (
            <div id="portfolio-view-wrapper">
				<ul id="projects"  style={{ '--project-cnt' : projectCnt }}>
                    {this.props.items.map((item, index) => (item.icon || item.name) ? (
                        <li className="project" key={index} onClick={() => this.props.updateContent(index)}>
                            <img className="project-icon" src={item.icon} />
                            {/* <p className='project-name' style={{ fontSize : (.7 * (25.0 / projectCnt)) + 'vw'}}>{item.name}</p> */}
                            <p className='project-name title-font'>{item.name}</p>
                        </li>
                    ) : '')}
				</ul>
			</div>
        );
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     if (this.state.text.length === 0) {
    //         return;
    //     }
    //     const newItem = {
    //         text: this.state.text,
    //         id: Date.now()
    //     };
    //     this.setState(state => ({
    //         items: state.items.concat(newItem),
    //         text: ''
    //     }));
    // }
}

export default ProjectSelect;
