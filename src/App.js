// // 受控绑定表单
import {useState} from 'react'
// // 1. 声明一个 react 状态
// // 2. 核心绑定流程
// //  2.1. 通过 value 属性绑定 react 状态
// //  2.2. 绑定 onChange 事件 通过事件参数 e 拿到输入框最新的值，反向修改 react 状态
// function App() {
//   const [value, setValue] = useState('')
//   return(
//     <div>
//       <input
//         value={value}
//         onChange={(e)=>setValue(e.target.value)}
//         type='text' />
//     </div>
//   )
// }
// export default App;



// React 中获取 DOM
import { useRef } from 'react'
// 1. useRef 生成 ref 对象，绑定到 dom 标签上
// 2. dom 可用时，ref.current 获取dom
function App() {
  const inputRef = useRef(null)
  const showDown = () => {
    console.dir(inputRef.current)
  }
  return(
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={showDown}>获取dom</button>
    </div>
  )
}
export default App;