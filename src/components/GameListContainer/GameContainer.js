import GameList from "./GameList"

const GameContainer = (props) => {

    return (
        <div>
            <GameList stock={props.stock} initial={props.initial} onAdd={props.onAdd} />
        </div>
    )
}
export default GameContainer