import Cell from "../shared/Cell";
import { PlayerType } from "../shared/PlayerType";

export default class GameResult {
    constructor(
        readonly winningMove: Cell[]=[],
        readonly _tied: boolean = false,
    ){}

    get xWins(): boolean {
        return this.winningMove[0]?.type === PlayerType.X;
    }
    get oWins(): boolean {
        return this.winningMove[0]?.type === PlayerType.O;
    }
    get tied(): boolean {

        return !this.xWins &&
            !this.oWins && this._tied;
    }
    get inProgress(): boolean {
        return this.winningMove.length === 0 &&
            !this.tied 
    }
    get finished(): boolean {
        return !this.inProgress;
    }

    hasCell(row: number, col: number): boolean {
    return this.winningMove.find((cell) => cell.row === row && cell.column === col) !== undefined;
}
    
}