import { useEffect, useState } from "react";
import { useAppStore } from "../store/useAppStore"
import ErrorMessage from "./ErrorMessage";


const FormSearch = () => {

    const categories = useAppStore(state => state.categories);
    const searchRecipes = useAppStore(state => state.searchRecipes);
    const showNotification = useAppStore(state => state.showNotification);
    const [filter, setFilter] = useState({
        ingredient: '',
        category: ''
    })
    const [error, setError] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(filter).includes('')) {
            showNotification({
                text: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        setError('')
        searchRecipes(filter)
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [error])

    return (
        <form
            className=" lg:w-2/5 my-20 p-10 bg-gradient-to-tr from-orange-200 to-yellow-400 shadow-lg rounded-lg space-y-5 mx-auto lg:mx-4"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="space-y-2">
                <label htmlFor="ingredient" className="text-slate-600 font-extrabold text-lg">Nombre o Ingrediente:</label>
                <input
                    id="ingredient"
                    name="ingredient"
                    type="text"
                    className="p-3 w-full rounded-lg bg-slate-200 focus:outline-none"
                    placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Cafe"
                    defaultValue={filter.category}
                    onChange={e => setFilter({ ...filter, [e.target.name]: e.target.value })}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="ingredient" className="text-slate-600 font-extrabold text-lg">Categoría:</label>
                <select
                    name="category"
                    id="category"
                    className="p-3 w-full rounded-lg bg-slate-200 focus:outline-none"
                    onChange={e => setFilter({ ...filter, [e.target.name]: e.target.value })}
                >
                    <option value="">-- Seleccione una opción</option>
                    {
                        categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))
                    }
                </select>
            </div>
            <input
                type="submit"
                value='Buscar'
                className="cursor-pointer p-2 rounded-lg bg-orange-600 text-slate-200 font-extrabold w-full uppercase hover:bg-orange-800 hover:scale-105 transition-all duration-300 ease-in-out "
            />
        </form>
    )
}

export default FormSearch