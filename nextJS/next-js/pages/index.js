import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Seo from '../components/Seo'


export default function Home({results}){
  const router = useRouter()
  const [loop,setLoop] = useState(true)
  const onClick = (id,title)=>{
    router.push({
      pathname:`/movies/${id}`,
      query:{
        id,
        title
      }
    },`/movies/${id}`) // as => query 숨기기
  }
  useEffect(()=>{
      autoSlide() 
  },[loop])
  const autoSlide = ()=>{
    if (loop){
      setTimeout(()=>{
        changePic('+')
    },1000)}
  }
  const [picNum,setPicNum] = useState(0)
  const changePic=(plus)=>{
    if (plus =="+"){
      setPicNum((picNum+1)%3)
    }
    else{setPicNum((picNum-1)%3)}
    document.querySelector('.carasel').style.transform = `translate(-${picNum*100}vw)`
    document.querySelector('.carasel').style.transition = `transform 0.5s ease-in-out`
  }
  return (
    <div className='container'>
      <Seo title='HOME'/>
      <div className='arrow'>
        <h1 onClick={()=>{changePic("-")}} >←</h1>
        <h1 onClick={()=>{changePic("+")}} >→</h1>
      </div>
      <div onMouseOver={()=>{setLoop(false)}} onMouseLeave={()=>{setLoop(true)}} style={{"overflow":"hidden"}}>
        <div className='carasel'>
          <div className='inner'>
            <img src='https://post-phinf.pstatic.net/MjAxOTA2MDRfMjgz/MDAxNTU5NjQyMzIxMjYw.rS7J_pRtfAZcsoz0AD7ORimnoPVzlDue17RbBOU8M0og.imi5ouWm-swQUJYK8eD_PSRhBwSRwV66Y-MQIwfMu9Ug.JPEG/t1.jpg?type=w1200'/>
          </div>
          <div className='inner'>
            <img src='http://www.artinsight.co.kr/data/news/1907/3553982061_A6Jnbhpr_1411.jpg'/>
          </div>
          <div className='inner'>
            <img src='https://mblogthumb-phinf.pstatic.net/MjAxODA3MjRfMTM1/MDAxNTMyNDI5NDc5NzA4.PSW_57Wx7nmeqwYgqpmj33qvLvsKZjF7m7rceo6BgMog.Q-nYnAYNzVT-hIOylPgt8uNOW2wKpn4Y43aH4j8jucEg.JPEG.amykims/toy_story_3_box_toy-wallpaper-1920x1080.jpg?type=w800'/>
          </div>
        </div>
      </div>
      <div>
        <button onClick={()=>{changePic(0)}} className='btn1'>1</button>
        <button onClick={()=>{changePic(1)}} className='btn2'>2</button>
        <button onClick={()=>{changePic(2)}} className='btn3'>3</button>
      </div>
      <div className='moviebox'>
        {results?.map((movie)=>{
          return(
            <div onClick={()=>{onClick(movie.id,movie.original_title)}}  key={movie.id}>
              <div className="movie">
                    <h4>{movie.original_title}</h4>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} /> 
              </div>
            </div>
          )
        })}
      </div>
       <style jsx>{`
       .arrow{
        display:flex;
        width:80vw;
        justify-content:space-between;
        position:fixed;
        left:10vw;
        top:400px;
        z-index:1;
       }
       .arrow h1{
        color:white;
        cursor:pointer;
       }
        .container {
          padding: 20px;
          background-color:#333;
        }
        .carasel{
          width:300vw;
          margin:auto;
          display:flex;
          transform :translate(-100vw);
        }
        .inner{
          width:100vw;
        }
        .inner img{
          width:70vw;
          margin-left:15vw;
          height:500px;
        }
        .moviebox{
          display: flex;
          flex-wrap:wrap;
          gap: 20px;
          justify-content:center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          margin:auto;
        }
        .movie:hover img {
          transform: scale(1.02) translateY(-10px);
          cursor:pointer;
        }
        .movie h4 {
          font-size: 20px;
          text-align: center;
          color:ivory;
          width:20vw;
          height:50px
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps(){ // 서버사이드렌더링 방법
  const {results} = await (await fetch(`http://localhost:3000/api/movies`
  )).json()
  return {
    props:{
      results,
    }
  }
}

