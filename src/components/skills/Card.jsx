import React from 'react'
const Card = ({name}) => {
  return (
    <div className="h-[180px] w-[180px] bg-white text-transfrom: uppercase font-bold  text-gray-500 flex items-center justify-center rounded-full">
        {name}
    </div>
  )
}

export default Card