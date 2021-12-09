import React from 'react'
class AttendanceBook extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      students:[
        {name:'Mike'},
        {name:'hommy'},
        {name:'jake'},
        {name:'susan'},
        {name:'yoshi'},
        {name:'mario'},
        {name:'luige'},
        {name:'koopa'},
      ]
    }
  }
  render(){
    var students = this.state.students
    return (
      <ul>
        {students.map((student,index)=>
        <li key={index} >{student.name}</li>)}
      </ul>
    ) 
  }
}
export default AttendanceBook