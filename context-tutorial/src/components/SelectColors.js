import { ColorConsumer } from "../contexts/color"

const colors =['red','orange','yellow','blue','indigo','violet']
const SelectColors = ()=>{
  return (
    <div>
      <h2>색을 입력하세요</h2>
      <ColorConsumer>
      {({actions})=>(
      <div style={{display:'flex'}}>
        {colors.map(color=>(
          <div
            key={color}
            style={{
              background:color,
              width:'24px',
              height:'24px',
              cursor:'pointer'
            }}
            onClick={()=>actions.setColor(color)}
            onContextMenu={e=>{
              e.preventDefault()
              actions.setSubcolor(color)
            }}
          />
        ))}
      </div>)}
      </ColorConsumer>
    </div>
  )
}
export default SelectColors