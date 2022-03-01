// JS Objects Review
// const color = 'teal';

// const obj = {};
// obj.color = '#3723FF';
// obj[color] = '#3723FF';
// obj[1 + 4 - 2 * 8] = '#3723FF';

// for (let [
// 	k,
// 	v
// ] of Object.entries(obj)) {
// 	console.log(k, v);
// }

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// const myMath = { add, mult, square, power };

// const myMath = {
// 	add: function(x, y) {
// 		return x + y;
// 	},
// 	mult: (x, y) => {
// 		return x * y;
// 	}
// };

// const myMath = {
// 	add(x, y) {
// 		return x + y;
// 	},
// 	square(x) {
// 		return x * x;
// 	}
// };

// function getHypotenuse(a, b) {
// 	return Math.sqrt(a ** 2 + b ** 2);
// }
// function getArea(a, b) {
// 	return a * b / 2;
// }

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);
// side1 = 9;
// side2 = 12;
// getHypotenuse(9,12);

// const rightTriangle = {
// 	a: 9,
// 	b: 12,
// 	printThis() {
// 		console.log(this);
// 	},
// 	getArea() {
// 		return this.a * this.b / 2;
// 	},
// 	getHypotenuse() {
// 		this.printThis();
// 		return Math.sqrt(this.a ** 2 + this.b ** 2);
// 	}
// };

// function Triangle(a, b) {
// 	this.a = a;
// 	this.b = b;
// }

// Triangle.prototype.getArea = function() {
// 	return this.a * this.b / 2;
// };
// Triangle.prototype.getHypotenuse = function() {
// 	return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

class Triangle {
	constructor(a, b, c) {
		for (let side of [
			a,
			b,
			c
		]) {
			if (!Number.isFinite(side) || side <= 0) {
				throw new Error('Sides must be positive numbers');
			}
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	greet() {
		console.log('Hello from Triangle!');
	}
	display() {
		return `Triangle with sides of ${this.a}, ${this.b} and ${this.c}`;
	}
	getArea() {
		const { a, b, c } = this;
		const s = (a + b + c) / 2;
		return Math.sqrt(s * (s - a) * (s - b) * (s - c));
	}
	isBig() {
		return this.getArea() > 50;
	}
}

class RightTriangle extends Triangle {
	constructor(a, b, c) {
		if (a * a + b * b !== c * c) {
			throw new Error('Invalid C side for right trianlge');
		}
		super(a, b, c);
		this.hypot = c;
	}
	isRightTriangle() {
		return true;
	}
	display() {
		return 'Right ' + super.display();
	}
}
