import React from "react";

const styles = {
  root:{
    width:'20%',
    margin:'auto',
    marginTop:16,
    // padding:16,
    textAlign:'left',
    backgroundcolor:'white',
    borderRadius:16,
    color :'white',
  }
}


class Comment extends React.Component{
  render(){
    const {name,content} = this.props
    return (
    <div >
      <div style={styles.root}>
        <h2>{name} : {content}</h2> 
      </div>
    </div>
  )}
}
export default Comment