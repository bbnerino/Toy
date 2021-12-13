const data ={
  heyhey:{
    name:'현홍',
    description:'리액트 개발자'
  },
  gildong:{
    name:'길동',
    description:'길동무'
  }
}
const Profile = ({match})=>{
  const {username} = match.params;
  const profile = data[username]
  if (!profile){
    return <div>존재하지 않는 사람입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  )
}
export default Profile