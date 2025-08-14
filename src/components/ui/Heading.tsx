import React from 'react'
interface HeadingProps {
  name: string;
}
function Heading({name}: HeadingProps) {
  return (
    <header className="pl-20 pr-15 font-Pop flex justify-center items-center w-full space-x-6 text-[#2d325a] py-10">
        <h1 className="text-7xl font-bold uppercase">{name}</h1>
        <span className="h-1 rounded-2xl w-full bg-[#2d325a]"></span>
      </header>
  )
}

export default Heading