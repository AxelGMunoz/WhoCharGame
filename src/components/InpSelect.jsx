import { useContext, useEffect, useRef, useState } from 'react'
import Select from 'react-select'

import { shuffle, getNames, status, getActualPos } from '../utils'
import { UserContext } from '../Context'

function InpSelect ({ charID }) {
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { items, updateItem } = useContext(UserContext)

  const selectRef = useRef()

  // Función que se ejecuta en el onChange del combobox de personajes
  const selectChar = () => {
    if (!isLoading) {
      setIsLoading(true)
      setIsSearchable(false)
      setIsDisabled(true)
    }
  }

  // Al cambiar isLoading, actualizar el item
  useEffect(() => {
    if (isLoading) {
      (selectRef.current.getValue()[0].value === charID)
        ? updateItem(charID, getActualPos(items[charID]), status.Success)
        : updateItem(charID, getActualPos(items[charID]), status.Failed)

      selectRef.current.clearValue()

      setIsLoading(false)
      setIsSearchable(true)
      setIsDisabled(false)
    }
  }, [charID, isLoading, items, updateItem])

  return (
    <Select
      placeholder='Buscar...'
      ref={selectRef}
      onChange={selectChar}
      className='react-select-container'
      classNamePrefix='react-select'
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={false}
      isSearchable={isSearchable}
      options={shuffle(getNames())}
      noOptionsMessage={() => 'Sin resultados'}
      theme={(theme) => ({
        ...theme,
        borderRadius: 4,
        colors: {
          primary: 'grey',
          primary25: 'LightSlateGray'
        }
      })}
    />
  )
}

export default InpSelect
