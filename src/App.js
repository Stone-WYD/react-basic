// // 父传子
// // 父组件传递数据，需要在子组件标签上绑定属性
// // 子组件接收数据，props 的参数
// function Son(props) {
//   console.log(props)
//   return (<div>This is a Son {props.name},{props.children}</div>)
// }
// function App() {
//   const name = 'this is app name'
//   return (
//     <div>
//       <Son name={name}>
//         {/* 特殊的父传子 children */}
//         <span>111</span>
//       </Son>
//     </div>
//   )
// }



// // 子传父
// import {useState} from 'react'
// function Son({onGetSonMsg}) {
//   const sonMsg = 'this is son msg'
//   return (
//     <div>
//       this is Son
//       <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
//     </div>
//   )
// }
// function App(){
//   const [msg, setMsg] = useState('')
//   const getMsg = (msg) => {
//     console.log(msg)
//     setMsg(msg)
//   }
//   return (
//     <div>
//       <Son onGetSonMsg={getMsg}/>
//       <span>{msg}</span>
//     </div>
//   )
// }



// function A ({msgSend}) {
//   const name = 'this is A name'
  
// }

// function B () {
//   return (
//     <div>
//       this is B component
//     </div>
//   )
// }



// // 1. 一个变量既可以指向具体值，也可以指向函数，如果一个变量指向一个函数，
// // 则当需要获取其内部值时，函数方法才会被调用。eg: onClick = xxx,xxx需要为一个指向函数的变量
// // 2. 函数内部只能是语句，不能一个变量光秃秃地放在那
// // 3. 一个变量加上“（）”可以表示一个语句，即调用该变量指向的函数
// // 4. 一个函数去掉“（）”可以表示一个变量，即该函数被该函数名的变量指向
// // 5. 在 jsx 中，{} 中可以放入 js,可以是变量或者函数或者常量，react 会进行解析，
// // 如果放入的是函数， react 会立即执行然后返回结果，如果放入变量返回变量
// function App () {
//   const msgSendTest = (msg)=>{
//     console.log(msg)
//   }
//   function msgSendTest2(msg){
//     console.log(msg)
//     // 不能只写个变量在这
//     // msgSendTest
//     // 只能写语句，此处表示调用 msgSendTest 指向的函数
//     msgSendTest('msgSendTest2 方法内调用 msgSendTest 方法')
//   }
//   return (
//     <div>
//       <button onClick={()=>msgSendTest2('test')} >test</button>
//     </div>
//   )
// }


// import { useState } from 'react'
// function A ({sendMsgToApp}) {
//   // A 组件中的数据
//   const name = 'this is A name'
//   return (
//     <div>
//       this is A component
//       <button onClick={()=>sendMsgToApp(name)}>send</button>
//     </div>
//   )
// }

// function B (props) {
//   return (
//     <div>
//       this is B component {props.msgFromA}
//     </div>
//   )
// }
// function App () {
  
//   const [am, setAm] = useState('')
//   function getAMsg (msg) {
//     setAm(msg)
//   }
//   return (
//     <div>
//       <A sendMsgToApp={getAMsg}/>
//       <B msgFromA={am}/>
//     </div>
//   )
// }



import { useState } from 'react'
function A (props) {
  // A 组件中的数据
  const name = 'this is A name'
  return (
    <div>
      this is A component
      <button onClick={()=>props.sendMsgToApp(name)}>send</button>
    </div>
  )
}

function B (props) {
  return (
    <div>
      this is B component {props.msgFromA}
    </div>
  )
}
function App () {
  
  const [am, setAm] = useState('')
  function getAMsg (msg) {
    setAm(msg)
  }
  return (
    <div>
      <A sendMsgToApp={getAMsg}/>
      <B msgFromA={am}/>
    </div>
  )
}

export default App