import React, { Component, Fragment } from 'react';
import MarkdownReader from './MarkdownReader';
import {connection} from '../../modules/WSocket/WSocket';

class LoadGame extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '',
            highlited: false };
        this.ws = connection(
            [],
            [(e) => this.onMessage(e)],
            []
            );

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const pathToFile = 'game/assets/story/story.md';
        this.setState({ input: pathToFile}); 
        this.ws.sendMessage(pathToFile); // to be checked by Nelson
             
    }
    render() { 
        return (
            <Fragment>
                <div 
                id="story-section-height" 
                className={`row droppable justify-content-center ${this.state.highlighted ? 'border-green-600 bg-green-100':null}` }
                onDragEnter={(e) => {
                    console.log("Entered Component", this.state.highlighted);
                    this.setState({highlighted: true});
                }}

                onDragLeave={(e) => {
                    this.setState({highlighted: false});
                }}


                onDragOver={(e) => {
                    e.preventDefault();
                    console.log(e.dataTransfer);


                }} 
                onDrop={(e) => {
                    e.preventDefault();
                    this.setState({highlighted: false});

                 //   console.log(e.dataTransfer.files);
                    Array.from(e.dataTransfer.files)
                        .filter((file) => file.type === "text/markdown")
                        .forEach(async (file)=>{
                            const text = await file.text();
                            this.setState({ input: text}) 
                            console.log(this.state.input);
                        });
                }}             
                >
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
