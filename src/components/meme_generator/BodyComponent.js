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
     * 
     * also map returns a new list of the modified version of original data
     */

    // for forms
    // You use a single state to manage multiple form inputs

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        comments: "comments",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    function handleChange(event){
        console.log(event.target.value, event.target.type, event.target.name)
        const {name, value, type, checked} = event.target
        setFormData(function(previousFormData){
            return {
                ...previousFormData, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        if (formData.password === formData.passwordConfirm){
            console.log("Success!")
        } else {
            console.log("Passwords Do not Match")
            return
        }

        if (formData.joinNewsletter){
            console.log("Subscribed Successfully!")
        }
    }

    /**
     * React.useEffect() takes two parameters ( function and a dependency array)
     * React.useEffect() only renders after the return UI has been done
     */
    React.useEffect(function(){
        fetch("http://some-url.com/api/data/").then(function(response){
            response.json()
        }).then(function(data){
            console.log(data)
            setSomeState(data)
        }).finally()
    }, [someStateVariable])

    React.useEffect(function(){
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)
        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    /**
     * The above example shows how to avoid memory leak when you have a dynanmic rendering on a component
     * when the component mounts you handle normally, when component is removed from DOM (unmount)
     * You make the useEffect returns a function that removes an event listener to avoid memory leak
     */
    return (
        <>
            <section className="search-meme" style={styles}>
                <form className="form-input" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input 
                        className="first-word" type="text" placeholder="First World" 
                        name="firstName" onChange={handleChange} value={formData.firstName} />
                        <input 
                        className="second-word" type="text" placeholder="Second World" 
                        name="secondName" onChange={handleChange} value={formData.lastName} />
                        <textarea 
                        className="bio" value={formData.comments} placeholder="Comments" 
                        onChange={handleChange} name="comments" />

                        <input 
                        type="checkbox" id="isFriendly" checked={formData.isFriendly}
                        onChange={handleChange}
                        />
                        <label htmlFor="isFriendly">Are you friendly</label>

                        <fieldset>
                            <legend>Current Employment Status</legend>
                            <input 
                            type="radio" id="unemployed" name="employment" value="employed"
                            onChange={handleChange} checked={formData.employment == "employment"}
                            />
                            <label htmlFor="unemployed">Unemployed</label>
                            <br/>
                            <input 
                            type="radio" id="part-time" name="part-time" value="part-time"
                            onChange={handleChange} checked={formData.employment == "part-time"}
                            />
                            <label htmlFor="part-time">Part Time</label>
                        </fieldset>

                        <select id="favColor" value={formData.favColor} onChange={handleChange} name="favColor">
                            <option value="">-- Choose --</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                        </select>
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