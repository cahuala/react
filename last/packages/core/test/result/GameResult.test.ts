import { Cell, GameResult, PlayerType } from "../../src"

test("Deve criar um resultado empatado", () => {
    const empatado = new GameResult([], true);
    expect(empatado.finished).toBeTruthy();
    expect(empatado.tied).toBeTruthy();
    expect(empatado.inProgress).toBeFalsy();
});
test("Deve criar um resultado com victoria", () => {
    const c1 = new Cell(0, 0, PlayerType.X);
    const c2 = new Cell(0, 1, PlayerType.X);
    const c3 = new Cell(0, 2, PlayerType.X);
    const vitoria = new GameResult([c1, c2, c3]);
    expect(vitoria.finished).toBeTruthy();
    expect(vitoria.tied).toBeFalsy();
    expect(vitoria.inProgress).toBeFalsy();
    expect(vitoria.hasCell(0, 0)).toBeTruthy();
    expect(vitoria.hasCell(1, 1)).toBeFalsy();
})
