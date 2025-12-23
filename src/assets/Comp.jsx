import Card from './Card'
import './Comp.css'
// import Welcome from './Welcome'

function Comp(){
    let user={
        image:"https://e0.pxfuel.com/wallpapers/945/417/desktop-wallpaper-sydney-sweeney-is-standing-in-black-background-wearing-white-black-coat-suit-girls.jpg",
        name: "Sydney Sweeney",
        age:"22"
    }
    let user2={
        image:"https://images.axios.com/ziZEjxUnVYQUUhHgxWEOxj7jwOY=/0x0:7359x4139/1920x1080/2025/12/14/1765752532430.jpeg",
        name: "Erika Kirk",
        age:"32"
    }
    return(
        <div>
            <Card title={user}/>
            <Card title={user2} />
        </div>
    )
}
export default Comp













{/* <h1>I am a component</h1>
            <Welcome title="I am Title"/> */}