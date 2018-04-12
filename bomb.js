class Bomb extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 4000;
    }
    //---------------------------------------------------  
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y - 2],
            [this.x - 2, this.y]
        ];
    }
    //---------------------------------------------------  
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    //---------------------------------------------------
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    //---------------------------------------------------  
    sharjvel2() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    sharjvel3() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    sharjvel4() {
        var datarkVandakner = this.yntrelVandak(4);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    sharjvel5() {
        var datarkVandakner = this.yntrelVandak(5);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    sharjvel6() {
        var datarkVandakner = this.yntrelVandak(6);
        var norVandak = random(datarkVandakner);
        this.energy --
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y][this.x - 1] = 0;
            matrix[norVandak[1]][norVandak[0]] = 13;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    mahanal() {
        if (this.energy <= 1) {
            matrix[this.y][this.x] = 0
            for (var i in bombArr) {
                if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                    bombArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}