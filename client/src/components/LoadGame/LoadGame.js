import React, { Component, Fragment } from 'react';
import MarkdownReader from './MarkdownReader';

class LoadGame extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const pathToFile = 'game/assets/story/story.md';
        this.setState({ input: pathToFile})       
    }
    render() { 
        return (
            <Fragment>
                <div id="story-section-height" className="row justify-content-center">
                    <div className="col-6" >  
                        <h4 className='text-center '>Story Section</h4> {/*  {this.state.input} */}
                        <button type="button" className='btn btn-block btn-info' onClick={this.handleClick}>Load Game</button>
                    </div>
                {this.state.input ? (
                    <div id="story-section-content" className="col-12 mt-4">
                        <MarkdownReader input={this.state.input}/>
                    </div>
                ): null }
                </div>
            </Fragment>
          );
    }
}
 
export default LoadGame;

