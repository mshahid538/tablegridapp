import React from 'react'
import { item } from '../types/Products'

const Table = ({ data }: { data: item[] }) => {
  return (
    <div className="w-full flex justify-center items-center mt-8 flex-col  ">
      {data?.map((item: item) => {
        return (
          <div
            key={item.id}
            className="flex w-[60%] items-center border-2 my-4 bg-blue-100 border-gray-500 py-3 space-x-16 px-2"
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
              <button className="justify-start flex border-2 border-blue-500 hover:bg-white px-3 py-1 w-[20%] mt-4">
                Add to Cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Table
