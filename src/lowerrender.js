import React, {useState, useEffect} from "react";
import Input from './input'

export default function Memeimage(){

    //Data from API is saved in d state below
const [data, setData] = useState([])
//Fetch data from api
useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setData(data.data.memes))
},[])

//the input state to update the text as they are been typed
const [input, setInput] = React.useState({
    top:"",
    bottom:"",
    url:"https://i.imgflip.com/8p0a.jpg"
})

//function for any unchange activity

function change(event){
    const {name,value} = event.target
        if(name === 'top'){
            setInput(prev => ({
                ...prev,
                top: event.target.value
            }))
        }else if(name === 'bottom'){
            setInput(prev => ({
                ...prev,
                bottom: event.target.value
            }))
        }
}



function generate(event){
    const allData = data
    event.preventDefault()
    const random = Math.floor(Math.random() * data.length) + 1
    const url = allData[random].url
    setInput(prev => ({
        ...prev,
        url: url
    }))
}
    return(
       
        <div className="root_meme">
              <form>
                <div className='input_field'>
                    <input type='text' placeholder='Top Text' onChange={change} name='top'/>
                    <input type='text' placeholder='Bottom Text' onChange={change} name='bottom'/>
                </div>
                <div className='submit'>
                <button onClick={generate}> Generate Meme</button>
                </div>
            </form>

          <div className="memeImage">
            <div className="imgrender">
                    <img src={input.url} className="memeimg" />
                    <h1 className="top_text">{input.top}</h1>
                    <h1 className="bottom_text">{input.bottom}</h1>
                </div>
               
          </div>
          <pre className="tobi"> --Tobi/codes-- </pre>
        </div>
    )
}