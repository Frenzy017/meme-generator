import React from "react"
import memesData from "../components/memesData.jsx"

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     *
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     *
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     *
     * Lastly, update the `getMemeImage` function and the markup
     * to reflect our newly reformed state object and array in the
     * correct way.
     */


        // const [memeImage, meme] = React.useState({
        //
        // })

    const [meme, setMemeImage] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: ""
        })


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}