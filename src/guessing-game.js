class GuessingGame {
    constructor() {
        // this.number = number;
        this.mid;
      }
    
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
    
      guess() {
          return this.mid = Math.ceil((this.max + this.min) / 2);
      }
    
      lower() {
        return this.max = this.mid;
      }
    
      greater() {
        return this.min = this.mid;
      }
}

module.exports = GuessingGame;
