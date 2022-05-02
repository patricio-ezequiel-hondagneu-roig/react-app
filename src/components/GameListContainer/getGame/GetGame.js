import { useEffect, useState } from "react"
import { gamesData } from "../../../data/gamesData"
import GameCard from "../gameCard/GameCard"


const GetGames = (props) => {

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
        <>
            {games.map(g => <GameCard key={g.id} game={g} initial={props.props.initial} onAdd={props.props.onAdd} />)}
        </>
    )
}

export default GetGames