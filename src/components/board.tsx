import React,{useState,useEffect} from "react";

export default function Board(){
    const [playerOneChoices,setPlayerOneChoices] = useState<string[]>([]);
    const [playerTwoChoices,setPlayerTwoChoices] = useState<string[]>([]);

    const [player,setPlayer] = useState<undefined|string>();



function handleMark(e:React.MouseEvent<HTMLDivElement>){

    const temPlayer = player;
    if( typeof(temPlayer)=== "string"){
        if(temPlayer==="X"){

            if(typeof(e.currentTarget.dataset.select) == "string"){
                const x:string =e.currentTarget.dataset.select;
                
                setPlayerOneChoices((prevChoices)=>[...prevChoices,x]);
                }


        } else if(temPlayer==="O"){

            if(typeof(e.currentTarget.dataset.select) == "string"){
                const x:string =e.currentTarget.dataset.select;
        
                setPlayerTwoChoices([...playerTwoChoices,x]);

                }

            }


    }


        }

    
function chosePlayer(e:React.MouseEvent<HTMLDivElement>){
    const player = e.currentTarget.dataset.player;
    if(typeof(player)=== "string"){
        setPlayer(player);
        
    }

}

/**
 */

useEffect(() => {
    console.log('Updated playerOneChoices:', playerOneChoices);
    console.log('Updated playerTwoChoices:', playerTwoChoices);
  }, [playerOneChoices,playerTwoChoices]);
    return(
    <>  
        <div className="flex w-full justify-around">
        <div data-player="X" onClick={chosePlayer} className="min-w-16 p-2 mt-1 rounded-md bg-sky-600 hover:ring-2 text-center ring-slate-700">X</div>
        <div className="min-w-16 p-1 mt-1 rounded-md bg-green-700 text-center text-2xl">{player}</div>
        <div data-player="O" onClick={chosePlayer} className="min-w-16 p-2 mt-1 rounded-md bg-sky-600 hover:ring-2 text-center ring-slate-700">O</div>
        
        </div>
   
        <main className="p-6 grid grid-cols-3 bg-teal-500 h-full md:w-3/4 md:mr-auto md:ml-auto xl:w-2/4">
            <div data-select="1" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500"></div>
            <div data-select="2" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500 border-r-8 border-l-8"></div>
            <div data-select="3" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500"></div>
            <div data-select="4" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500"></div>
            <div data-select="5" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500 border-r-8 border-l-8"></div>
            <div data-select="6" onClick={handleMark} className="box min-h-32 w-full  border-b-8 border-slate-500"></div>
            <div data-select="7" onClick={handleMark} className="box min-h-32 w-full  border-slate-500"></div>
            <div data-select="8" onClick={handleMark} className="box min-h-32 w-full  border-slate-500 border-r-8 border-l-8"></div>
            <div data-select="9" onClick={handleMark} className="box min-h-32 w-full  border-slate-500"></div>
            </main>
             </>
    )}