import React from 'react'

const Container = ({children , extraStyles} : {children : React.ReactNode , extraStyles ?: string}) => {
  return (
    <div
    className={`${extraStyles} bg-white rounded-lg border-2 hover:shadow-lg shadow-grey-300
    flex justify-center items-center
    `}
    >
        {children}

    </div>
  )
}

export default Container