import { useContext, useState } from 'react'
import IconGame from './assets/icon.svg'

import { getColor, status } from './utils'
import { UserContext } from './Context'

import ItemGrid from './components/ItemGrid'
import Item from './components/Item'

function App () {
  const { selItem, items, resetAll } = useContext(UserContext)
  const [menu, setMenu] = useState(false)

  return (
    <div className='text-center'>

      {/* Titulo */}
      <div className='flex items center justify-center gap-2 mb-3'>
        <img src={IconGame} alt='Icon game WhoCharGame' />
        <h1 className='text-3xl font-bold'>WhoCharGame</h1>

        <button onClick={() => setMenu(!menu)} type='button' className='sm:hidden block ml-3 text-gray-500 hover:text-white focus:text-white focus:outline-none'>
          <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
            {(menu === true)
              ? <path fillRule='evenodd' d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z' />
              : <path fillRule='evenodd' d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />}
          </svg>
        </button>
      </div>

      <div>
        <a className='flex w-fit mx-auto hover:text-slate-500' href='https://github.com/AxelGMunoz/WhoCharGame' target='_blank' rel='noreferrer'>
          <svg className='h-6 w-6 fill-current mr-2' viewBox='0 0 16 16'>
            <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z' />
          </svg>
          <h3>by Axel Muñoz</h3>
        </a>
      </div>

      {// Si no hay un item seleccionado, Inicio
      selItem === -1 &&
        <>
          {/* Mostrar estados y botón de reset */}
          <div className={`items-center justify-center my-5 sm:flex ${(menu === true) ? 'block' : 'hidden'}`}>
            {Object.keys(status).map(t =>
              <div key={t} className='flex items-center mx-2'>
                <div className={`${getColor[t]} rounded-md w-6 h-6 text-xs font-semibold py-1 select-none mr-1 max-sm:mb-2`}>
                  {(t === 'Unplayed') ? '?' : null}
                </div>
                <span>{t}: {items.filter(item => item.status === t).length}</span>
              </div>
            )}

            <button className='btn btn-blue ml-10' onClick={resetAll}>RESET</button>
          </div>

          {/* Grid de todos los items */}
          <div className='md:grid md:grid-cols-4 md:gap-4'>
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
