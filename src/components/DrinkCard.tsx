import type { DrinkAPIResponse } from "../types"
import { IoReceiptOutline } from "react-icons/io5";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useAppStore } from "../store/useAppStore";


type DrinkCardProps = {
    drink: DrinkAPIResponse
}

const DrinkCard = ({ drink }: DrinkCardProps) => {

    const selectRecipe = useAppStore(state => state.selectRecipe);

    return (
        <div className="shadow-md border p-5 bg-gradient-to-tr from-orange-100 to-yellow-50">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={drink.strDrinkThumb}
                    alt={`La imagen de: ${drink.idDrink}`}
                    className="hover:scale-125 hover:rotate-2 transition-transform duration-300 ease-in-out object-center object-cover"
                    loading="lazy"
                />
            </div>
            <div>
                <div className="flex items-center my-2 gap-2">
                    <IoReceiptOutline className="" />
                    <p className="text-slate-800 truncate font-bold text-xl ">{drink.strDrink}</p>
                </div>
                <button
                    className="cursor-pointer p-2  bg-orange-500 text-slate-200 font-extrabold w-full uppercase hover:bg-orange-600 mt-2 rounded-sm transition-all ease-in-out duration-200 flex items-center gap-2 justify-center"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    <LiaExternalLinkAltSolid />
                    Ver Receta
                </button>
            </div>
        </div>
    )
}

export default DrinkCard