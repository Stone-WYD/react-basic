// 项目的根组件
// App -> index.js -> public/index.html(root)


// const count = 100
// function getName(){
//   return 'Jack'
// }
// function App() {
//   return (
//     <div className="App">
//       this is App
//       {/*使用引号传递字符串 */}
//       {'this is message'}
//       {/* 标识 js 变量 */}
//       {count}
//       {/* 函数调用 */}
//       {getName()}
//       {/* 方法调用 */}
//       { new Date().getDate() }
//       {/* 使用 js 对象 */}
//       <div style={{color: 'red'}}> this is div </div>
//     </div>
//   );
// }



// const list = [
//   {id: 1001, name: 'Vue'},
//   {id: 1002, name: 'React'},
//   {id: 1003, name: 'Angular'},
// ]
// function App() {
//   return(
//     <div className="App">
//       this is a App
//       {/* 渲染列表 */}
//       <ul>
//         {/* key={item.id} React内部需要使用，加速渲染 */}
//         {list.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   )
// }



// const isLogin = false
// function App() {
//   return(
//     <div className="App">
//       {/* 逻辑与 && */}
//       {isLogin && <span>this is a span</span>}
//       {/* 三元运算 */}
//       {isLogin ? <span>isLogin is true</span> : <span>isLogin is false</span>}
//     </div>
//   )
// }



// // 定义文章类型
// const articleType = 3 // 0 1 3
// // 定义核心函数
// function getArticleTem() {
//   if(articleType === 0) {
//     return <div>我是无图文章</div>
//   } else if(articleType === 1) {
//     return <div>我是单图模式</div>
//   } else if(articleType === 3) {
//     return <div>我是三图模式</div>
//   }
// }
// function App() {
//   return(
//     <div className="App">
//       {/* 调用函数调用不同的模板 */}
//       {getArticleTem()}
//     </div>
//   )
// }



// // 事件绑定
// function App() {
//   // const handleClick = () => {
//   //   console.log('button 被点击了')
//   // }
//   // 事件参数 e
//   // const handleClick = (e) => {
//   //   console.log('button 被点击了', e)
//   // }
//   // 传递自定义参数
//   // const handleClick = (name) => {
//   //   console.log('button 被点击了', name)
//   // }
//     // 传递自定义参数和事件参数 e
//     const handleClick = (name, e) => {
//       console.log('button 被点击了', name, e)
//     }
//   return(
//     <div className="App">
//       <button onClick={(e) => handleClick('Jack', e)}>click me</button>
//     </div>
//   )
// }



// // 1.定义组件 函数名首字母大写的函数
// // 2.写应用就是搭建组件，就像搭积木一样
// function Button() {
//   // 业务逻辑
//   return <button>click me!</button>
// }
// const Button2 = () => {
//   // 业务逻辑
//   return <button>click me! Button2</button>
// }
// function App() {
//   return (
//     <div className="App">
//       {/* 自闭和 */}
//       <Button />
//       <Button2></Button2>
//     </div>
//   )
// }



// // useState 实现一个计数器按钮，数据驱动视图
// import { useState } from "react";
// function App() {
//   // 1.调用 useState 添加一个状态变量，返回一个数组
//   const [count, setCount] = useState(0)
//   // 2.点击事件回调
//   const handleClick = () => {
//     // 作用：1.修改 count 值 2.重新使用新的 count 渲染 ui
//     setCount(count + 1)
//   }
//   // 修改对象状态, setForm 方法只能传入常量
//   let formV = {name: 'jjjack', age: 15}
//   const [form, setForm] = useState(formV)
//   const changeForm = (newName) => {
//     // 下面两种克隆都无法达到目的
//     // const cv1 = {formV}
//     // const cv1 = Object.assign(formV)
//     // printTestContent(cv1, form, 1)
//     // formV.name = newName
//     // printTestContent(cv1, form, 2)
//     formV.name = newName
//     const cv1 = JSON.parse(JSON.stringify(formV))
//     setForm(cv1)
//   }
//   // 打印测试内容
//   function printTestContent(content1, content2, status) {
//     if (status === 1) {
//       // 打印修改前内容
//       console.log("修改前的内容为：", content1, content2)
//     } else if (status === 2) {
//       // 打印修改后的内容
//       console.log("修改后的内容为：", content1, content2)
//     }
//   }
//   return(
//     <div>
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={() => changeForm('wyd')}>修改form{form.name},{form.age}</button>
//     </div>
//   )
// }


// 导入样式，导入内容需要文件最前面
import './index.css'
// 使用变量优化
const style = {
  color: 'green', 
  fontSize: '20px'
}
function App1() {
  return(
    <div>
      {/* 行内样式控制 */}
      <span style={{color: 'red', fontSize: '50px'}}>
        this is span
      </span>
      <span style={style}>
        this is span2
      </span>

      {/* 通过 class 类型控制 */}
      <span className="foo">this is a class foo</span>
    </div>
  )
}

export default App1;


// function App() {
//   return(
//     <div>

//     </div>
//   )
// }