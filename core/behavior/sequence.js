import Behavior from 'tic-tac-toe/behavior/behavior';
import Manager from 'tic-tac-toe/manager'
import Answer from 'tic-tac-toe/over'

export default class extends Behavior {
    constructor(matrix, player, partner) {
        super([8, 7, 6, 5, 4, 3, 2, 1, 0]);
        this.matrix = matrix;
        this.player = player;
        this.partner = partner;
    }

    getAnswer() {
        for (let i = 0; i < Manager.length; ++i) {
            let point = this.priority[i];

            if (this.matrix.values[point]) continue;

            this.matrix.set(point, this.partner);

            return new Answer(Manager.winner.get(this.matrix.values, this.partner))
        }
    }
}