function Button(){

  const  [counter, setCounter]=useState(5) // Aray Destructuring
  const handleClick= () => setCounter(counter+1)
   return (
    <button onClick={handleClick}>{counter}
      </button>   
   );  

 
}

ReactDOM.render(
<Button/>,           
  document.getElementById('mountNode'),
);