import React from 'react'

function Education() {
  return (
    <div>
      <ul className="space-y-8 w-min text-white">
        <li className="w-max h-auto space-y-3">
          <h1 className="tracking-wide font-semibold text-xl">
            Bachelors in Information Technology
          </h1>
          <p className=" text-[#b5b5b5]">
            St. Vincent Pallotti College of Engineering and Technology, Nagpur <br /> 2021-2025
          </p>
        </li>
        <li className="rounded-xl h-auto space-y-4">
          <h1 className="tracking-wide  font-semibold text-xl">
            Higher Secondary School
          </h1>
          <p className=" text-[#b5b5b5]">
            Kendriya Vidyalaya Ajni, Nagpur <br /> 2019-2021
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Education