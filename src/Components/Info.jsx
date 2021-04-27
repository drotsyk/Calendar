import React, {useState} from 'react'

export const Info = ({ item }) => {
  const [open, setOpen] = useState(false)
  const [comment, setComment] = useState(" ")
  return (
    <li className="list__item">
      <div>Name:{item.name}</div> 
      <div>Bithday:{item.birth_year}</div> 
      <button className="list__btn" onClick={() => setOpen(!open)}>Add comment</button>
      {open && (
        <form 
          onSubmit={(e)=>{
            e.preventDefault()
            setOpen(!open)
          }}
        >
          <input type="text"
            maxLength="25"
            placeholder="Add comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button>
            Save
          </button>
        </form>
      )}
      {/\S/.test(comment) ? 
        (
          <h2>Comment:{comment}</h2>
        ) 
        :
          null
       }
    </li>
  )
}
