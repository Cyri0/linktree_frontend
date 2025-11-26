import { useState, type FormEvent } from "react"
import { editURL } from "../services/protectedAPI"

const EditUrlComponent = (props: {id:number, oldUrl: string, oldTitle: string}) => {
  const [url, setUrl] = useState(props.oldUrl)
  const [title, setTitle] = useState(props.oldTitle)
  
  const saveEdited = (e:FormEvent) => {
    e.preventDefault()
    editURL(props.id, url, title).then(res => {
      
    })
  }

  return (
    <div>
        <form onSubmit={saveEdited}>
            <label>URL:<br/>
            <input type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            /></label><br/>
            <label>title:<br/>
            <input type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /></label><br/>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}


export default EditUrlComponent