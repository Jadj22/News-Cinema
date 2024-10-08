
const Button = ({children}) => {
  return (
    <button className='w-64 p-2 mt-5 max-sm:p-1 text-lg bg-blue-600 font-semibold hover:bg-blue-500 text-white rounded-lg'>{children}</button>
  )
}

export default Button
