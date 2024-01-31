import { useContext } from "react"
import { UserContext } from "../Context"
import { getColor, getImage } from "../utils"

function Item ({ id }) {
    const { items, setSelItem } = useContext(UserContext)

    return(<div className="text-center items-center w-2/3 my-5 mx-auto p-5 rounded-lg shadow-md bg-slate-800/50 ring-1 ring-white/10">

        <div className="flex w-8/12 h-[50vh] justify-center mt-2 mx-auto rounded-lg">
            <div className={`w-full h-full bg-cover bg-center rounded-lg`}
                style={{backgroundImage:`url(${getImage(id-1)})`}}
            >   {/* blur-sm | blur | blur-md | blur-lg | blur-xl*/}
                <div className="w-full h-full flex justify-center items-center backdrop-blur-xl rounded-lg"></div>
            </div>
        </div>

        <div className="my-4">
            <label htmlFor="charName" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Character name</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="charName" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Character name" required />
                <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try</button>
            </div>
        </div>

        <div className="flex justify-center items-center">
            <span>Intentos</span>
            {items[id-1].try.map((t,i) =>
                <div key={i} className={`${getColor(t)} rounded-md w-8 h-8 text-lg font-semibold select-none ml-4`}>
                    {(t === 'Unplayed') ? '?' : null}
                </div>
            )}
        </div>

        <button className="btn btn-blue mt-4" onClick={()=>setSelItem(0)}>VOLVER</button>
    </div>)
}

export default Item