import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import FormSearch from './FormSearch'
import { useEffect, useMemo } from 'react'
import { useAppStore } from '../store/useAppStore'

const Header = () => {

    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore(state => state.fetchCategories)
    

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={`${isHome ? 'bg-header bg-center bg-cover' : 'bg-gradient-to-br from-slate-800 to-sky-900'}`}>
            <div className="container mx-auto px-5 py-16">
                <div className="flex justify-between items-center flex-col lg:flex-row">
                    <div>
                        <img src={logo} alt="logitpo" className="w-32" />
                    </div>
                    <nav className='flex gap-4 mt-10 lg:mt-0 flex-col md:flex-row text-center'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => `${isActive ? 'text-orange-500 border-b-2 border-orange-500' : 'text-white'}  font-bold uppercase p-2 hover:text-orange-500 transition-all duration-300`}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to='/favorite'
                            className={({ isActive }) => `${isActive ? 'text-orange-500 border-b-2 border-orange-500' : 'text-white'}  font-bold uppercase p-2 hover:text-orange-500 transition-all duration-300`}
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                {isHome && <FormSearch />}
            </div>
        </div >
    )
}

export default Header