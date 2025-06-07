import Board from "../game/Board";
import CellsChecker from "./CellsChecker";
import GameResult from "./GameResult";
import GameResultCheck from "./GameResultCheck";

export default class HorizontalChecker implements GameResultCheck {
    check(board: Board): GameResult {
        const result =[
            new CellsChecker([[0, 0], [0, 1], [0, 2]]).check(board),
            new CellsChecker([[1, 0], [1, 1], [1, 2]]).check(board),
            new CellsChecker([[2, 0], [2, 1], [2, 2]]).check(board),
        ].find((result)=> result.finished)
        return result ?? new GameResult();
    }
}