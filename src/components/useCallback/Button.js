import React from 'react'

function Button({ onClick, children }) {
  console.log('Rendering Button:', children)

  return (
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default React.memo(Button)