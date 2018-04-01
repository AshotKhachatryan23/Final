class Gishatich extends KendaniEak {
    constructor(x, y, index){
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
                   if (n == 1) {
            this.energy == 5;
        }
        if (n == 2) {
            this.energy == 8;
        }
        if (n == 3) {
            this.energy == 10;
        }
        if (n == 4) {
            this.energy == 7;
        }
   }
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
//---------------------------------------------------
sharjvel1() {

    var datarkVandakner = this.yntrelVandak(1);
    var norVandak = random(datarkVandakner);
    this.energy--
    if (norVandak) {

        matrix[this.y][this.x] = 1;
        matrix[norVandak[1]][norVandak[0]] = 3;
        this.x = norVandak[0];
        this.y = norVandak[1];
    }
}
//---------------------------------------------------  
    sharjvel2() {

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    //---------------------------------------------------
    utel2() {
        this.stanalNorKordinatner(0);
        var xotaker = this.yntrelVandak(2);
        var miHatxotaker = random(xotaker);
        if (miHatxotaker) {
            matrix[this.y][this.x] = 0;
            matrix[miHatxotaker[1]][miHatxotaker[0]] = 3;
            this.x = miHatxotaker[0];
            this.y = miHatxotaker[1];
            for (var l in xotakerArr) {
                if (xotakerArr[l].x == this.x && xotakerArr[l].y == this.y) {
                    xotakerArr.splice(l, 1);
                    this.energy++
                }
            }
        }
        else {
            this.sharjvel2();
        }
    }
    //---------------------------------------------------
    bazmanal3() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy > 15 && norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    //---------------------------------------------------
    mahanal2() {
        if (this.energy < 1) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}