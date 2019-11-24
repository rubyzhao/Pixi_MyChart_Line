let app = new PIXI.Application({
    width: 1000, // default: 800
    height: 200, // default: 600
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1, // default: 1
    //forceCanvas: true, // default is false, webGL
});

app.renderer.backgroundColor = 0xffffff;
// app.renderer.autoResize = true;
// app.renderer.resize(512, 512);
let line = new PIXI.Graphics();
line.lineStyle(1, 0x000000, 1); //width,color,alpha
// line.x = 0;
// line.y = 0;
line.moveTo(0, 0);

let loop = 2e3;
// 2e5: x become less
// 2e6: x even less
// 2e7: x even less
// 2e8: Aw, Snap

for (let i = 0; i < loop; i++) {
    let x = (800 * Math.PI * i) / loop;
    let y = 100 * Math.sin(i) + 100;
    line.lineTo(x, y);
}

app.stage.addChild(line);

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
