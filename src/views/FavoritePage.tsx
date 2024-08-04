import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore"
import DrinkCard from "../components/DrinkCard";

const FavoritePage = () => {

    const favorites = useAppStore(state => state.favorites);

    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])

    return (
        <>
            <h1 className="text-5xl font-black text-transparent bg-gradient-to-tr from-green-600 to-yellow-400 bg-clip-text text-center">
                Favoritos
            </h1>

            {
                hasFavorites ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        {
                            favorites.map(drink => (
                                <DrinkCard
                                    key={drink.idDrink}
                                    drink={drink}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <p className="my-10 text-center text-xl font-semibold text-slate-700">
                        No Hay resultados aún, utiliza el formulario para buscar recetas
                    </p>
                )
            }

        </>
    )
}

export default FavoritePage