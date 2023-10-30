import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoJquery, BiLogoNodejs, BiLogoMongodb, BiLogoReact, BiLogoHeroku, BiLogoNetlify, BiLogoGraphql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiBulma, SiMongoose, SiWebpack, SiJsonwebtokens, SiVite, SiHandlebarsdotjs, SiSequelize, SiInsomnia, SiBabel, SiSvg, SiJest } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbJson } from 'react-icons/tb';

const projects = [
    {
        'id': 1,
        'name': 'Movie Project',
        'screenshot': './MovieProject.png',
        'siteLink': 'https://kkurzawa.github.io/Movie-Project/',
        'description': 'Built with HTML, CSS, JavaScript, JQuery, Bulma and the TMBD API.',
        'repositoryLink': 'https://github.com/KKurzawa/Movie-Project'
    },
    {
        'id': 2,
        'name': 'JavaScript Quiz',
        'screenshot': './JavaScriptChallenge.png',
        'siteLink': 'https://kkurzawa.github.io/JavaScript-Fundamentals-Challenge/',
        'description': 'Built with HTML, CSS, and JavaScript.',
        'repositoryLink': 'https://github.com/KKurzawa/JavaScript-Fundamentals-Challenge'
    },
    {
        'id': 3,
        'name': 'Grocery Store Management System',
        'screenshot': './GroceryStoreManagementSystem.png',
        'siteLink': 'https://secure-gorge-43395-b510f5266de9.herokuapp.com/',
        'description': 'Built with Handlebars, JavaScript, Bootstrap, Express, MySql, Node, and Apexcharts.',
        'repositoryLink': 'https://github.com/KKurzawa/Grocery-Store-Employee-Management-System'
    },
    {
        'id': 4,
        'name': 'Weather Dashboard',
        'screenshot': './WeatherDashboard.png',
        'siteLink': 'https://kkurzawa.github.io/Weather-Dashboard/',
        'description': 'Built with HTML, CSS, JavaScript, bootstrap, and the Open Weather API.',
        'repositoryLink': 'https://github.com/KKurzawa/Weather-Dashboard'
    },
    {
        'id': 5,
        'name': 'Personal Portfolio',
        'screenshot': './Portfolio.png',
        'siteLink': 'https://kkurzawa.github.io/KrisKurzawa-Portfolio/',
        'description': 'Built with HTML and CSS.',
        'repositoryLink': 'https://github.com/KKurzawa/KrisKurzawa-Portfolio'
    },
    {
        'id': 6,
        'name': 'Work Day Scheduler',
        'screenshot': './WorkDayScheduler.png',
        'siteLink': 'https://kkurzawa.github.io/Work-Day-Scheduler/',
        'description': 'Built with HTML, CSS, JavaScript, and DayJs.',
        'repositoryLink': 'https://github.com/KKurzawa/Work-Day-Scheduler'
    },
];

export function getProjects() {
    return projects;
}

const skills = [
    {
        'id': 1,
        'icon': <AiFillHtml5 />,
        'name': 'HTML',
        'link': 'https://html.spec.whatwg.org/',
    },
    {
        'id': 2,
        'icon': <FaCss3Alt />,
        'name': 'CSS',
        'link': 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
        'id': 3,
        'icon': <IoLogoJavascript />,
        'name': 'JavaScript',
        'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        'id': 4,
        'icon': <BiLogoGraphql />,
        'name': 'GraphQl',
        'link': 'https://graphql.org/',
    },
    {
        'id': 5,
        'icon': <BiLogoNetlify />,
        'name': 'Netlify',
        'link': 'https://www.netlify.com/',
    },
    {
        'id': 6,
        'icon': <BiLogoHeroku />,
        'name': 'Heroku',
        'link': 'https://www.heroku.com/home',
    },
    {
        'id': 7,
        'icon': <BiLogoReact />,
        'name': 'React',
        'link': 'https://react.dev/',
    },
    {
        'id': 8,
        'icon': <BiLogoMongodb />,
        'name': 'MongoDb',
        'link': 'https://www.mongodb.com/try/download/shell',
    },
    {
        'id': 9,
        'icon': <BiLogoNodejs />,
        'name': 'Node',
        'link': 'https://nodejs.org/en',
    },
    {
        'id': 10,
        'icon': <BiLogoJquery />,
        'name': 'JQuery',
        'link': 'https://jquery.com/',
    },
    {
        'id': 11,
        'icon': < BsFillBootstrapFill />,
        'name': 'Bootstrap',
        'link': 'https://getbootstrap.com/',
    },

    {
        'id': 13,
        'icon': <SiJest />,
        'name': 'Jest',
        'link': 'https://jestjs.io/',
    },
    {
        'id': 14,
        'icon': <SiSvg />,
        'name': 'SVG',
        'link': 'https://www.w3.org/Graphics/SVG/',
    },
    {
        'id': 15,
        'icon': <SiInsomnia />,
        'name': 'Insonmnia',
        'link': 'https://insomnia.rest/',
    },
    {
        'id': 16,
        'icon': <SiSequelize />,
        'name': 'Sequelize',
        'link': 'https://sequelize.org/',
    },
    {
        'id': 17,
        'icon': <SiHandlebarsdotjs />,
        'name': 'Handlebars',
        'link': 'https://handlebarsjs.com/',
    },
    {
        'id': 18,
        'icon': <SiVite />,
        'name': 'Vite',
        'link': 'https://vitejs.dev/',
    },
    {
        'id': 19,
        'icon': <SiJsonwebtokens />,
        'name': 'JSONWebtokens',
        'link': 'https://jwt.io/',
    },
    {
        'id': 20,
        'icon': <SiWebpack />,
        'name': 'Webpack',
        'link': 'https://webpack.js.org/',
    },
    {
        'id': 21,
        'icon': <SiMongoose />,
        'name': 'Mongoose',
        'link': 'https://mongoosejs.com/',
    },
    {
        'id': 23,
        'icon': <SiBulma />,
        'name': 'Bulma',
        'link': 'https://bulma.io/',
    },
    {
        'id': 24,
        'icon': <GrMysql />,
        'name': 'MySQL',
        'link': 'https://www.mysql.com/',
    },
    {
        'id': 25,
        'icon': <TbJson />,
        'name': 'JSON',
        'link': 'https://www.json.org/json-en.html',
    },
    {
        'id': 26,
        'icon': <SiBabel />,
        'name': 'Babel',
        'link': 'https://babeljs.io/',
    },
];

export function getSkills() {
    return skills;
}