import { PlayerType, Board } from "../../src";
import HorizontalChecker from "../../src/result/HorizontalChecker";

test("Deve finalizar com vitória horizontal", () => {
    const board = Board.empty()
    .set(0, 0, PlayerType.X)
        .set(0, 1, PlayerType.X)
        .set(0, 2, PlayerType.X);
    const result = new HorizontalChecker().check(board);
    expect(result.finished).toBeTruthy();
    expect(result.xWins).toBeTruthy();
    expect(result.oWins).toBeFalsy();
});
test("Deve continuar com jogo em andamento", () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(0, 1, PlayerType.O)
        .set(0, 2, PlayerType.X);
    const result = new HorizontalChecker().check(board);
    expect(result.finished).toBeFalsy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeFalsy();
    expect(result.inProgress).toBeTruthy();
});
