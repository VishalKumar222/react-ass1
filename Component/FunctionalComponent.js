import React,{useState} from "react";
function FunctionalComponent(){
    let [flag , setFlag] = useState(false)
    const show = () => {
        setFlag(!flag)
    }
    return (<div className= 'myDiv'>
        <button onClick= {show} className = 'btn'>Div By Using Functional Component</button>
        {
            flag ? <div className= 'showbox'>
                <h1>This is created using Functional component</h1>
                <p style={{color:'red'}}>This is done using external css</p>
                <p style={{color:'green'}}>This is done using inline css</p>
                </div> : null
        }
    </div>)
}
export default FunctionalComponent;