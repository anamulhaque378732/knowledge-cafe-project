 import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 mb-8 max-auto max-w-6xl'>
           <h1 className="text-4xl font-bold"> Knowledge cafe</h1>
           <img src={profile} alt="" /> 
        </header>
    );
};

export default Header;