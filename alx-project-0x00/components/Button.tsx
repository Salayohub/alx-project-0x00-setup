import React from "react"

interface Button {
  title: string
  style?: string
}

const Button: React.FC<Button> = ({ title, style }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-white bg-blue-600 ${style}`}
    >
      {title}
    </button>
  )
}

export default Button
