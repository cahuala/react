import { PlayerType } from "./PlayerType";

export default class Cell{
    constructor(
        readonly row: number,
        readonly column: number,
        readonly type: PlayerType | null = null
    ){}

    markWith(type: PlayerType): Cell {
        if (this.type !== null) return this;
        return new Cell(this.row, this.column, type);
        
    }

    isEmpty(): boolean {
        return this.type === null;
    }
    isNotEmpty(): boolean {
        return !this.isEmpty();
    }
}