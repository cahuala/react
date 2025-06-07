import { Board, PlayerType } from "../../src"
import DiagonalChecker from "../../src/result/DiagonalChecker";

test("Deve Finalizar Jogo da Velha com Vitoria Diagonal", () => {
    const board = Board.empty().set(0, 0, PlayerType.O)
        .set(1, 1, PlayerType.O)
        .set(2, 2, PlayerType.O);
    const result = new DiagonalChecker().check(board);
    expect(result.finished).toBeTruthy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeTruthy();
});
test("Deve finalizar o jogo da velha com vitoria diagonal inversa", () => {
    const board = Board.empty().set(0, 2, PlayerType.X)
        .set(1, 1, PlayerType.X)
        .set(2, 0, PlayerType.X);
    const result = new DiagonalChecker().check(board);
    expect(result.finished).toBeTruthy();
    expect(result.xWins).toBeTruthy();
    expect(result.oWins).toBeFalsy();
});
test("Deve continuar com jogo em andamento", () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(1, 1, PlayerType.O)
        .set(2, 2, PlayerType.X);
    const result = new DiagonalChecker().check(board);
    expect(result.finished).toBeFalsy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeFalsy();
    expect(result.inProgress).toBeTruthy();
}
);