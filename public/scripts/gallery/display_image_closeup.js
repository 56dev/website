function displayCloseupImage(img_link)
{

    document.getElementById("image-closeup-container").style.display = "block";
    document.getElementById("image-closeup").src = img_link;
    const img = new Image();
    img.src = img_link;
    img.onload = function()
    {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        document.getElementById("resolution").innerHTML = `resolution: ${width}px x ${height}px`;
    }

}


function closeCloseupImage()
{
    document.getElementById("image-closeup-container").style.display = "none";
}

window.displayCloseupImage = displayCloseupImage;
window.closeCloseupImage = closeCloseupImage;