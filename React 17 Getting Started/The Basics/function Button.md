function logRandom(){
  console.log(Math.random());
}

function Button(){
  //a,b = useState()

// useState() results:
// a) state object (getter)

// b) updater function (setter)
  
  const  [counter, setCounter]=useState(42) // Aray Destructuring
   return <button onClick={ () => console.log(Math.random())}>{counter}</button>   //Arrow function     //onClick={functionRef }

 
}

ReactDOM.render(
<Button/>,           
  document.getElementById('mountNode'),
);