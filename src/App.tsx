import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import photopng1 from "./assets/images/1.png";
import photopng2 from "./assets/images/2.png";
import photopng3 from "./assets/images/3.png";
import photopng4 from "./assets/images/4.png";
import {Technologies} from "./layout/sections/technologies/Technologies.tsx";

export const ProjectsData = [{
    id: 1, name: "Фабрика Карат",
    description: "Акция компании Карат",
    image: photopng1,
    link: "https://fabrika-karat.ru/",
}, {
    id: 2, name: "Тесс + Ламода",
    description: "Коллаборация TESS X LAMODA",
    image: photopng2,
    link: "https://tess-lamoda.ru/",
}, {
    id: 3, name: "Dixy + Jardin",
    description: "Коллаборация Dixy X Jardin",
    image: photopng3,
    link: "https://jardin-dixy.ru/",
}, {
    id: 4, name: "Greenfield",
    description: "Весенняя акиция",
    image: photopng4,
    link: "https://greenfield-promo.ru/",
},]

function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Projects/>
            <Technologies/>
        </div>
    )
}

export default App

