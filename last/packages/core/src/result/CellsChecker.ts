import Board from "../game/Board";
import Cell from "../shared/Cell";
import GameResult from "./GameResult";
import GameResultCheck from "./GameResultCheck";

export default class CellsChecker implements GameResultCheck{
    constructor(private readonly cells:[number,number][]) {}

    check(board: Board): GameResult {
        const cells = this.cells.map(([row, col]) => board.get(row, col));
        const types = cells.map((cells)=> cells!.type);
        return types.every((type) => type !=null && type === types[0]) ? new GameResult(cells as Cell[]) : new GameResult();
    }
}