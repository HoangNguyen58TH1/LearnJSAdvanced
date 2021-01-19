class Hero {
    constructor(name, hp, damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    //get damage --> decrement hp.
    applyDamage(damage){
        this.hp -= damage;
    }

    //attack enemy
    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}


class RangedHero extends Hero {
    constructor(name, hp, damage, ranged){
        super(name, hp, damage);
        this.ranged = ranged;
    }
    // --> constructor của subclass có thay đổi (add param mới)
    // --> gọi super để  gọi lại constructor của baseclass và add this.param mới thôi.
    // nếu constructor k có thay đổi gì thì k cần làm gì cả mà nó sự inheritance luôn.

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