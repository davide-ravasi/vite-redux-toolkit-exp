import './App.css'
import UsersList from './components/UsersList';
import Button from './components/Button';

function App() {
  return (
    <div className="container mx-auto">
      <div className="text-2xl font-bold my-4 mx-2">
        Users List
        <Button primary className="ml-2 float-right">
          Add User
        </Button>
      </div>
      <UsersList />
    </div>
  )
}

export default App
