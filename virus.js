class Virus extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 1000
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
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
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
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 11;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    sharjvel2() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 12;
            matrix[norVandak[1]][norVandak[0]] = 11;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    sharjvel3() {
        var datarkVandakner = this.yntrelVandak(12);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 12;
            matrix[norVandak[1]][norVandak[0]] = 11;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    mahanal() {
        if (n == 1) {
            this.energy = 0;
        }
        if (this.energy <= 5) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}