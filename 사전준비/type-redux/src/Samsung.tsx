import { useSelector } from "react-redux"

const Samsung = ()=>{
    const number = useSelector((state:any)=>state.number)
    return (
        <div>
            <h2>헤이 :{number}</h2>
        </div>
    )
}
export default Samsung