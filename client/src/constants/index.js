import biedronka from '../assets/images/biedronka.jpg'
import lidl from '../assets/images/lidl.jpg'
import kaufland from '../assets/images/kaufland.jpg'

const shops = [
    {name: 'Biedronka', image_url: biedronka},
    {name: 'Lidl', image_url: lidl},
    {name: 'Kaufland', image_url: kaufland},
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

export { shops, footerData };