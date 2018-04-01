class Xot extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    //---------------------------------------------------  
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    //---------------------------------------------------  
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    //---------------------------------------------------
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(4));
        if (this.multiply >= 3 && norVandak) {
            var norXot = new Xot(norVandak[0], norVandak[1]);
            xotArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 0;
        }
    }
}
