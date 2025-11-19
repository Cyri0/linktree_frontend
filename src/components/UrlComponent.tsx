import { useContext } from 'react'
import type { UserLink } from '../services/publicAPI'
import { AuthUserContext } from '../context/AuthenticatedUserContextProvider'
import { deleteURL } from '../services/protectedAPI'

const UrlComponent = (props: UserLink) => {
    const ctx = useContext(AuthUserContext)

    const removeURL = (id: number) => {
        deleteURL(id)
    }

    return (
        <li key={props.id}>
            <a href={props.url}>
                {props.title}</a>
            <>
                <button onClick={() => removeURL(props.id)}>🚮</button>
                <button>📝</button>
            </>
        </li>
    )
}

export default UrlComponent