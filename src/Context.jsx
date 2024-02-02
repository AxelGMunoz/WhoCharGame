import { createContext, useEffect, useState } from "react"
import { images, status } from "./utils"

export const UserContext = createContext()

function Context({children}){
    const [selItem, setSelItem] = useState(-1)
    const [items, setItems] = useState([])
    
    const resetAll = () => {
      localStorage.removeItem('items')
      window.location.reload(false)
    }

    const updateItemLocal = (id, pos, value) => {
      let changeItem = Object.assign({}, items[id])
      changeItem.try[pos] = value
      if(value == status.Success){
        changeItem.status = status.Success
      }else if (pos == 4) {
        changeItem.status = value
      }
      const newItems = items.map(item => (item.id === id) ? changeItem : item)
      setItems(newItems)
    }

    useEffect(()=>{
      let newItems = []
      if(JSON.parse(localStorage.getItem('items')) == null) {
        for(let i = 0; i < images.length; i++){
          newItems.push({
            "id": i,
            "try": [status.Unplayed,status.Unplayed,status.Unplayed,status.Unplayed,status.Unplayed],
            "status": status.Unplayed
          })
        }
      }else{
        newItems = JSON.parse(localStorage.getItem('items'))
      }
      setItems(newItems)
    },[])

    useEffect(()=>{
      localStorage.removeItem('items')
      localStorage.setItem('items', JSON.stringify(items))
    },[items])

    return <UserContext.Provider value={{selItem, setSelItem, items, updateItemLocal, resetAll}}>
        {children}
    </UserContext.Provider>
}

export default Context