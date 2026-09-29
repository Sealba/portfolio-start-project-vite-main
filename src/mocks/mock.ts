import photopng1 from "../assets/images/1.png";
import photopng2 from "../assets/images/2.png";
import photopng3 from "../assets/images/3.png";
import photopng4 from "../assets/images/4.png";

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
    description: "Весенняя акция",
    image: photopng4,
    link: "https://greenfield-promo.ru/",
}]


export const ProgressBarData = [
    {id: 1, progress:60 , text:"Html" },
    {id: 2, progress:70 , text:"CSS, Sass" },
    {id: 3, progress:50 , text:"React" },
    {id: 4, progress:60 , text:"Styled Components" },
]

export const SocialsData = [
    {id:1 , type: "a" , link: "https://github.com/Sealba", svgId:"gitHub", width:"32rem", height:"32rem", viewbox:"0 0 32 32"},
    {id:2 , type : "a"  , link: "/" , svgId: "linkIn", width:"32rem", height:"32rem", viewbox:"0 0 32 32"},
    {id:3 , type: "a" , link: "https://t.me/Sealba", svgId:"telegram", width:"35rem", height:"30rem", viewbox:"0 0 35 30"},
]