const zoomInClickEvent = document.getElementById('zoom-out-btn').addEventListener('click', handleZoomOutFunction)
const zoomOutClickEvent = document.getElementById('zoom-in-btn').addEventListener('click', handleZoomInFunction)
var zoomLevel = 13;

function handleZoomInFunction() {
    console.log('Zoom In Triggered');
    zoomLevel++;
    updateBodyFontSize(zoomLevel);
}

function handleZoomOutFunction() {
    console.log('Zoom Out Triggered');
    zoomLevel--;
    updateBodyFontSize(zoomLevel);
}

function updateBodyFontSize(size) {
    if (size === 0) {
        toogleZoomOutBtnDisabledStatus(true)
    } else {
        toogleZoomOutBtnDisabledStatus(false);
        document.documentElement.style.fontSize = size + 'px'
    }
}
function toogleZoomOutBtnDisabledStatus(status) {
    document.getElementById('zoom-out-btn').disabled = status;
}