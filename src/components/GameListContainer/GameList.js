import { useEffect, useState } from "react";
import { gamesData } from "../../data/gamesData";
import GameCard from "./gameCard/GameCard";

const GameList = (props) => {

    const [games, setGames] = useState([])

    useEffect(() => {
        getGames()
    }, [])

    const getGames = () => {
        const getGamesPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(gamesData)
            }, 2000);
        })

        getGamesPromise.then(res => {
            setGames(res)
        })
    }

    return (
        <div>
            {games.map(g => <GameCard key={g.id} game={g} initial={props.initial} onAdd={props.onAdd} />)}
        </div>
    )
}
export default GameList