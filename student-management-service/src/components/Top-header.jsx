import logo from '../images/college_icon.jpg'

const TopHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={logo} alt="" className='w-[10rem]'/>
            <h1 className='font-bold text-4xl'>SRINIX COLLEGE OF ENGINEERING</h1>
        </div>
    );
}

export default TopHeader;
