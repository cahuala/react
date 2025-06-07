import { Board, PlayerType } from "../../src"
import VerticalChecker from "../../src/result/VerticalChecker";

test("Deve finalizar com victória vertical", () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.O)
        .set(1, 0, PlayerType.O)
        .set(2, 0, PlayerType.O);
    const result = new VerticalChecker().check(board);
    expect(result.finished).toBeTruthy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeTruthy();
});
test("Deve continuar com jogo em andamento", () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(1, 0, PlayerType.O)
        .set(2, 0, PlayerType.X);
    const result = new VerticalChecker().check(board);
    expect(result.finished).toBeFalsy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeFalsy();
    expect(result.inProgress).toBeTruthy();
});