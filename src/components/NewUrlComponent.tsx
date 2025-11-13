import { useState, type FormEvent } from "react"
import { createNewURL } from "../services/protectedAPI"

const NewUrlComponent = () => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  const addURL = (e: FormEvent) => {
    e.preventDefault()
    console.log(createNewURL(url, title));
    setUrl("")
    setTitle("")
  }

  return (
    <div>
        <form onSubmit={addURL}>
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
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default NewUrlComponent