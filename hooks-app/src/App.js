import React, {useState, useMemo} from 'react';
import './App.css';
import { useFetch } from './useFetch';

const computeLongestWord = (arr) => {
  if(!arr){
    return []
  }

  console.log('computing longest word');
  
  let longestWord = ''
  JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }));
  return longestWord;
}

function App() {

  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json"
  );

  // const computeLongestWord = useCallback((arr) => {
  //   if (!arr) {
  //     return []
  //   }

  //   console.log('computing longest word');

  //   let longestWord = ''
  //   JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
  //     if (word.length > longestWord.length) {
  //       longestWord = word;
  //     }
  //   }));
  //   return longestWord;
  // }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord]);

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord }</div>
    </div>
  );
}

export default App;
