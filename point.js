export class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150; // 얼만큼 움직일것인가
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    } // update 함수를 부르면 이제 아래위로 움직인다.
}