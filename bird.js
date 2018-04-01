class Bird extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 30
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
            this.energy == 28;
        }
        if (n == 2) {
            this.energy == 31;
        }
        if (n == 3) {
            this.energy == 33;
        }
        if (n == 4) {
            this.energy == 30;
        }
    }
    //---------------------------------------------------  
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    //---------------------------------------------------
    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(2);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 10;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1];
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    this.energy++
                }
            }

        }
        else {
            this.sharjvel();

        }
    }
    //---------------------------------------------------  
    utel2() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 10;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in xotArr) {
                if (xotArr[i].x == this.x && xotArr[i].y == this.y) {
                    xotArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    utel3() {
        this.stanalNorKordinatner();
        var egg = this.yntrelVandak(9);
        var miHatEgg = random(egg);
        if (miHatEgg) {
            matrix[this.y][this.x] = 0;
            matrix[miHatEgg[1]][miHatEgg[0]] = 10;
            this.x = miHatEgg[0];
            this.y = miHatEgg[1];
            for (var i in eggArr) {
                if (eggArr[i].x == this.x && eggArr[i].y == this.y) {
                    eggArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    utel4() {
        this.stanalNorKordinatner();
        var egg = this.yntrelVandak(12);
        var miHatEgg = random(egg);
        if (miHatEgg) {
            matrix[this.y][this.x] = 0;
            matrix[miHatEgg[1]][miHatEgg[0]] = 0;
            this.x = miHatEgg[0];
            this.y = miHatEgg[1];
            for (var i in eggArr) {
                if (eggArr[i].x == this.x && eggArr[i].y == this.y) {
                    eggArr.splice(i, 1);
                    this.energy++
                }
            }
        }
    }
    //---------------------------------------------------  
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy > 45 && norVandak) {
            var norBird = new Bird(norVandak[0], norVandak[1]);
            birdArr.push(norBird);
            matrix[norVandak[1]][norVandak[0]] = 10;
            this.energy = 10
        }
    }
    //---------------------------------------------------
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 10;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------  
    mahanal() {
        if (this.energy < 2) {
            matrix[this.y][this.x] = 0
            for (var i in birdArr) {
                if (birdArr[i].x == this.x && birdArr[i].y == this.y) {
                    birdArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
