
import Card from './Card';
import Closet from './Closet';

let myData = [
    {
        id: 0, type: "3d", title: "DRESS ME", url: "CLOSET", arrow: "CLOSET", stack: ["React", "Three.js", "Blender",],
        p1: `This project started with me trying to learn blender in my free time for fun. Once I found out about three.js I started looking for ways to incorporate the two. Eventually I started  playing with changing his clothes and moving the camera around. I wanted to create an interactive avatar, 
    similar to something you would see in a video game.`, p2: "In the future I would like to add more clothing options and add animations when the camera moves.",
        img1: "./images/closet/closet1.png", img2: "./images/closet/model.png"
    },

    {
        id: 1, src: "/images/feed.gif", arrow: "LIVE SITE", img1: "./images/feed1.png", img2: "./images/feed2.png", url: "https://shopifyfeed.herokuapp.com/", type: "Web App", stack: ["React", "Material UI", "MongoDb", "Node.js"], title: "SHOPIFY FEED",
        p1: "The idea behind this app was that I found myself spending alot of time checking shops for their new arrivals. I wanted to have one feed instead that would combined all these new arrivals together."
        , p2: " I ended up using Shopify's JSON api to get data from the shops I wanted. It checks for new items every couple of minutes and adds them to a database. Then uses this data to create a feed with a responsive masonry layout that has infinite scroll/pagination. You can also login using auth0 and customize you're own feed with the shops i've added."
    },

]


const CardList = () => {
    
    const cardData = myData.map(data => {
        return (
            <Card
                key={data.id}
                arrow={data.arrow}
                stack={data.stack}
                id={data.id}
                title={data.title}
                url={data.url}
                src={data.src}
                type={data.type}
                img={data.src}
                p1={data.p1}
                p2={data.p2}
                img1={data.img1}
                img2={data.img2}
                myModel={data.id === 0 ? <Closet
                /> : ""}
            >

            </Card>

        )
    })

    return (
        <>
        {cardData}</>
    )

}

export default CardList; 