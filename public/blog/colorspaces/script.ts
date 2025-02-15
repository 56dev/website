

let colorpicker = document.getElementById("color-picker");
colorField(colorpicker, 100, 100);

let debug = document.getElementById("debug");
debug!.innerHTML = "Started";

function colorField(canvas, width, height){
    let ctx = canvas.getContext('2d'), idata = ctx.getImageData(0,0,width, height),
    data = idata.data;
    let w = width - 1, h = height - 1

    for (let x=0; x < width; ++x){

        for(let y = 0; y < height; ++y){

            let rgba = [-1, -1, -1, 1];
            let o = (width*y+x) * 4;
            for(let i = 0; i < 4; ++i) data[o + i] = rgba[i]*255;

        }

    }

    ctx.putImageData(idata,0,0);
}




function piecewiseGaussian(x, u, t1, t2){

    if(x < u){
        return Math.exp((-(t1**2) * (x - u)**2) / 2)
    }else{
        return Math.exp((-(t2**2) * (x - u)**2) / 2)
    }

}

function colorMatchX(wl){
    return 1.056 * piecewiseGaussian(wl, 599.8, 0.0264, 0.0323) +
    0.362 * piecewiseGaussian(wl, 442.0, 0.0624, 0.0374) - 
    0.065 * piecewiseGaussian(wl, 501.1, 0.0490, 0.0382)

}

function colorMatchY(wl){
    return 0.821 * piecewiseGaussian(wl, 568.8, 0.0213, 0.0247) +
    0.286 * piecewiseGaussian(wl, 530.9, 0.0613, 0.0322)

}

function colorMatchZ(wl){
    return 1.217 * piecewiseGaussian(wl, 437.0, 0.0845, 0.0278) +
    0.681 * piecewiseGaussian(wl, 459.0, 0.0385, 0.0725) 

}

