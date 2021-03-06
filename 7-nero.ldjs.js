
let rect = 
    c.top("rectangle", { 
        size: c.xyp(c.fp(600), c.fp(300)),
        sizeunit: c.mp(0),
        resolutionw: c.ip(1280),
        resolutionh: c.ip(720),
    });

let rectedge = rect.c(c.top("edge"));

let noise =
    c.top("noise", {
        resolutionw: c.ip(1280), 
        resolutionh: c.ip(720),
        t: c.xyzp(c.fp(0), c.fp(0), c.seconds) ,
    })


let noisyrect =
    c.top("composite").run([
        rect,
        noise
    ], { 
        size: c.mp(0),
        operand: c.mp(27),
    })

let n = noisyrect;

return new Promise((resolve) => setTimeout(resolve, 10000))
    .then(() => [n.connect(c.top("out")).out()])