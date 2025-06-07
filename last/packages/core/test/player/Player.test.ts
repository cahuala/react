import { Player, PlayerType } from "../../src"

test("Deve retornar a mesma instancia quando adicionar 0 pontos",()=>{
    const player = new Player("P1",PlayerType.O)
    expect(player.addScore(0)=== player).toBeTruthy()
})

test("Deve retornar uma nova instancia quando adicionar pontos",()=>{
    const player = new Player("P1",PlayerType.O)
    expect(player.addScore(1)===player).toBeFalsy()
})

test("Deve adicionar 10 pontos ao jogador",()=>{
    const player = new Player("P1",PlayerType.O).addScore(10)
    expect(player.name).toBe("P1")
    expect(player.type).toBe(PlayerType.O)
    expect(player.score).toBe(10)
}) 

test("Deve zerar a pontuação do jogador",()=>{
    const player = new Player("P1",PlayerType.O,10).clear()
    expect(player.name).toBe("P1")
    expect(player.type).toBe(PlayerType.O)
    expect(player.score).toBe(0)
})