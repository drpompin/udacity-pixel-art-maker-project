
function makeGrid() {
    
  const colorPicker = $('#colorPicker');
  const inputHeight = $('#inputHeight').val();
  const inputWidth = $('#inputWidth').val();
  const pixelCanvas = $('#pixelCanvas');
  
  pixelCanvas.children().remove();


  for (var x = 0; x < inputHeight; x++) {
      pixelCanvas.append('<tr></tr>');
  }
      
  const tableRow = $('tr');
  
  for (var y = 0; y < inputWidth; y++) {
      tableRow.append('<td></td>');
  } 
 
  pixelCanvas.find('td').click(function () {
      const color = colorPicker.val();
      $(this).attr('bgcolor', color);
  });
}

const sizePicker = $('#sizePicker');

sizePicker.submit(function(event) {
  event.preventDefault();
  makeGrid();
});
