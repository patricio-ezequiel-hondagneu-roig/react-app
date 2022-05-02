import GameList from "./GameList"

const GameContainer = (props) => {

    return (
        <div style={{ height: 87.2 + "vh" }}>
            <GameList stock={props.stock} initial={props.initial} onAdd={props.onAdd} />
        </div>
    )
}
export { GameContainer }