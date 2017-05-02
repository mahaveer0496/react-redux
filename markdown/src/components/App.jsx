import React, { Component } from 'react';
import marked from 'marked';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         inputText: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
         outputText: ''
      }
   }
   componentDidMount(){
      this.setState({
         outputText: marked(this.state.inputText)
      },()=>{
         this.refs.paragraph.innerHTML = this.state.outputText
      })
   }
   markIt = (event) => {
      let text = event.target.value
      this.setState({
         outputText: marked(text),
         inputText:text
      }, () => {
         this.refs.paragraph.innerHTML = this.state.outputText
      })

   }
   render() {

      return (
         <div className="container-fluid">
            <h1 className="text-center">FCC Markdown Editor</h1>
            <div className="row">
               <div className="col-6">
                  <textarea name="enterText" onChange={this.markIt} value={this.state.inputText}></textarea>
               </div>
               <div className="col-6">
                  <p className="output" ref="paragraph">{this.state.outputText}</p>
               </div>
            </div>
         </div>
      )
   }
}
