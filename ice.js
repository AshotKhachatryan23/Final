class Ice extends KendaniEak {
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
   }
   //---------------------------------------------------  
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
    //---------------------------------------------------
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 40 && norVandak) {
            var norIce = new Ice(norVandak[0], norVandak[1]);
            iceArr.push(norIce);
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.multiply = 0;
        }
    }
}
