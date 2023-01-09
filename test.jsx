import React from 'react';

const Test = () => {
 const [count, setCount] = React.useState(0);

 return (
  <div>
    <h2>{count}</h2>
    <button onClick={setCount(() => count + 1)}>Count!</button>
  </div>
 )
}

export default Test;