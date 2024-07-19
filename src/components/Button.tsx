type props ={
    start: boolean,
    setStart: (para:boolean)=>void;
}

export default function Button({start,setStart}:props) {

    function changeGame():void{
        setStart(!start);

    }
  return (
        <div className="flex w-full justify-center">
            <button className="mt-10 h-12 w-24 bg-blue-500 rounded-md hover:ring-4 ring-sky-300 hover:text-gray-100" onClick={changeGame}>Start Game</button>
        </div>
        


  )
}
