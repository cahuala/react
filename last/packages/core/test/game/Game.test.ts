import { Game, Player, PlayerType } from "../../src";

test("Deve retornar  o proximo jogador", () => {
  const game = Game.create(new Player("P1", PlayerType.O), new Player("P2", PlayerType.X));
  expect(game.currentPlayer.type).toBe(PlayerType.O);
  expect(game.nextRound().currentPlayer.type).toBe(PlayerType.X);
});

test("Deve finalizar o jogo com victoria #1", () => {
  const game = Game.create(new Player("P1", PlayerType.O), new Player("P2", PlayerType.X))
  .addMove(0, 0)
  .addMove(1, 1)
  .addMove(0, 1)
  .addMove(1, 2)
  .addMove(0, 2)

    expect(game.result.finished).toBeTruthy();

    expect(game.player2.score).toBe(0);
    expect(game.player1.score).toBe(1);
});

test("Deve finalizar o jogo com victoria #2", () => {
  const game = Game.create(new Player("P1", PlayerType.O), new Player("P2", PlayerType.X))
  .addMove(0, 0)
  .addMove(1, 1)
  .addMove(0, 1)
  .addMove(2, 0)
  .addMove(0, 2)

    expect(game.result.finished).toBeTruthy();
    expect(game.result.xWins).toBeFalsy();
    expect(game.result.oWins).toBeTruthy();
   
});
test("Deve finalizar o jogo com empate", () => {
  const game = Game.create(new Player("P1", PlayerType.O), new Player("P2", PlayerType.X))
  .addMove(0, 0)
  .addMove(0, 1)
  .addMove(0, 2)
  .addMove(1, 0)
  .addMove(1, 1)
  .addMove(1, 2)
  .addMove(2, 0)
  .addMove(2, 1)
  .addMove(2, 2)

    expect(game.result.finished).toBeTruthy();
}
);
