import { Module } from '../core/module';

export default class BackgroundModule extends Module {
    #gradient
    #step
    #color
    #background
    #canvas
    #ctx
    constructor(type, text){
        super(type, text);
        this.#gradient;
        this.#step;
        this.#background;

        this.#canvas = document.createElement('canvas');
        this.#canvas.id = 'canvas';
        this.#canvas.style.height = '100%';
        this.#canvas.style.width = '100%';
        document.body.append(this.#canvas);
        this.#ctx = this.#canvas.getContext("2d");
    }

    #randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

    #getRandomGradientColor = () => {
        const left = this.#randomHsl(),
            right =  this.#randomHsl(),
            angle = Math.round( Math.random() * 360 );
        this.#background = [left, right];

        this.#gradient = "linear-gradient(" + angle + "deg, " + left + ", " + right + ")";
    }

    #getUrl = async () => {
        try{
            const {url} = await fetch('https://source.unsplash.com/random/1600x900');
            return await url;
        } catch(e){
            console.log(e);
        }
    }

    #drawCircles = () => {
        requestAnimationFrame(this.#drawCircles);
        let a=0.2,
            t=0,
            aStep = Math.PI * 0.01,
            cx = window.innerWidth/2,
            cy = window.innerHeight/2,
            x, y, px, py,
            radius=0,
            totalAngle =  Math.PI*60,
            time = performance.now()/360;
        
        a = Math.sin(2-time * 0.0001);
        t = Math.sin(2+time * this.#step);
        aStep = Math.PI * (0.375 + Math.sin(time * 0.001) * 0.125);
        
        this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        for(let theta = 0; theta < totalAngle; theta+=aStep){
            radius = (t + Math.pow(2, Math.cos(theta * a))) * 200;
            px = x;
            py = y;
            x = cx + Math.cos(theta) * radius;
            y = cy + Math.sin(theta) * radius;
            
            if(theta > 0){
                this.#ctx.beginPath();
                this.#ctx.moveTo(x, y+20);
                this.#ctx.lineTo(px, py+20);

                this.#ctx.strokeStyle = theta.toFixed()%2 ? this.#background[0] : this.#background[1];
                this.#ctx.lineWidth = .8
                this.#ctx.stroke();
                this.#ctx.closePath();
            }
        }
    }

    #circlesBackground = () => {
        this.#canvas.width = window.innerWidth;
        this.#canvas.height = window.innerHeight;
        this.#ctx.fillStyle = this.#background;
        this.#step = Math.random() * (0.1 - 0.003) + 0.003;
        this.#drawCircles();
    }

    trigger = () => {
        const menu = document.querySelector('#menu');
        menu.innerHTML = super.toHTML();
        this.#getRandomGradientColor();

        this.#circlesBackground();
        document.body.style.background = this.#gradient;

        // menu.addEventListener('click', async (e) => {
        //     console.log('click')
        //     // const url = await this.#getUrl();
        //     // change to img
        //     // document.body.style.backgroundImage = `url(${url})`;
        //     // document.body.style.backgroundSize = 'cover';
        //     // document.body.style.backgroundRepeat = 'no-repeat';
        //     //change to spirogram
        //     //change to gradient
        // })
    }    
}