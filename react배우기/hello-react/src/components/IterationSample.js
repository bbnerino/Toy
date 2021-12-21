import React,{useState} from 'react'

const IterationSample=()=>{
    const [names,setNames]= useState([
        {id:1,text:'눈사람'},
        {id:2,text:'사'},
        {id:3,text:'람'},
        {id:4,text:'눈'},
    ])
    const [inputText,setInputtext]=useState('');
    const [nextId,setNextId] = useState(5)
    
    const onChange = e => setInputtext(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        })
        setNextId(nextId+1)
        setNames(nextNames)
        setInputtext('')
    }
    const onRemove = id =>{
        const nextNames = names.filter(name=>name.id !== id);
        setNames(nextNames)
    }
    const nameList = names.map(name=>
        <li key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>)
    return (
        <>
        <input value={inputText} onChange={onChange}></input>
        <button onClick={onClick}>추강</button>
        <ul>{nameList}</ul>
        </>
    )
}
export default IterationSample 