import { useContext, useEffect, useRef, useState } from 'react'

import Select from 'react-select'
import { shuffle, getNames, status, getActualPos } from '../utils'
import { UserContext } from "../Context"

function InpSelect({charID}) {
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { updateItemLocal } = useContext(UserContext)

  const selectRef = useRef()

  const selectChar = () => {
    if(!isLoading) {
      setIsLoading(true)
      setIsSearchable(false)
      setIsDisabled(true)
    }
  }

  useEffect(()=>{
    if (isLoading) {
      const selChar = selectRef.current.getValue()[0].value
      const localItem = JSON.parse(localStorage.getItem('items'))[charID]
      (selChar == charID) ? updateItemLocal(charID, getActualPos(localItem), status.Success)
      : updateItemLocal(charID, getActualPos(localItem), status.Failed)
      selectRef.current.clearValue()
      setIsLoading(false)
      setIsSearchable(true)
      setIsDisabled(false)
    }
  },[isLoading])

  return (
    <>
      <Select
        placeholder='Buscar...'
        ref={selectRef}
        onChange={selectChar}
        className="react-select-container"
        classNamePrefix="react-select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={false}
        isSearchable={isSearchable}
        name="color"
        options={shuffle(getNames())}
        noOptionsMessage={m=>m='Sin resultados'}
        theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            colors: {
              primary: 'grey',
              primary25: 'LightSlateGray'
            },
          })}
      />
    </>
  )
}

export default InpSelect