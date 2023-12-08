import { useState } from 'react'
import './App.css'
import { Booton } from './components/booton'

function App() {
  const [data, setData] = useState({ operacion: '', resultado:'' })

  const sendData = (event) => { 
     const valor = event.target.innerText
     const esOperacion = valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%'

     if(data.operacion.length >= 10) return
     if(valor === '+/-' && data.operacion === '') return
     if(valor === '%' && data.operacion.includes('%')) return
     
    if(data.operacion.includes('Error')){
      setData({...data, operacion: valor})
    } else if (data.resultado !== '' && data.operacion === '' && esOperacion){
      setData({ ...data, operacion: `${data.resultado}` + valor})
    } else if (valor === '+/-' && data.operacion !== '') {
        if(data.operacion.slice(0,1) === '-') {
           setData({...data, operacion: `${data.operacion.slice(1, data.operacion.length)}`})
        } else{
            setData({...data, operacion: `-${data.operacion}`})
          }
     } else {
          setData({ ...data, operacion: `${data.operacion}` + valor})
       }
     
  }

  const erase = () => { 
    setData({ ...data, operacion: data.operacion.slice(0, data.operacion.length - 1)})
  }

  const eliminar = () => {
    setData({ operacion: '', resultado: '' })
  }

  const resultado = () => {
    try {
      let resultado = ''
      if(data.operacion.includes('%')) {
        const valores = data.operacion.split('%')
        resultado = eval(`${valores[1]}*(${valores[0]}/100)`)
      } else {
       resultado = eval(data.operacion)
      }
      setData({...data, resultado, operacion: ''})  
    } catch (error) {
      setData({...data, operacion: 'Error'})
    }
  }
  return (
    <section className='w-full h-screen flex justify-center items-center text-center bg-slate-200'>
      <main className='bg-slate-200 grid grid-cols-4 gap-2 p-2 w-80 min-h-[60%] rounded-2xl shadow-lg shadow-slate-700'>          
          <span className='bg-slate-200 w-full text-right text-5xl h-[4rem] font-bold text-gray-800 col-span-4'>{data.resultado}</span>
          <span className='bg-slate-200 w-full text-right text-3xl h-[4rem] font-extralight text-gray-400 col-span-4'>{data.operacion}</span>
          <Booton texto='C' claseName={'bg-slate-300 rounded-xl shadow-3xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={eliminar} />
          <Booton texto='+/-'claseName={'bg-slate-300 rounded-xl shadow-3xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='%' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='/' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='7' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='8' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='9' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='*' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='4' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='5' claseName={'bg-slate-600 rounded-xl text-3xl p4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='6' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='-' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='1' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='2' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='3' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='+' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='.' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData} />
          <Booton texto='0' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={sendData}/>
          <Booton texto='<' claseName={'bg-slate-600 rounded-xl text-3xl p-4 shadow-2xl hover:bg-orange-500 transition all duration-300'} handleClick={erase}/>
          <Booton texto='=' claseName={'bg-blue-600 rounded-xl text-3xl shadow-2xl p-4 hover:bg-orange-500 transition all duration-300'} handleClick={resultado} />
      </main>
                 
    </section>
  )
}

export default App
