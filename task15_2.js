// 48:48
class Hero {
    constructor(name, hp, damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage){
        this.hp -= damage;
    }

    attack(enemy){
        enemy.applyDamage(this.damage)
    }
}

class RangedHero extends Hero{
    constructor(name, hp, damage, ranged){
        super(name, hp, damage);
        this.ranged = ranged;
    }

    attack(enemy){
        super.attack(enemy);
        this.hp += this.damage;
    }
}


const A = new RangedHero('A', 100, 20);
const B = new Hero('B', 100, 30);

console.log({A, B});
A.attack(B);
console.log({A, B});