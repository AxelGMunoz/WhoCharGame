import { createContext, useEffect, useState } from "react"
import { status } from "./utils"

export const UserContext = createContext()

function Context({children}){
    const [selItem, setSelItem] = useState(0)
    const [items, setItems] = useState([])
    
    useEffect(()=>{
      let newItems = []
      for(let i = 1; i <= 20; i++){
        newItems.push({
          "id": i,
          "try": [status.Unplayed,status.Unplayed,status.Unplayed,status.Unplayed,status.Unplayed],
          "status": status.Success
        })
      }
      setItems(newItems)
    },[])

    return <UserContext.Provider value={{selItem, setSelItem, items}}>
        {children}
    </UserContext.Provider>
}

export default Context