const SelectButton = ({children}) => {
    return (
        <div className="w-96 h-32 border-8 border-purple-900 rounded-full grid place-content-center bg-purple-100 p-4">
        <p className='text-3xl font-medium text-purple-900'>{children}</p>
      </div>
    )
}
export default SelectButton