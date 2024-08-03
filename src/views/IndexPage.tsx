import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore"
import DrinkCard from "../components/DrinkCard";

const IndexPage = () => {

    const drinks = useAppStore(state => state.drinks);

    const hasDrinks: boolean = useMemo(() => drinks.length > 0, [drinks]);

    return (
        <>
            <h1 className="text-5xl font-black text-transparent bg-gradient-to-tr from-orange-600 to-yellow-400 bg-clip-text text-center">
                Recetas
            </h1>

            {
                hasDrinks ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        {
                            drinks.map(drink => (
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

export default IndexPage