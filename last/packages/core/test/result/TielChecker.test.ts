import { Board, PlayerType } from "../../src";
import TieChecker from "../../src/result/TielChecker";

test("Deve retornar empate quando o jogo estiver cheio", () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(0, 1, PlayerType.O)
        .set(0, 2, PlayerType.X)
        .set(1, 0, PlayerType.O)
        .set(1, 1, PlayerType.X)
        .set(1, 2, PlayerType.O)
        .set(2, 0, PlayerType.O)
        .set(2, 1, PlayerType.X)
        .set(2, 2, PlayerType.O);
    const result = new TieChecker().check(board);
    expect(result.finished).toBeTruthy();
    expect(result.xWins).toBeFalsy();
    expect(result.oWins).toBeFalsy();
    expect(result._tied).toBeTruthy();
    expect(result.inProgress).toBeFalsy();
});
