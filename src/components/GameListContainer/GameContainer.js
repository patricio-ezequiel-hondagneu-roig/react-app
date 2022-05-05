import GameList from "./GameList"

const GameContainer = (props) => {

    return (
        <GameList stock={props.stock} initial={props.initial} onAdd={props.onAdd} />
    )
}
export { GameContainer }