import React, { useContext } from "react"
import { UserContext } from "../Context"
import { getActualPos, getColor, getImage, getName, status } from "../utils"
import InpSelect from "./InpSelect"

function Item ({ id }) {
    const { items, setSelItem, updateItemLocal } = useContext(UserContext)

    const setBlur = () => {
        if (items[id].status != status.Unplayed) return ''

        let n
        for(n = 0;n<items[id].try.length;n++){
            if(items[id].try[n] == status.Unplayed){
                break
            }
        }

        return (n < 5) ? 'backblur' + (n + 1) : ''
    }

    return(<div className="text-center items-center w-2/3 my-5 mx-auto p-5 rounded-lg shadow-md bg-slate-800/50 ring-1 ring-white/10">

        {items[id].status != status.Unplayed && <h2 className="text-2xl font-semibold">{getName(id)}</h2>}

        <div className="flex w-8/12 h-[50vh] justify-center mt-2 mx-auto rounded-lg">
            <div className={`w-full h-full bg-cover bg-center rounded-lg`}
                style={{backgroundImage:`url(${getImage(id)})`}}
            >
                <div className={`w-full h-full flex justify-center items-center ${setBlur()} rounded-lg`}></div>
            </div>
        </div>

        {items[id].status == status.Unplayed && 
            <div className="mt-4">
                <InpSelect charID={id} />
            </div>
        }
        
        <div className="flex justify-center items-center mt-4">
            <span>Trys</span>
            {items[id].try.map((t,i) =>
                <div key={i} className={`${getColor(t)} rounded-md w-8 h-8 text-lg font-semibold select-none ml-4`}>
                    {(t === 'Unplayed') ? '?' : null}
                </div>
            )}
        </div>

        {items[id].status == status.Unplayed && <button className="btn btn-blue mr-4"
            onClick={()=>updateItemLocal(id, getActualPos(items[id]), status.Skipped)}
        >SKIP</button>}
        <button className="btn btn-blue mt-4" onClick={()=>setSelItem(-1)}>VOLVER</button>
    </div>)
}

export default Item