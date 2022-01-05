import qs from 'qs'

const About = ({location}) =>{
  const query = qs.parse(location.search,{
    ignoreQueryPrefix:true 
  })
  const showDetail = query.detail ==='true'
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 라우터 기초 실습 예제입니다.</p>
      {showDetail && <p>detail값이 true 입니다.</p>}
    </div>
  ) 
}
export default About