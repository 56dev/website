var colorpicker = document.getElementById("color-picker");
colorField(colorpicker, 100, 100);
var debug = document.getElementById("debug");
debug.innerHTML = "Started";
function colorField(canvas, width, height) {
    var ctx = canvas.getContext('2d'), idata = ctx.getImageData(0, 0, width, height), data = idata.data;
    var w = width - 1, h = height - 1;
    for (var x = 0; x < width; ++x) {
        for (var y = 0; y < height; ++y) {
            var rgba = [-1, -1, -1, 1];
            var o = (width * y + x) * 4;
            for (var i = 0; i < 4; ++i)
                data[o + i] = rgba[i] * 255;
        }
    }
    ctx.putImageData(idata, 0, 0);
}
