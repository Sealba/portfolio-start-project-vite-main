import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Technologies} from "./layout/sections/technologies/Technologies.tsx";
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Hero} from "./layout/sections/hero/Hero.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <Projects/>
            <Technologies/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default App

