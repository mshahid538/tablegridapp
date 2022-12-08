import { item } from '../types/Products'

const Grid = ({ data }: { data: item[] }) => {
  return (
    <div className="w-full flex justify-center items-center mt-8 flex-col  px-4">
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item: item) => {
          return (
            <div
              key={item.id}
              className="border-2 border-gray-500 p-4 bg-blue-100 mam"
            >
              <img
                src={item?.thumbnail}
                alt={item?.brand}
                className="w-60 object-contain h-60"
              />
              <div className="flex justify-start  flex-col h-full w-full">
                <h2 className="text-xl font-bold">{item?.title}</h2>
                <h2>PKR {item?.price}</h2>
                <h2>{item?.description}</h2>
                <button className="justify-start flex border-2 border-blue-500 hover:bg-white px-3 py-1 w-[50%] mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Grid
