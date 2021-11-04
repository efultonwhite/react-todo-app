import './App.css';
import TaskInput from './components/TaskInput';
import db from './utils/firebase';
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import Task from './components/Task';

function App() {
  let [items, setItems] = useState([])
  let itemsArr = []

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      // console.log(snapshot.docs.map())

      snapshot.docs.map((doc) => {return setItems(doc.data()) })
      
    })
    return () => unsubscribe();
  }, [])
  
  console.log(itemsArr);
  itemsArr.push(items)
  
  return (
    <div className="App">
      <div className="taskListContainer">
      <h1>TODO</h1>
      <TaskInput />
      {
      
      itemsArr.map((item) => {
        
        return <Task title = {item.itemsArr} />
        })}
       
      <p></p>
      </div>
    </div>
  );
}

export default App;
