import { Cell, PlayerType } from "../../src";

test("Deve criar uma célula preenchida", () => {
  const cell = new Cell(0, 2, PlayerType.X);
  expect(cell.row).toBe(0);
  expect(cell.column).toBe(2);
  expect(cell.type).toBe(PlayerType.X);
  expect(cell.isEmpty()).toBeFalsy();
  expect(cell.isNotEmpty()).toBeTruthy();
});

test("Deve criar uma célula vazia", () => {
  const cell = new Cell(0, 2);
  expect(cell.row).toBe(0);
  expect(cell.column).toBe(2);
  expect(cell.type).toBeNull();
  expect(cell.isEmpty()).toBeTruthy();
  expect(cell.isNotEmpty()).toBeFalsy();
});

test("Deve marcar uma célula vazia com X", () => {
  const cell = new Cell(0, 2);
  const markedCell = cell.markWith(PlayerType.X);
  expect(markedCell.row).toBe(0);
  expect(markedCell.column).toBe(2);
  expect(markedCell.type).toBe(PlayerType.X);
});

test("Deve marcar uma célula vazia com O", () => {
  const cell = new Cell(0, 2);
  const markedCell = cell.markWith(PlayerType.O);
  expect(markedCell.row).toBe(0);
  expect(markedCell.column).toBe(2);
  expect(markedCell.type).toBe(PlayerType.O);
});
test("Não deve marcar uma célula já preenchida", () => {
  const cell = new Cell(0, 2, PlayerType.X);
  const markedCell = cell.markWith(PlayerType.O);
  expect(markedCell.row).toBe(0);
  expect(markedCell.column).toBe(2);
  expect(markedCell.type).toBe(PlayerType.X); // permanece X
}
);
test("Não deve marcar uma célula já preenchida com X", () => {
  const cell = new Cell(0, 2, PlayerType.O);
  const markedCell = cell.markWith(PlayerType.X);
  expect(markedCell.row).toBe(0);
  expect(markedCell.column).toBe(2);
  expect(markedCell.type).toBe(PlayerType.O); // permanece O
}
);