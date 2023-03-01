import Auction from './assets/auction-plaza-pic.png'
import Coffee from './assets/coffee-site.png'
import Planet from './assets/planet-fact.png'
import Pokedex from './assets/project-shot-1.png'
import Rock from './assets/rock-paper.png'
const projects = ([
    {
        project: 'Rock Paper Scissors',
        desc: 'I Built this app to perfect my skills with react and useState.',
        tech: ["React", "HTML", "CSS"],
        repo: 'https://github.com/waustin45/rock-paper-scissors.git',
        link: 'https://waustin45.github.io/rock-paper-scissors/',
        img: Rock
    },
    {
        project: 'Pokedex',
        desc: 'Worked with a team to build a Pokémon pokedex using HTML, JavaScript, and CSS that generates a list of each character and its statistics within the game. I Built and integrated a search function to query for a specific character by name while also creating an indexed list of characters that can be individually picked and added to a team. The app reached a userbase of 40 users.',
        tech: ["HTML", "CSS", "Node", "Bootstrap"],
        repo: '',
        link: '',
        img: Pokedex
    },
    {
        project: 'Planet Facts',
        desc: 'Used React.js to create a site that gives facts and information about each planet.',
        tech: ["React", "HTML", "CSS"],
        repo: '',
        link: '',
        img: Planet
    },
    {
        project: 'Auction Site',
        desc: 'Lead a team to build an Auction site using HTML, Handlebars, JavaScript, Tailwind CSS and Express.Using Express.js with MySQL, I built a functioning backend that stored userinformation as well as any product listing that user posted. Using Sequelize I created a homepage sorting feature that sorted the product listings by ascending/descending prices and alphabetical order',
        tech: ["Javascript", "HTML", "CSS", "Express.JS", "MySQL"],
        repo: '',
        link: '',
        img: Auction
    },
    {
        project: 'Coffee Site',
        desc: 'I used HTML and CSS to build a coffee subscription site that enabled the user to place an order for a variety of coffee with Javascript.',
        tech: ["HTML", "CSS", "Javascript"],
        repo: '',
        link: '',
        img: Coffee
    },

])

export default projects