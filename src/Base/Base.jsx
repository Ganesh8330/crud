import React from 'react'

const Base = ({title,description,children}) => {
  return (
    <div className='main-container'>
      <header>
        <nav>
            <div>
                <h1>Application</h1>
            </div>
            <div className='nav-btn-group'>
                <button>button1</button>
                <button>button2</button>
                <button>button3</button>
            </div>
        </nav>
      </header>
      <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className="contents">
        {children}
        </div>
      </main>
    </div>
  )
}

export default Base
