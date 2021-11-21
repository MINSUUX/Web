import {
    Point
} from './point.js'

export class Wave {
    constructor() {

    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.init(); // 센터 엑스와 센터 와이가 정해진 다음에,(resize 이벤트가 일어난 다음에,)
    }

    init() {
        this.point = new Point(
            this.centerX,
            this.centerY
            
            //init 함수를 실행시켜서 point 를 생성 해 준다.
    );
}

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';
        
        this.point.update();

        ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        ctx.fill();
    }
}