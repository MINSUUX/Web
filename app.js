import { 
    Wave 
} from "./wave";

class App {
    constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.wave = new Wave(); // 아까 지정해줬던 wave.js 를 넣어준다.

    window.addEventListener('resize', this.resize.bind(this),false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
}

resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2); // 레티나 디스플레이에서도 잘 보일수 있게 캔버스를 더블사이징

    this.wave.resize(this.stageWidth, this.stageHeight);
}

animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
}
}

window.onload = () => {
    new App();
}

// this란 메서드를 호출한 객체가 저장되어 있는 속성이다.