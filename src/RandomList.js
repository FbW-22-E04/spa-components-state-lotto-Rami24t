import './RandomList.css';
import { useState } from "react";

function newRandomNumber(){
    return Math.floor(Math.random()*10)+1; // gives 1 to 10
}
function newArray(){
    const randomArray = [];
    for(let i=0;i<7;i++)
        randomArray.push(newRandomNumber());
    return randomArray;
}
function RandomList() {
    const [randomNumbers,setRandomNumbers] = useState(newArray());
    const [display,setDisplay] = useState('none');

    return (<>
            <div className="numbers" style={{display: display }} >
            {randomNumbers.map( (num,idx) => <div key={idx}>{num}            
            </div>)}
            </div>
            <button onClick={()=>{setDisplay('none')}}>
            Reset
            </button>
            <button onClick={()=>{
                setDisplay('flex');
                setRandomNumbers(newArray())}
                }>
            Show me lucky numbers
            </button>
        </>
      );
}
export default RandomList;