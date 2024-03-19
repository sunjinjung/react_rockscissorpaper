import { useState } from 'react';
import './App.css';
import Box from './component/Box'
//1. 박스 2개 만들기 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있음
//3. 버튼을 클릭하면 클릭한 값이 박스에 보인다
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검은색 )
const choice ={
  rock:{
    name:"Rock",
    img:"https://cdn.pixabay.com/photo/2014/07/28/16/06/rock-403774_960_720.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.jajaecoop.com/site_data/shop_product_mst/2020/01/1580374530_1TtqOoVW_1315952-1-.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://images-na.ssl-images-amazon.com/images/I/51i4i7DIK6L._SL1161_.jpg"
  }
}
function App() {
  const [userSelect,setUserSelect]=useState(null)
  const [computerSelect,setComputerSelect]=useState(null)
  const [result,setResult]=useState("")
  


  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
    
    
  }
 


  const judgement=(user,computer)=>{
    console.log("user",user,"computer",computer)
    if (user.name==computer.name){
      return "tie"
    }else if (user.name=="Rock") return computer.name =="Scissor"?"win":"lose"
    else if(user.name=="Scissors") return computer.name=="Paper"?"win":"lose"
    else if(user.name=="Paper") return computer.name=="Rock"?"win":"lose"
  }

  


  const randomChoice=()=>{
    let itemArray=Object.keys(choice) //객체에 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem=Math.floor(Math.random()*itemArray.length)
    let final=itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className="main">
     
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result}/>
     
   </div>
   <div className='main1'>
     <button onClick={()=>play("scissors")}>가위</button>
     <button onClick={()=>play("rock")}>바위</button>
     <button onClick={()=>play("paper")}>보</button>
   </div>
  </div>
   
    
  );
}

export default App;
