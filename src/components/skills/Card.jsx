import React from 'react'
const Card = ({name}) => {
  return (
    <div className="h-[200px] w-[200px] bg-white text-transfrom: uppercase font-bold  text-gray-500 flex items-center justify-center rounded-full">
        {name}
    </div>
  )
}

export default Card