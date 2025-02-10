import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex gap-7 justify-center items-center text-white text-sm *:tracking-wider' >
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>Home</NavLink>
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>Find Equipment</NavLink>
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>Auctions</NavLink>
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>Buy</NavLink>
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>Sell</NavLink>
                <NavLink to="/"  className={({isActive}) => `py-3 px-2 border-b-[3px] inline-block ${isActive ? "border-primary" : "border-transparent"}`}>News</NavLink>
            </nav>
        </>
    )
}

export default Navbar