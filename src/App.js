// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

// function App() {
//   // module 47-7 using useState
//   // return (
//   //   <div className="App">
//   //     <Counter></Counter>

//   //   </div>
//   // );

//   // module 47-8 (load data from api, using useEffect)
//   return (
//     <div className="App">
//       {/* component call */}
//       <ExternalUsers></ExternalUsers>

//     </div>
//   );
// }

// // module 47-7 using useState for component Counter
// // function Counter() {
// //   const [count, setCount] = useState(0)
// //   const increaseButton = () => setCount(count + 1)
// //   const decreaseButton = () => setCount(count - 1)
// //   return (
// //     <div>
// //       <h1>Count: {count}</h1>
// //       <button onClick={increaseButton}>Increase</button>
// //       <button onClick={decreaseButton}>Decrease</button>
// //     </div>
// //   )
// // }


// // module 47-8 (load data from api, using useEffect)
// // component create
// // dynamically data load
// function ExternalUsers() {
//   const [users, setUsers] = useState([])
//   useEffect (() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])
//   return (
//     <div>
//       <h1>JSON PLACEHOLDER Users</h1>
//       {
//         users.map(user=><User name={user.name}></User>)
//       }
//     </div>
//   )
// }
// // module 47-8 (load data from api, using useEffect)
// // dynamically data set
// function User(props){
// return (
//   <div>
//     <p>Name: {props.name}</p>
//   </div>
// )
// }


// practising data load from api by useState and useEffect
function App() {
  return (
    <div className="App">
      <JSONPosters></JSONPosters>
    </div>
  )
}
function JSONPosters() {
const [posts, setPosts]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>setPosts(data))
},[])

return (
  <div>
    <h1>Fake Post</h1>
    {
      posts.map(post=><Post name={post.title} details={post.body}></Post>)
    }
  </div>
)
}
function Post(props){
  return (
    <div>
      <h2>Posts name:{props.name} </h2>
      <p>Post Details: {props.details}</p>
    </div>
  )
}

export default App;
