import { useCallback } from 'react'
import { useState } from 'react/cjs/react.development'
import './Game.css'
const Baseball = ()=>{
  const getNumbers = () =>{
  const nums = [1,2,3,4,5,6,7,8,9,0]
  const array = []
  for (let i=0;i<4;i+=1){
    const chosen = nums.splice(Math.floor(Math.random()*(10-i)),1)[0]
    array.push(chosen)
    }
    return array
  }
  const [value,setValue] = useState("")
  const [answer,setAnswer]= useState(getNumbers())
  const [result,setResult] = useState("")
  const [tries,setTries] =useState([])
  const onChange = (e)=>{
    setValue(e.target.value)
  }
  const onSubmit = ( (e)=>{
    e.preventDefault();
    if (value === answer.join('')){
      setResult('홈런')
      setTries([...tries,{try:value,result:'홈런'}],)
      console.log('홈런')
    }
    else{
      const answerArray = value.split('').map(v=>parseInt(v))
      let strike = 0
      let ball = 0
      if (tries.length >=9){
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}입니다`)
        alert('게임을 다시 시작합니다.')
        setValue('')
        setAnswer(getNumbers())
        setTries([])
      } else{
        for(let i= 0; i<4;i+=1){
          if(answerArray[i]===answer[i]){
            strike+=1
          } else if (answer.includes(answerArray[i])){
            ball+=1
          }
        }        
        setTries([...tries,{try:value,result:`STRIKE: ${strike} ,BALL : ${ball}`}])
        console.log(tries)
        setValue('')
      }
    }
    
  })
  return (
    <div className='container'>
      <h1>야구게임</h1>
      <h3>숫자를 입력하세요</h3>
      <form onSubmit={onSubmit}>
        <input 
        placeholder='네자리숫자'
        value={value}
        onChange={onChange}
        />
        <button onClick={onSubmit}>제출</button>
      </form>
      {/* <h2>정답:{answer}</h2> */}
      <h4>내 답:{value}</h4>
      {result==="홈런"? 
      <h1 style={{color:"hotpink"}}>홈런</h1> 
      :<div>
      {tries.map((tr,i)=>{
        return(
        <div key={i}>{tr.try} ⚾ {tr.result}</div>)
      })}
    </div>}
      
    </div>
  )
}
export default Baseball