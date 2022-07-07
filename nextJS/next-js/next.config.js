/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      { // contact라는 url을 입력하면 form으로 보낸다
        source:"/contact",
        destination:'/form',
        permanent:false
      },
      { // 뒤의 모든 내용 을 변환
      // /old/23112/id=1234/p=42' =>/new/23112/id=1234/p=42'
        source:"/old/:number*",
        destination:'/new/:number*',
        permanent:false
      }
    ]
  },
  async rewrites(){
    return[
      {
        source:"/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source:"/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`      }
    ]
  }
}

module.exports = nextConfig
