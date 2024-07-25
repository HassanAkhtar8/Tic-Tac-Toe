import React,{useState,useEffect} from "react";

export default function Board(){
    const arr2 = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
    const [array, setArray] = useState([1,2,3,4,5,6,7,8,9]);
    const [playerOneChoices,setPlayerOneChoices] = useState<number[]>([]);
    const [playerTwoChoices,setPlayerTwoChoices] = useState<number[]>([]);
    const [xActive,setXActive]= useState(false);
    const [oActive,setOActive]= useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [xWins, setXWins] = useState(false);
    const [oWins, setOWins] = useState(false);
    const [player,setPlayer] = useState<undefined|string>();

  
    //For draw, X victory and O victory
    function handleGameOver(){
        if(playerOneChoices.length >2 || playerTwoChoices.length>2){
            //start checking only after player has selected two divs
            const boolX = arr2.some(subArray => 
                subArray.every(element => playerOneChoices.includes(element))
            );

            const boolO = arr2.some(subArray => 
                subArray.every(element => playerTwoChoices.includes(element))
            );

            if(boolX){
                setXWins(true);
            }else if(boolO){
                setOWins(true);
            }
    }          
}


    //To mark divs with player sigs X or O
    function handleMark(e:React.MouseEvent<HTMLDivElement>){

        const status = xActive||oActive;
        const temPlayer = player;
        //to make sure that player is selected and of type string
        if(status && typeof(temPlayer)=== "string"){
        
            if(temPlayer==="X" && xActive){
                
                if(typeof(e.currentTarget.dataset.select) == "string"){
                    const x:number =Number(e.currentTarget.dataset.select);
                    const tempArray = [...array]
                    const condition = tempArray.includes(x);
                    if(condition){
                        setPlayerOneChoices([...playerOneChoices,x]);
                        handleActive("O");
                        const index = tempArray.indexOf(x);
                        if(index>-1){
                            tempArray.splice(index,1);
                            setArray([...tempArray]);
                        }
                        handleGameOver();
                        
                    }
                    
                    }
            } else if(temPlayer==="O" && oActive){

                if(typeof(e.currentTarget.dataset.select) == "string"){
                    const x:number =Number(e.currentTarget.dataset.select);
                    const tempArray = [...array]
                    const condition = tempArray.includes(x);
                    if(condition){
                        setPlayerTwoChoices([...playerTwoChoices,x]);
                        handleActive("X");
                        const index = tempArray.indexOf(x);
                        if(index>-1){
                            tempArray.splice(index,1);
                            setArray([...tempArray]);
                        }
                        handleGameOver();

                    }
                }
            }
    }
}


   //To select player 
    function chosePlayer(e:React.MouseEvent<HTMLDivElement>){
        const player = e.currentTarget.dataset.player;
        if(typeof(player)=== "string"){
            setPlayer(player);//setPlayer is used to show which player is currently playing
            handleActive(player);
            
        }

    }
    //lets initial player selection and Activates and deactivates player selection
    function handleActive(param:string){
        //when game starts this condition lets chose any player
        if(!xActive && !oActive){
            if(param === "X"){
                setXActive(true);
            }else if(param === "O"){
                setOActive(true);
            }
        //these conditions change xActive and oActive which is used to activate and deactivate player selection
        }else if(xActive){
            if(param==="O"){
                setXActive(false);
                setOActive(true);
            }
            
        }else if(oActive){
            if(param==="X"){
                setOActive(false);
                setXActive(true);
            }
        }
    }
   

    //To restart game
    function handleReload(){
        location.reload();
    }
    //Using useEffect hook to bypass setState's asynchorous update
    useEffect(() => {
        handleGameOver();
        if(array.length ===0){
            setGameOver(true);
        }
        
    }, [array]);

    //Local restart button component
    function Btn(){
        return(
            <button className="mt-10 ml-auto mr-auto h-12 w-24 bg-blue-500 rounded-md hover:ring-4 ring-sky-300 hover:text-gray-100" onClick={handleReload}>Restart</button>
        )
    }

    return(
            <>
            { 
            gameOver?<>
            <div className="w-24 ml-auto mr-auto mt-10">
                <h1 className="ml-6">Draw</h1>
                <Btn/>
            </div></>:
            (xWins?<>
            <div className="w-24 ml-auto mr-auto mt-10"><h1 className="ml-4">X wins</h1> <Btn/></div>
             </>:
            oWins?<>
            <div className="w-24 ml-auto mr-auto mt-10"><h1 className="ml-4">O wins</h1>  <Btn/></div>
            </>:
                <>
                  <div className="flex w-full justify-around">
        <div data-player="X" onClick={oActive?undefined: chosePlayer} className="min-w-16 p-2 mt-1 rounded-md bg-sky-600 hover:ring-2 text-center ring-slate-700">X</div>
        <div className="min-w-16 p-1 mt-1 rounded-md bg-green-700 text-center text-2xl">{player}</div>
        <div data-player="O" onClick={xActive?undefined: chosePlayer}   className="min-w-16 p-2 mt-1 rounded-md bg-sky-600 hover:ring-2 text-center ring-slate-700">O</div>
        
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
        <div className="flex"> <Btn/></div>
       
                </>
            )
            }
        </>

    )}
