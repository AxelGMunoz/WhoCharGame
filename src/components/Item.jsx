import { useContext } from 'react'
import Blur from 'react-blur'

import { chars, getActualPos, getColor, getImage, status } from '../utils'
import { UserContext } from '../Context'
import InpSelect from './InpSelect'

function Item ({ id }) {
  const { items, setSelItem, updateItem } = useContext(UserContext)

  // Función que devulve el número para el efecto Blur
  const setBlur = () => {
    if (items[id].status !== status.Unplayed) return 0

    return items[id].try.filter(t => t === status.Unplayed).length * 10
  }

  return (
    <div className='text-center items-center sm:w-2/3 mt-5 mx-auto p-5 rounded-lg shadow-md bg-slate-800/50 ring-1 ring-white/10'>

      {// Mostrar nombre del personaje si ya se terminó
        items[id].status !== status.Unplayed &&
          <h2 className='text-2xl font-semibold'>
            {chars[id]}
          </h2>
        }

      {/* Imagen del personaje */}
      <div className='flex w-8/12 max-md:h-2/3 md:h-[45vh] justify-center mt-2 mx-auto rounded-lg'>
        <Blur img={getImage(id)} blurRadius={setBlur()} className='w-full h-full object-cover' />
      </div>

      {// Si todavía se puede jugar, mostrar combobox de los nombres
        items[id].status === status.Unplayed &&
          <div className='mt-4'>
            <InpSelect charID={id} />
          </div>
        }

      {/* Mostrar los intentos */}
      <div className='flex justify-center items-center mt-4'>
        <span>Trys</span>
        {items[id].try.map((t, i) =>
          <div key={i} className={`${getColor[t]} rounded-md w-8 h-8 text-lg font-semibold select-none ml-4`}>
            {(t === 'Unplayed') ? '?' : null}
          </div>
        )}
      </div>

      {/* Botones */}
      {items[id].status === status.Unplayed &&
        <button
          className='btn btn-blue mr-4'
          onClick={() => updateItem(id, getActualPos(items[id]), status.Skipped)}
        >
          SKIP
        </button>}
      <button className='btn btn-blue mt-4' onClick={() => setSelItem(-1)}>VOLVER</button>
    </div>
  )
}

export default Item
