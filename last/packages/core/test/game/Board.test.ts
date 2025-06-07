import { PlayerType } from "../../src";
import Board from "../../src/game/Board";
test("Deve criar um tabuleiro vazio", () => {
    const board = Board.empty();
    expect(board.rows).toBe(3);
    expect(board.columns).toBe(3);
    expect(board.isFull()).toBeFalsy();
})
test("Deve retornar uma célula vazia", () => {
    const board = Board.empty();
    expect(board.get(0, 0)?.isEmpty()).toBeTruthy();
});
test("Deve retornar uma célula não vazia", () => {
    const board = Board.empty().set(0, 0, PlayerType.X);
    expect(board.get(0, 0)?.isNotEmpty()).toBeTruthy();
}
);
test("Deve retornar uma célula vazia após ser marcada", () => {
    const board = Board.empty().set(0, 0, PlayerType.X);
    expect(board.get(0, 0)?.isEmpty()).toBeFalsy();
}
);
test("Deve retornar uma célula não vazia após ser marcada", () => {
    const board = Board.empty().set(0, 0, PlayerType.X);
    expect(board.get(0, 0)?.isNotEmpty()).toBeTruthy();
}
);
test("Deve Ignorar marcar célula inexistente", () => {
    const board = Board.empty()
    const sameBoard = board.set(10, 1, PlayerType.X);
    expect(board === sameBoard).toBeTruthy()
}
);
test("Deve retornar todas as células", () => {
    const board = Board.empty();
    expect(board.items.length).toBe(9);
});
test("Deve marcar uma célula por linha e coluna",()=>{
    const board = Board.empty().set(1, 1, PlayerType.X)
    expect(board.isNotEmpty(1, 1)).toBeTruthy();
    expect(board.isEmpty(1, 1)).toBeFalsy();
        
  
})