import React from 'react'

const Title = ({title}) => {
  return (
    <div className="flex justify-center items-center gap-4 font-titleFont mb-14">
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{title}</h1>
    </div>
  );
}

export default Title