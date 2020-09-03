import React, { useEffect } from 'react';
import { mockGet } from 'utils/mockHttp.js'

function App() {
  useEffect(() => {
    const getData = async () => {
      const result = await mockGet()
      console.log(result)
    }
    getData()
  }, [])
  return (
    <div>
      Hello
    </div>
  );
}

export default App;
