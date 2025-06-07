/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

'use client'
import { Board, Game, GameResult, Player, PlayerType } from "core"
import { createContext, useState } from "react"

interface GameContextProps{
    ties:number;
    player1:Player;
    player2:Player;
    currentPlayer: Player;
    board:Board;
    result: GameResult
    addMove:(row:number, column:number) => void;
    nextRound: () => void;
    clear:()=>void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const GameContext = createContext<GameContextProps>({} as any)

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GameProvider(props:any){
    const [game, setGame] = useState<Game>(
        Game.create(
            new Player('P1', PlayerType.X),
            new Player('P2', PlayerType.O),
        )
    )
    function addMove(row:number, column:number){
        setGame(game.addMove(row, column))
    }
    function nextRound(){
        setGame(game.nextRound())
    }
    function clear(){
        setGame(game.clear())
    }
    return(
        <GameContext.Provider value={{
            ties: game.ties,
            player1: game.player1,
            player2: game.player2,
            board: game.board,
            currentPlayer: game.currentPlayer,
            result: game.result,
            addMove,
            nextRound,
            clear
        }}>
            {props.children}
        </GameContext.Provider>
    )
}
export default GameContext;