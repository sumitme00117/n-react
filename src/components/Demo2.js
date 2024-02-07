import React, { useEffect, useRef } from 'react'

const Demo2 = () => {

    let x= 0

    const ref = useRef(0) 
    // not like ==> ref = 0
    // but it is ref = {current: 0}
    const i = useRef(null)
    useEffect(()=> {
      i.current = setInterval(() => {
        console.log("Namaste React", Math.random())
      }, 1000)

      return () => clearInterval(i.current)
    }, [])
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button className='bg-green-100 p-2 m-4' onClick={() => {
            x=x+1
            console.log(x)
        }}>Increase x</button>
      </div>
      <div>
        <button className='bg-green-100 p-2 m-4' onClick={() => {
            ref.current = ref.current + 1;
        // Suppose The value of ref gets updated to 2. Then it will not be reflected at the UI at once but whenever the component gets re-rendered, the updated value of ref (i.e. 2) will be on the UI
        }}>Increase Ref</button>
        <span>Ref = {ref}</span>
      </div>
      <button className='border border-black-200 rounded-lg' onClick={() => clearInterval(i.current)}>Stop</button>
    </div>
  )
}

export default Demo2


