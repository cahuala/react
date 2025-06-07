import Cell from "../shared/Cell";
import { PlayerType } from "../shared/PlayerType";

export default class Board {
    private constructor(readonly state: Cell[][]) {}
    static empty(): Board {
        return new Board([
            [new  Cell(0,0), new Cell(0,1), new Cell(0,2)],
            [new Cell(1,0), new Cell(1,1), new Cell(1,2)],
            [new Cell(2,0), new Cell(2,1), new Cell(2,2)],
        ]);
    }
    get rows():number {
        return this.state.length;
    }
    get columns(): number {
        return this.state[0]?.length ?? 0;
    }
    
    get items(): Cell[]{
        return this.state.flat();
    }

    get(row: number, column: number): Cell | null {
        return this.state[row]?.[column] ?? null;
    }

    isEmpty(row: number, column: number): boolean {
        return this.get(row, column)?.isEmpty() ?? true
}
isNotEmpty(row: number, column: number): boolean {
        return !this.isEmpty(row, column);
    }
    isFull(): boolean {
        return this.items.every((cell) => cell.type !== null);
    }
    set(row: number, column: number, type: PlayerType): Board {
        const cell = this.get(row, column);
        if (!cell || cell.isNotEmpty()) return this
        const state = this.state.map((row) => [...row])
        if (
  state[row] &&
  state[row][column] &&
  typeof state[row][column].markWith === 'function'
) {
  state[row][column] = state[row][column].markWith(type);
} else {
  console.error("Erro ao marcar célula: linha/coluna inválida ou método inexistente");
}

        return new Board(state);
    }
}