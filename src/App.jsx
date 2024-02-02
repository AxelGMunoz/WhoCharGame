import { useContext } from "react"
import ItemGrid from "./components/ItemGrid"
import Item from "./components/Item"
import { getColor, getStatus } from "./utils"
import { UserContext } from "./Context"

function App() {
  const { selItem, items, resetAll } = useContext(UserContext)

  return (<>
  <div className="text-center">
    <h1 className="text-3xl font-bold">WhoCharGame</h1>

    {selItem == -1 && <>
      <div className="flex items-center justify-center my-5">
        {getStatus().map(t=>
          <div key={t} className="flex items-center mx-2">
            <div className={`${getColor(t)} rounded-md w-6 h-6 text-xs font-semibold py-1 select-none mr-1`}>
              {(t === 'Unplayed') ? '?' : null}
            </div>
            <span>{t}</span>
          </div>
        )}
        <button className="btn btn-blue ml-10" onClick={resetAll}>RESET</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map(item=>
          <ItemGrid key={item.id} values={item} />
        )}
      </div>
    </>}

    {selItem >= 0 && <Item id={selItem} />}
    </div></>)
}

export default App
