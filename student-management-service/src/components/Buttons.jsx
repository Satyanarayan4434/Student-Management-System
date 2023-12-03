const Buttons = () => {
    return (
        <div>
            <div className="flex gap-6 justify-center items-center">
                <button className="bg-blue-500 px-3 py-2 font-sans font-semibold rounded-xl text-white">Student Login</button>
                <button className="bg-slate-600 px-3 py-2 font-sans font-semibold rounded-xl text-white">Teacher Login</button>
                <button className="bg-black px-3 py-2 font-sans font-semibold rounded-xl text-white">Admin Login</button>
            </div>
        </div>
    );
}

export default Buttons;
