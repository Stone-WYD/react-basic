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



// 子传父
import {useState} from 'react'
function Son({onGetSonMsg}) {
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is Son
      <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}
function App(){
  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div>
      <Son onGetSonMsg={getMsg}/>
      <span>{msg}</span>
    </div>
  )
}

export default App