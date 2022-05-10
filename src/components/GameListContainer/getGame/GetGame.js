import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gamesData } from "../../../data/gamesData"
import GameCard from "../gameCard/GameCard"


const GetGames = (props) => {

    const [games, setGames] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getGames()
    }, [])

    const getGames = () => {
        const getGamesPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(gamesData)
            });
        })

        getGamesPromise.then(res => {
            setGames(res)
        })
    }

    return (
        <>
            {games.filter((g) => {
                if (categoryId === undefined) {
                    return true;
                } else {
                    return g.categoryId === categoryId;
                }
            }).map(g => <GameCard key={g.id} game={g} initial={props.props.initial} onAdd={props.props.onAdd} />)}
        </>
    )
}

export default GetGames