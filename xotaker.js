class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
    }
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
        if (n == 1) {
            this.energy == 7;
        }
        if (n == 2) {
            this.energy == 13;
        }
        if (n == 3) {
            this.energy == 14;
        }
        if (n == 4) {
            this.energy == 10;
        }
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    //---------------------------------------------------
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    this.energy++
                }
            }

        }
        else {
            this.sharjvel();

        }
    }
    utel3() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(12);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 0;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in vxotArr) {
                if (vxotArr[i].x == this.x && vxotArr[i].y == this.y) {
                    vxotArr.splice(i, 1);
                    this.energy == 0;
                }
            }
        }
    }
    //---------------------------------------------------
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------
    bazmanal2() {
        if (w == 2) {
            var norVandak = random(this.yntrelVandak(2));
            if (this.energy >= 15 && norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotakerArr.push(norXotaker);
                if (Math.random() < 0.5) {
                    matrix[norVandak[1]][norVandak[0]] = 2.1;
                }
                else{
                     matrix[norVandak[1]][norVandak[0]] = 2;
                }
            }
        }
    }
    //---------------------------------------------------
    mahanal() {
        if (this.energy <= 2) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}