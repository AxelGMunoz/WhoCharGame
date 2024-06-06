import { useContext } from 'react'
import IconGame from './assets/icon.svg'

import { getColor, getStatus } from './utils'
import { UserContext } from './Context'

import ItemGrid from './components/ItemGrid'
import Item from './components/Item'

function App () {
  const { selItem, items, resetAll } = useContext(UserContext)

  return (
    <div className='text-center'>

      {/* Titulo */}
      <div className='flex items center justify-center gap-2'>
        <img src={IconGame} alt='Icon game WhoCharGame' />
        <h1 className='text-3xl font-bold'>WhoCharGame</h1>
      </div>

      {// Si no hay un item seleccionado, Inicio
      selItem === -1 &&
        <>
          {/* Mostrar estados y botón de reset */}
          <div className='flex items-center justify-center my-5'>
            {getStatus().map(t =>
              <div key={t} className='flex items-center mx-2'>
                <div className={`${getColor(t)} rounded-md w-6 h-6 text-xs font-semibold py-1 select-none mr-1`}>
                  {(t === 'Unplayed') ? '?' : null}
                </div>
                <span>{t}</span>
              </div>
            )}
            <button className='btn btn-blue ml-10' onClick={resetAll}>RESET</button>
          </div>

          {/* Grid de todos los items */}
          <div className='grid grid-cols-4 gap-4'>
            {items.map(item =>
              <ItemGrid key={item.id} values={item} />
            )}
          </div>
        </>
      }

      {// Si hay un item seleccionado, Jugar
        selItem >= 0 && <Item id={selItem} />
      }
    </div>
  )
}

export default App
