import Board from '../game/Board';
import GameResult from './GameResult';
export default interface GameResultCheck{
    check(board: Board): GameResult
}