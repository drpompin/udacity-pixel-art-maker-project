const sizePicker = $('#sizePicker');
const colorPicker = $('#colorPicker');
const inputHeight = $('#inputHeight');
const inputWidth = $('#inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');

sizePicker.submit(function(e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    pixelCanvas.innerHTML = '';
    let height = inputHeight.val();
    let width = inputWidth.val();

    for (let i = 0; i < height; i++) {
        let row = pixelCanvas.insertRow(i);
        
        for (let x = 0; x < width; x++) {
            let column = row.insertCell(x);
            
            $(column).click(function () {
                const color = colorPicker.val();
                $(column).css('backgroundColor', color);
            })
        }
        
    }
}

