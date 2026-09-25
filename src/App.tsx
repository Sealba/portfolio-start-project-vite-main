import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import photopng1 from "./assets/images/1.png";
import photopng2 from "./assets/images/2.png";
import photopng3 from "./assets/images/3.png";
import photopng4 from "./assets/images/4.png";

export const ProjectsData = [{
    id: 1, name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: photopng1,
    link: "#",
}, {
    id: 2, name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: photopng2,
    link: "#",
}, {
    id: 3, name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: photopng3,
    link: "#",
}, {
    id: 4, name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: photopng4,
    link: "#",
},]

function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Projects/>
        </div>
    )
}

export default App

