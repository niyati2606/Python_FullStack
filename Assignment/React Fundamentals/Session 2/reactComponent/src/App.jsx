import { useState } from 'react'
import UserGreetingFunctionComponenet from './Component/UserGreetingFunctionComponenet'
import UserGreetingClassComponenet from './Component/UserGreetingClassComponenet'
import MiniProfile from './Component/MiniProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Welcome to React JSX!</h1>
        <UserGreetingFunctionComponenet username={"niyati"}/>
        <UserGreetingClassComponenet username= {"niya"}/>
        <MiniProfile />
    </div>
  )
}

export default App
