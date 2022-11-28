import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount2] = useState(0)
  const [count2, setCount3] = useState(0)
  const [count3, setCount4] = useState(0)
  const [count4, setCount5] = useState(0)

  return (
    <>
        <div className="border-2 p-3 shadow-lg flex justify-center flex-col">
          <h1 className="text-gray-900 text-center text-3xl font-bold">
            Total count is 
          </h1> 
          <h2 className="font-extrabold text-red-600 text-4xl text-center">
           {count + count1 + count2 + count3 + count4}
          </h2>
        </div>
        <div className='mt-5 flex-row justify-around flex'>
              <button 
                  className="w-2/12 p-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out text-center text-white bg-blue-400 border-2 rounded-md shadow-sm hover:bg-red-500 " onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
            <button 
                className="w-2/12 p-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out text-center text-white bg-green-400 border-2 rounded-md shadow-sm hover:bg-red-400 duration-200" onClick={() => setCount2((count) => count + 1)}>
              count is {count1}
            </button>
            <button 
                className="w-2/12 p-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out text-center text-white bg-gray-400 border-2 rounded-md shadow-sm hover:bg-yellow-800 duration-200 hover:" onClick={() => setCount3((count) => count + 1)}>
              count is {count2}
            </button>
            <button 
                className="w-2/12 p-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out text-center text-white bg-purple-400 border-2 rounded-md shadow-sm hover:bg-green-500 duration-200" onClick={() => setCount4((count) => count + 1)}>
              count is {count3}
            </button>
            <button 
                className="w-2/12 p-3 text-center hover:-translate-y-1 hover:scale-110 transition ease-in-out text-white bg-red-400 border-2 rounded-md shadow-sm hover:bg-blue-500 duration-200" onClick={() => setCount5((count) => count + 1)}>
              count is {count4}
            </button>
        </div>
    </>
   )
}

export default App
