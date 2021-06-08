// App.js
import React from "react";
import ReactDOM from "react-dom";
import './App.css';


const App = () => {
  
 return (    
<div className="App">
        <div className="background" style={{ backgroundImage: `url("https://mars.nasa.gov/system/internal_resources/details/original/470_experience_insight_16x9_brighter.jpg")` }}>
                <div>
                    <h1  className="text" id="titre">Latest Weather <br></br>
                        at Elysium Planitia
                    </h1>
                </div>
                <div>
                    <h2 className="text2" id="text">InSight has temporarily suspended daily weather measurements. As more data becomes available, itr <br></br>
                    will appear below. Meanwhile, get the latest Mars weather from the <a href="url">Curiosity Rover</a>.
                    </h2>
                </div>

                <div className="affich">
                    <div className="sol861">

                    </div>

                    <div className="tempe">
                        
                    </div>
                </div>

                <div className="sol">
                    <div className="sol1">

                    </div>

                    <div className="sol2">

                    </div>

                    <div className="sol3">

                    </div>
                    <div className="sol4">

                    </div>

                    <div className="sol5">

                    </div>

                    <div className="sol6">

                    </div>

                    
                    <div className="sol7">

                    </div>
                </div>
        </div>
  </div>
 );
};

function nasaAPI() {
    fetch('https://api.nasa.gov/insight_weather/?api_key=PbSTQLOONNboqZtLh7aOkvfuXp5QMIokby4xl5Pj&feedtype=json&ver=1.0')
    .then( function(response) {
        return response.json();
        
    })
    //const element = <h1>Hello, world</h1>;
    //ReactDOM.render(element, document.getElementById('root'));


}




nasaAPI();


export default App;