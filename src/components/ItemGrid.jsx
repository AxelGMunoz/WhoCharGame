import { useContext } from 'react'

import { getColor } from '../utils'
import { UserContext } from '../Context'

function ItemGrid ({ values }) {
  const { setSelItem } = useContext(UserContext)

  return (
    <div className='text-center rounded-md px-4 pt-1 pb-2 select-none shadow-md bg-slate-800/50 ring-1 ring-white/10 hover:ring-indigo-500'>

      {/* Titulo y Botón de intento */}
      <div className='flex my-1 justify-between'>
        <div className='text-center'>
          Character #{values.id}
        </div>

        <button className='btn btn-blue text-sm !py-1 !px-2' onClick={() => setSelItem(values.id)}>
          Try
        </button>
      </div>

      <div className='flex justify-between items-center'>
        {/* Grid de intentos */}
        <div className='grid gap-4 grid-cols-5 items-center'>
          {values.try.map((t, i) => (() =>
            <div key={i} className={`${getColor(t)} rounded-md w-8 h-8 text-xs font-semibold py-2`}>
              {(t === 'Unplayed') ? '?' : null}
            </div>
          )())}
        </div>

        {/* Estado */}
        <div className={`${getColor(values.status)} items-center ml-6 px-2 rounded-sm`}>
          {values.status}
        </div>
      </div>

    </div>
  )
}

export default ItemGrid
