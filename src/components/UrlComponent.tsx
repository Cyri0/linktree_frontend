import { useContext, useState } from 'react'
import type { UserLink } from '../services/publicAPI'
import { AuthUserContext } from '../context/AuthenticatedUserContextProvider'
import { deleteURL } from '../services/protectedAPI'
import EditUrlComponent from './EditUrlComponent'
import { useParams } from 'react-router-dom'

const UrlComponent = (props: UserLink) => {
    const ctx = useContext(AuthUserContext)
    const {username} = useParams()
    
    const [toggleEdit, setToggleEdit] = useState(false)
    const removeURL = (id: number) => {
        deleteURL(id).then(res => {
            if(res) window.location.reload()
        })
    }

    return (
        <li key={props.id}>
            <a href={props.url}>
                {props.title}</a>
            { username && username === ctx?.authUser.username && <div>
                <button onClick={() => removeURL(props.id)}>🚮</button>
                <button onClick={()=> setToggleEdit(prev => !prev)}>📝</button>
                { toggleEdit && <EditUrlComponent 
                    id={props.id} 
                    oldTitle={props.title} 
                    oldUrl={props.url} 
                /> }
            </div>}
        </li>
    )
}

export default UrlComponent