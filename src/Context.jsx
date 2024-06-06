import { createContext, useEffect, useState } from 'react'

import { chars, status } from './utils'

export const UserContext = createContext()

function Context ({ children }) {
  // Item seleccionado | -1 = No hay item seleccionado
  const [selItem, setSelItem] = useState(-1)
  // Lista completa de los items
  const [items, setItems] = useState([])

  // Reinicia todos los items
  const resetAll = () => {
    window.localStorage.removeItem('items')
    window.location.reload(false)
  }

  // Actualiza un item
  const updateItem = (id, pos, value) => {
    // Clonar item a actualizar
    const changeItem = Object.assign({}, items[id])

    // Setear el estado de try nuevo
    changeItem.try[pos] = value

    // Setear el estado del item
    // Si es Success, setear a Success
    // Si no ver si es el último intento, de serlo setear con el mismo valor
    // Si no significa que todavía puede continuar, dejar el estado del item igual
    changeItem.status = (value === status.Success)
      ? status.Success
      : (pos === 4) ? value : changeItem.status

    // Setear los items cambiando el item actualizado
    setItems(items.map(item => (item.id === id) ? changeItem : item))
  }

  // Ejecutar sólo si se actualiza la página
  useEffect(() => {
    // Contenedor de los items
    let newItems = []

    // Si no hay items en el localStorage
    if (JSON.parse(window.localStorage.getItem('items')) == null) {
      // Crear items según los personajes (chars) en utils.js
      for (let i = 0; i < chars.length; i++) {
        newItems.push({
          id: i,
          try: [status.Unplayed, status.Unplayed, status.Unplayed, status.Unplayed, status.Unplayed],
          status: status.Unplayed
        })
      }
    // Si hay items en localStorage
    } else {
      newItems = JSON.parse(window.localStorage.getItem('items'))
    }

    setItems(newItems)
  }, [])

  // Cada vez que se actualizan los items, actualizar el localStorage
  useEffect(() => {
    // Remover antes para evitar problemas
    window.localStorage.removeItem('items')
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <UserContext.Provider value={{ selItem, setSelItem, items, updateItem, resetAll }}>
      {children}
    </UserContext.Provider>
  )
}

export default Context
