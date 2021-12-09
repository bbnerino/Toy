import './App.css';
import Comment from './Comment';
import React,{Component} from 'react';

const commentFromServer =[
  {name:'hong', content:'홍'},
  {name:'onhg', content:'온흑'},
  {name:'nhgo', content:'느흑고'},
]

var timer;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments:[]
    };
  }

  componentDidMount(){
    let {comments} = this.state
    timer = setInterval(()=>{
      if (comments.length < commentFromServer.length){
        let index = comments.length ;
        comments.push(commentFromServer[index])
        this.setState({
          comments:comments
        })
      } else if (timer){
        clearInterval(timer);
      }
    },1000)
  }

  render() {
    const {comments} = this.state
    return (
      <div className="App" style={{padding:16,backgroundColor:'#282c34'}}>
      
      <header className="App-header">
        <img src={'https://image.edaily.co.kr/images/photo/files/NP/S/2021/06/PS21060200161.jpg'} className="App-logo" alt="logo" />
      </header>
        <h1 style={{color:"white"}}>바바</h1>
      <div>
        {comments.map((comment,index)=>{
          return (
            <Comment name={comment.name} content={comment.content}/>
          )
        })}
      </div>
    </div>
    )
  }
}

    
  
export default App;
