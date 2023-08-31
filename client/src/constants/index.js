import biedronka from '../assets/images/biedronka.jpg'
import lidl from '../assets/images/lidl.jpg'
import kaufland from '../assets/images/kaufland.jpg'

const shops = [
    {name: 'Biedronka', image_url: biedronka},
    {name: 'Lidl', image_url: lidl},
    {name: 'Kaufland', image_url: kaufland},
]

const categories = [
    {name: 'Mięso & ryby', icon: '#', routeLink: '/categories/meat'},
    {name: 'Napoje', icon: '#', routeLink: '/categories/drinks'},
    {name: 'Słodycze', icon: '#', routeLink: '/categories/sweets'},
    {name: 'Owoce', icon: '#', routeLink: '/categories/fruits'},
    {name: 'Pieczywo', icon: '#', routeLink: '/categories/bread'},
    {name: 'Warzywa', icon: '#', routeLink: '/categories/vegetables'},
    {name: 'Mrożone', icon: '#', routeLink: '/categories/frozen'},
]

const footerData = [
    {
        title: "Shop", 
        links: [
            {name: "Gift cards", routeLink: "/"},
            {name: "Site map", routeLink: "/"},
            {name: "Polka blog", routeLink: "/"},
            {name: "Login", routeLink: "/"},
            {name: "Sign in", routeLink: "/"},
        ]
    },
    {
        title: "Sell", 
        links: [
            {name: "Sell on Polka", routeLink: "/"},
            {name: "Teams", routeLink: "/"},
            {name: "Forums", routeLink: "/"},
            {name: "Affiliates", routeLink: "/"},
        ]
    },
    {
        title: "About", 
        links: [
            {name: "Polka, Inc.", routeLink: "/"},
            {name: "Policies", routeLink: "/"},
            {name: "Investors", routeLink: "/"},
            {name: "Careers", routeLink: "/"},
            {name: "Press", routeLink: "/"},
        ]
    },
    {
        title: "Help", 
        links: [
            {name: "Help center", routeLink: "/"},
            {name: "Trust and safety", routeLink: "/"},
            {name: "Privacy settings", routeLink: "/"},
        ]
    },
]

export { shops, categories, footerData };