import { createContext, useEffect, useState } from 'react'

import { chars, status, structNewItem } from './utils'

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
    // Item a actualizar
    const changeItem = { ...items[id] }

    // Setear el estado de try nuevo
    changeItem.try[pos] = value

    // Setear el estado del item
    // Si es Success, setear a Success o si es el último intento setear con el mismo valor
    if (value === status.Success || pos === 4) changeItem.status = value

    // Setear los items cambiando el item actualizado
    setItems(items.map(item => (item.id === id) ? changeItem : item))
  }

  // Ejecutar sólo si se actualiza la página
  // Obtener o crear la lista de items segun la cantidad de personajes
  useEffect(() => {
    let newItems = JSON.parse(window.localStorage.getItem('items')) || []

    const itemsLength = newItems.length
    const charsLength = chars.length

    if (itemsLength < charsLength) {
      newItems = newItems.concat(
        Array.from({ length: charsLength - itemsLength }, (_, i) => structNewItem(i + itemsLength))
      )
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
