
const Badge = ({label , extraStyles} : {label : string | number | null , extraStyles ?: string}) => {
  return (
    <div className={`${extraStyles} flex-center p-1 px-3 font-md rounded-xl border-2 border-purple-300  hover:bg-purple-100`}>
        <h1>{label}</h1>
    </div>
  )
}

export default Badge