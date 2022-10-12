import { useState } from 'react'

export default ({ colors }) => {
  const [index, setIndex] = useState(0)

  const handleColorChange = () => {
    if (index < colors.length - 1) setIndex(index => index + 1)
  }

  return (
    <>
      <h1>{colors[index].toUpperCase()}</h1>
      <button
        onClick={handleColorChange}
        style={{
          color: 'black',
          border: 'none',
          backgroundColor: `${colors[index]}`,
          padding: '20px',
          textAlign: 'center',
          fontSize: '30px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '30px'
        }}
      >
        Click me!
      </button>
    </>
  )
}
