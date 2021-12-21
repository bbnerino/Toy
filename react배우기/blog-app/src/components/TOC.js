import React,{Component} from 'react'
class TOC extends Component{
  render(){
    var lists = []
    var data = this.props.data
    var i = 0
    while(i< data.length){
      lists.push(<li key={data[i].id}>
        <a 
          data-id = {data[i].id}
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          href={"/content/"+data[i].id}>{data[i].title}
        </a></li>)
      i++;
    }
    return (
      <nav>
        <ul>
          <h2>{lists}</h2>
        </ul>
      </nav>
    )
  }
}

export default TOC;