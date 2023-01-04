import { Component } from "react";
import { Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/navigationbar.jsx";
import { Introduction } from "./Pages/introduction";
import Footer from './Components/Footer/footer';
import { Menu } from "./Pages/menu.js";
import { About } from "./Pages/about.js";
import { Experience } from "./Pages/experience.js";
import { Work } from "./Pages/work.js";
import { Contact } from "./Pages/contact.js";

import "./App.css";


class App extends Component {
    render()
    {
        return (
            <div className="page">
                <NavigationBar/>
                <div id="content">
                    <Route exact path="portfoliowebsite/Home" component={Introduction}/>
                    {/* <Route exact path="/menu" component={Menu}/> */}
                    <Route exact path="portfoliowebsite/About" component={About}/>
                    <Route exact path="portfoliowebsite/Experience" component={Experience}/>
                    <Route exact path="portfoliowebsite/Work" component={Work}/>
                    <Route exact path="portfoliowebsite/Contact" component={Contact}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;