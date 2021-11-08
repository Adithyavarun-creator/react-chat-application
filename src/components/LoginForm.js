import React,{useState} from 'react'
import axios from 'axios'

const LoginForm = () =>{

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async(event) =>{
        event.preventDefault()

        const authObject = {  'Project-ID':"476d9090-26f7-45bf-9635-c43415b0e82c",
                            'User-Name':username,
                            'User-Secret':password                              
                            }
        try{
            //when username and password matches in 
            await axios.get('https://api.chatengine.io/chats',{
                headers:authObject
            })
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload();
        }catch(error){
            setError('Ooops, incorrect credentials...')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" 
                className="input"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Username" required
                />

                <input type="password" 
                className="input"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" required
                /> 
                <div align="center">
                    <button type="submit" className="button">
                       <span> Start Chatting </span>
                    </button>
                    </div> 
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}


export default LoginForm