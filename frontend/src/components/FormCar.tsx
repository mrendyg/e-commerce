

const Form = () => {
    return (
        <form className='text-black text-center self-center p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white bd:5'>
            <label>
                VIN:
                <input type="text" name="VIN"  className="bg-[#E7E7E7]"/>
            </label>
        </form>
    )
}

export default Form;