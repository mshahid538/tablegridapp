import Header from './Components/Header'
import { BsGridFill, BsListOl } from 'react-icons/bs'
import Table from './Components/Table'
import Grid from './Components/Grid'
import { useEffect, useState } from 'react'
function App() {
  const [viewType, setViewType] = useState('TABLE')
  const [data, setData] = useState([])
  const handleToggleView = (type: string) => {
    setViewType(type)
    console.log(type)
  }
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((items) => setData(items.products))
  }, [])

  return (
    <div className="App text-black">
      <Header />
      <div className="flex justify-end mr-8 space-x-6">
        <div
          className={`${viewType == 'TABLE' && 'border-b-2 border-blue-800'}`}
        >
          <BsListOl
            className="text-4xl text-blue-500"
            onClick={() => handleToggleView('TABLE')}
          />
        </div>
        <div
          className={`${viewType == 'GRID' && 'border-b-2 border-blue-800'}`}
        >
          <BsGridFill
            className="text-3xl text-blue-500  "
            onClick={() => handleToggleView('GRID')}
          />
        </div>
      </div>
      {viewType == 'TABLE' && <Table data={data} />}
      {viewType == 'GRID' && <Grid data={data} />}
    </div>
  )
}

export default App
