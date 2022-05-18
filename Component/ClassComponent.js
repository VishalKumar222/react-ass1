import React, {Component} from "react";
class ClassComponent extends Component {
    constructor (){
        super();
        this.state = {flag : false}
    }
    show = () => {
       this.setState({
           flag: !this.state.flag
       }) 
    }
    render(){
             return ( <div className='myDiv'>
                 <button onClick={()=> this.show()} className = 'btn'> Div By Using Class Component</button>
                 {
                     this.state.flag ? <div className = 'showbox'>
                        <h1>This is created Using class Component</h1>
                       <p  style={{color:'red'}}>This is done Using external css</p>
                       <p style={{color:"green"}}>This is done using inline css</p>
                        
                     </div> : null
                 }
             </div> )
    }
}
export default ClassComponent;
