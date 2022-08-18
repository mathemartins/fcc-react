import React from 'react';
import memesData from './data/data.js'

export default function Body(props){
    let url = 'http://localhost';
     
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray)
        url = memesArray[randomNumber].url;
        console.log(url)
    }

    const thingsArray = ["thing 1", "thing 2", "thing 3", "thing 4"]

    const addNewThing = function () {
        const newThingText = `thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray)
    }

    const thingList = thingsArray.map(function(data){
        return (
            `<p key={data}> {data} </p>`
        )
    })

    React.useState("Yes", function (yes){
        return "yes"
    })

    // Destructuring states
    const [isMember, setIsMember] = React.useState(true);

    function handleMembership(){
        setIsMember(false)
    }

    const [likeThis, setLikeThis] = React.useState(false);

    function handleLike() {
        setLikeThis(function(previousLike){
            return !previousLike;
        })
    }

    const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

    function addItems() {
        setThingsArray(function(prevThingsArray){
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(function(thing){
        return <p key={thing}>{thing}</p>
    })

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+2349013129381",
        email: "itsanexample@.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

    function toggleFavorite(){
        setContact(function(previousDataState){
            return {
                ...previousDataState, 
                isFavorite: !previousDataState.isFavorite
            }
        })
    }

    const styles = {
        backgroundColor: props.darkMode ? '#222222' : '#cccccc'
    }

    const [boxColor, setBoxColor] = React.useState(props.on)

    function toggleBoxColor(){
        setBoxColor(function(previousState){
            return !props.on
        })
    }

    const styles = {
        backgroundColor: boxColor ? '#222222' : 'transparent'
    }

    // Conditional rendering
    // format: { condtion && <html-element>some word</html-element>}
    // {isShown && <h3>Is Does Show</h3>}

    /**
     * When looping through an array and want to interact with a single entity
     * pass the key in component and id in component and pass as props
     * then use id as argument where the function is been created and use to get the particular entity
     * also map returns a new list of the modified version of original data
     */

    // for forms
    // You use a single state to manage multiple form inputs

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
    })

    function handleChange(event){
        console.log(event.target.value, event.target.type, event.target.name)
        setFormData(function(previousFormData){
            return {
                ...previousFormData, [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <section className="search-meme" style={styles}>
                <form className="form-input">
                    <div className="inputs">
                        <input className="first-word" type="text" placeholder="First World" name="firstName" onChange="handleChange"/>
                        <input className="second-word" type="text" placeholder="Second World" name="secondName" onChange="handleChange"/>
                    </div>

                    <button className="btn">Get a meme image</button>
                </form>
            </section>

            <section className="meme-result">
                <div className="meme-result-image">
                    <img className="img-result" src={props.image} alt="" width={477} height={268} />
                </div>
            </section>
        </>
    )
}