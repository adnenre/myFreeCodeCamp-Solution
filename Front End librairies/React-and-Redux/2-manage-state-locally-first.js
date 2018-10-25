class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "",
        messages: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitMessage = this.submitMessage.bind(this)
    }
    // add handleChange() and submitMessage() methods here
    handleChange(e){
     
      this.setState({input:e.target.value})
    }
    submitMessage(){
       let newMsg = this.state.input;
       
      this.setState({
        input:'',
        messages:this.state.messages.concat(newMsg)
        })
    }
    render() {
       const allmsgs = this.state.messages;
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
             <input type='text' 
             value={this.state.input}
             onChange={this.handleChange}
             />
             <button 
             onClick={this.submitMessage}
             >Add Message</button>
             <ul>
              {allmsgs.map((el,index )=><li key={index}>{el}</li>)}
             </ul>
          { /* change code above this line */ }
        </div>
      );
    }
  };