import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {

if(!localStorage.getItem('username'))
return <LoginForm />

  return(
    <ChatEngine 
    height="100vh"
    projectID="476d9090-26f7-45bf-9635-c43415b0e82c"
    // userName="Hans Zimmer"
    // userSecret="123123"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}/>

  )
}


export default App

//projectid is a string that gets once you create chat application