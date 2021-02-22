import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'

class MarkdownReader extends Component {
    constructor(props) {
        super(props);
       // this.state = { markdown: this.props};
       this.state = { markdown: '' };
      }
    componentDidMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(this.props.input)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render(){
        
        return (    
             //   <ReactMarkdown  source = {this.props.input} />
               <ReactMarkdown  source = {this.state.markdown} />
            );
        }
}
 
export default MarkdownReader;