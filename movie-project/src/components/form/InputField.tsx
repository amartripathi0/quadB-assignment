import React from 'react'

const InputField = ({label  , name  , handleChange , placeholder} : {label :string , name : string ,  placeholder : string , handleChange : (e : any) => any}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type="text" onChange={handleChange} name={name}  placeholder= {placeholder}/>
    </div>
  )
}

export default InputField