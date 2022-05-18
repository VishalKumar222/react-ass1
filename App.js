import './App.css';
import Body from './Component/main';
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent'; 
import './Component/style.css'



function App() {
   return ( < div className = "App" >
       <Body/>
       
    <h1>Styling Using Functional and Class Component</h1>
       
      <FunctionalComponent/>
      <ClassComponent/>
        </div>

    );
}

export default App;