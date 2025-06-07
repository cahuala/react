import Board from "../game/Board";
import GameResult from "./GameResult";
import GameResultCheck from "./GameResultCheck";

export default class TieChecker implements GameResultCheck {
    check(board: Board): GameResult {
        return board.isFull() ? new GameResult([], true) : new GameResult()
    }
}