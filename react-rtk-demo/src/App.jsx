import './App.css'
import {CakeView} from "./features/cake/CakeView"
import {IceCreamView} from "./features/icecream/IcecreamView"
import {UserView} from "./features/user/UserView"

function App() {
  return (
      <div className='App'>
        <CakeView />
        <IceCreamView />
        <UserView />
      </div>
  )
}

export default App
