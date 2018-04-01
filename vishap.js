class Vishap extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 3500;
        var x = random(0, 6);
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
        if (n == 1) {
            this.energy == 3400;
        }
        if (n == 2) {
            this.energy == 3550;
        }
        if (n == 3) {
            this.energy == 3600;
        }
        if (n == 4) {
            this.energy == 3500;
        }
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
            matrix[norVandak[1]][norVandak[0]] = 8;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--
        }
    }
    //---------------------------------------------------
    utel() {
        this.stanalNorKordinatner();
        var lava = this.yntrelVandak(7);
        var miHatlava = random(lava);
        if (miHatlava) {
            matrix[this.y][this.x] = 0;
            matrix[miHatlava[1]][miHatlava[0]] = 8;
            this.x = miHatlava[0];
            this.y = miHatlava[1];
            for (var l in lavaArr) {
                if (lavaArr[l].x == this.x && lavaArr[l].y == this.y) {
                    lavaArr.splice(l, 1);
                    this.energy++
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    //---------------------------------------------------
    bazmanal() {
        var norVandak = random(this.yntrelVandak(x));
        if (this.energy > 3520 && norVandak) {
            var norVishap = new Vishap(norVandak[0], norVandak[1]);
            vishapArr.push(norVishap);
            matrix[norVandak[1]][norVandak[0]] = 8;
        }
    }
    //---------------------------------------------------  
    utel1() {
        this.stanalNorKordinatner(1);
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 8;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    utel2() {
        this.stanalNorKordinatner();
        var Ice = this.yntrelVandak(4);
        var miHatIce = random(Ice);
        if (miHatIce) {
            matrix[this.y][this.x] = 0;
            matrix[miHatIce[1]][miHatIce[0]] = 8;
            this.x = miHatIce[0];
            this.y = miHatIce[1];
            for (var i in iceArr) {
                if (iceArr[i].x == this.x && iceArr[i].y == this.y) {
                    iceArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    utel3() {
        this.stanalNorKordinatner();
        var Ice = this.yntrelVandak(5);
        var miHatIce = random(Ice);
        if (miHatIce) {
            matrix[this.y][this.x] = 0;
            matrix[miHatIce[1]][miHatIce[0]] = 8;
            this.x = miHatIce[0];
            this.y = miHatIce[1];
            for (var i in iceArr) {
                if (iceArr[i].x == this.x && iceArr[i].y == this.y) {
                    iceArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    utel4() {
        this.stanalNorKordinatner(0);
        var xotaker = this.yntrelVandak(2);
        var miHatxotaker = random(xotaker);
        if (miHatxotaker) {
            matrix[this.y][this.x] = 0;
            matrix[miHatxotaker[1]][miHatxotaker[0]] = 8;
            this.x = miHatxotaker[0];
            this.y = miHatxotaker[1];
            for (var l in xotakerArr) {
                if (xotakerArr[l].x == this.x && xotakerArr[l].y == this.y) {
                    xotakerArr.splice(l, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy >= 3650 && norVandak) {
            var norVishap = new Vishap(norVandak[0], norVandak[1]);
            vishapArr.push(norVishap);
            matrix[norVandak[1]][norVandak[0]] = 8;
        }
    }
    //---------------------------------------------------
    mahanal() {
        if (this.energy < 1) {
            matrix[this.y][this.x] = 0
            for (var i in vishapArr) {
                if (vishapArr[i].x == this.x && vishapArr[i].y == this.y) {
                    vishapArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
