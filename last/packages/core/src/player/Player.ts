import { PlayerType } from "../shared/PlayerType";

export default class Player {
    constructor(
        readonly name: string,
        readonly type: PlayerType,
        readonly score: number = 0 ){}
    addScore(points: number): Player {
        if (points === 0) return this;
        return new Player(this.name, this.type, this.score + points);
    }
    clear(): Player {
        return new Player(this.name, this.type, 0);
    }
}