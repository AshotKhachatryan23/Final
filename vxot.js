class Vxot extends KendaniEak {
    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply = 25 && this.direction) {
            var newVirus = new Virus(this.direction[0], this.direction[1], this.index);
            newVirus.parentX = this.x;
            newVirus.parentY = this.y;
            vxotArr.push(newVirus);

            matrix[this.direction[1]][this.direction[0]] = this.index;
            
            this.multiply = 0;
        }
    }
}