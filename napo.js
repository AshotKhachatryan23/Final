class Napo extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
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
        //---------------------------------------------------  
        if(n == 1){
            this.energy == 6;
        }
        if(n == 2){
            this.energy == 4;
        }
        if(n == 3){
            this.energy == 4;
        }
        if(n == 4){
            this.energy == 5;
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
        var xot = this.yntrelVandak(5);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 4;
            matrix[miHatXot[1]][miHatXot[0]] = 6;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in xotArr) {
                if (xotArr[i].x == this.x && xotArr[i].y == this.y) {
                    xotArr.splice(i, 1);
                    this.energy++
                }
            }

        }
        else {
            this.sharjvel();

        }
    }
    //---------------------------------------------------
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(4);
        var norVandak = random(datarkVandakner);
        this.energy--
        if (norVandak) {

            matrix[this.y][this.x] = 4;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------
    bazmanal() {
        var norVandak = random(this.yntrelVandak(5));
        if (this.energy > 8 && norVandak) {
            var norNapo = new Napo(norVandak[0], norVandak[1]);
            napoArr.push(norNapo);
            matrix[norVandak[1]][norVandak[0]] = 6;
        }
    }
    //---------------------------------------------------
    mahanal() {
        if (this.energy <= 1) {
            matrix[this.y][this.x] = 4
            for (var i in napoArr) {
                if (napoArr[i].x == this.x && napoArr[i].y == this.y) {
                    napoArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}
