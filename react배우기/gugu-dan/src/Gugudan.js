import { useCallback, useState } from "react"

const Gugudan = ()=>{
  const [num1,setNum1] =useState(Math.floor(Math.random()*9)+1)
  const [num2,setNum2] =useState(Math.floor(Math.random()*9)+1)
  const [answer,setAnswer] = useState("")
  const [correct,setCorrect] = useState(false)
  const [score,setScore] = useState(0)
  
  const onChange = (e)=>{
    setAnswer(e.target.value)
  }
  const onSubmit = useCallback((e)=>{
    e.preventDefault();
    console.log(num1,num2, Number(answer))
    if (num1*num2 ===  Number(answer)){
      setCorrect(true)
      setScore(score+1)
    }
    else{
      setCorrect(false)
      setScore(0)
    }
    setAnswer("")
    setNum1(Math.floor(Math.random()*9)+1)
    setNum2(Math.floor(Math.random()*9)+1)
  },[answer])

  return(
    <div>
      <h1>{num1} 곱하기 {num2}은?</h1>
      <form onSubmit={onSubmit} >
        <input 
          value={answer} 
          onChange={onChange}
          placeholder="숫자를 적으세요"/>
        <button 
        onClick={onSubmit}
        type="submit">확인하기</button>
      </form>
      <h1>내가 적은 답? {answer}</h1>
        {correct?<h1 style={{color:"green"}}>정답입니다.</h1>
        :<h1 style={{color:"red"}}>틀렸습니다.</h1>}
      <h1 style={score? {color:"blue"}: {color:"red"}}>콤보:{score}</h1>
    </div>
  )
}
export default Gugudan