import Info from "../data/info"

export default function CardFront({ isFront }) {

  const { name, title, avatar } = Info()

  return (
    <div className="transition-all ease-in-out absolute flex flex-col justify-between top-8 bottom-8">
    
      <div id="photo">
        <img alt="avatar" title={avatar} className="rounded-full w-36" src={avatar}></img>
      </div>
      
      <div id="text-content" className="flex flex-wrap flex-col">
        
      
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="text-md">{title}</h2>
        
      </div>
    </div>
  )
}



