import React from 'react'

const Card = ({name}) => {
  return (
    <div className="h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">
        {name}
    </div>
  )
}


export default Card