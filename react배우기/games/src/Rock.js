import { useCallback, useEffect, useState } from 'react'
import './Game.css'

const Rock = ()=>{
  const [myturn,setMyturn] = useState('')
  const [comturn,setComturn] = useState('')
  const [win,setWin] = useState('')

  const onClick = (e)=>{
    const RSP = ["가위","바위","보"]
    var randomNum = Math.floor(Math.random()*3)
    setMyturn(e.target.value)
    setComturn(RSP[randomNum])
  }

  const whoWin = useCallback(()=>{
    if (comturn===myturn){
      setWin("draw")
    }
    else if ((comturn==="가위" & myturn==="보")|
        (comturn==="바위"&myturn==="가위")|
        (comturn==="보" & myturn==="바위") ){
      setWin("lose")
    }
    else if((myturn==="가위" & comturn==="보")|
    (myturn==="바위"&comturn==="가위")|
    (myturn==="보" & comturn==="바위") ){
      console.log(myturn,comturn)
      setWin("win")
    }
  },[myturn,comturn])

  useEffect(()=>{
    console.log(myturn,comturn)
    whoWin()
  },[myturn,comturn,whoWin])

  return (
    <div className="container">
      <h1>가위바위보</h1>
      <div className='btns'>
        <button value="가위" onClick={onClick}>가위</button>
        <button value="바위" onClick={onClick}>바위</button>
        <button value="보" onClick={onClick}>보</button>
      </div>
      
      <div className='RSP'>
        <div className="myturn">
          {myturn==="보"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png'/>:""}
          {myturn==="가위"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png'/>:""}
          {myturn==="바위"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png'/>:""}
          <h1>나:{myturn}</h1>
        </div>
        <div className="comturn">
          {comturn==="보"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png'/>:""}
          {comturn==="가위"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png'/>:""}
          {comturn==="바위"?<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png'/>:""}
          <h1>컴퓨터:{comturn}</h1>
        </div>
      </div>
          <h1 className={`${win}`}>{win}</h1>
    </div> 
  )
}
export default Rock