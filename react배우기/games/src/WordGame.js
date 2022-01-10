import { useState } from "react"
import './Game.css'
const WordGame =()=>{
  const [word,setWord] = useState("임현홍")
  const [value,setValue] = useState("")
  const [correct,setCorrect] = useState(false)
  const onChange = (e)=>{
    setValue(e.target.value)
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    if (word[word.length-1]===value[0]){
      setCorrect(true)
      setWord(value)
      setValue("")
    }
    else{
      setCorrect(false)
      setValue("")
    }
  }
  return (
    <div className="container">
      <h1>{word}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          onSubmit={onSubmit}
        ></input>
        <br/>
        {correct?<h1 style={{color:"blueviolet"}}>쿵쿵따</h1>:<h1 style={{color:"hotpink"}}>엥..</h1>}
      </form>
    </div>
  )
}
export default WordGame