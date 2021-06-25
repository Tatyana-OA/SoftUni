function solve() {
    class Balloon {
        constructor(color,gasWeight) {
            this.color = color,
            this.gasWeight = Number(gasWeight)
        }

    }
    class PartyBalloon extends Balloon {
        constructor(color,gasWeight, ribbonColor, ribbonlength) {
                super(color,gasWeight) 
                this._ribbon = {
                    color: ribbonColor,
                    length: Number(ribbonlength)
                }
        }
        get ribbon () {
            return this._ribbon
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeight, ribbonColor, ribbonlength,text) {
            super (color,gasWeight,ribbonColor,ribbonlength)
            this._text = text
        }
        get text() {
            return this._text
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let balloons = solve()
console.log(balloons.Balloon)
