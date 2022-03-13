$(document).ready(function () {
    let table = $('#sheet');

    //generate board table
    for (let row = 0; row <= 3; row++) {
        let tr = $('<tr>');
        for (let col = 0; col <= 4; col++) {
            let data = $('<td>');
            data.text(randomNum(0,10));
            data.attr('id', '' + row+col);
            data.click(boardOnClick);
            tr.append(data);

            //Set Background color for headers
            if (row==0||col == 0) {
                data.css("background-color", "#d0d0d0");
            }
        }
        table.append(tr);
        
    }
    getCell('00').text('Student Number');
    getCell('01').text('Asmt 1');
    getCell('02').text('Asmt 2');
    getCell('03').text('Asmt 3');
    getCell('04').text('Asmt 4');

    getCell('10').text('100000000');
    getCell('20').text('100000001');
    getCell('30').text('100000002');
  

    //de-selects every cell in the spreadsheet
    function deselectAll() {
        for (var row = 1; row <= 3; row++) {
            for (var col = 1; col <= 4; col++) {
                getCell('' + row + col).css("background-color", "");
            }
        }
    }

    // selects every non-header cell in the specified row (indexed, starting with zero)
    function selectRow(rowIndex) {
        //clear previous selections
        deselectAll();
        //set color for header cell
        getCell('' + rowIndex + 0).css("background-color", "#d0d0d0");
        //set color for others cells
        for (col = 1; col <= 4; col++) {
            getCell('' + rowIndex + col).css("background-color", "#e0e0ff");
        }

    }

    //selects every non-header cell in the specified column (indexed, starting with zero)
    function selectColumn(colIndex) {
        //clear previous selections
        deselectAll();
        //set color for header cell
        getCell('' + 0 + colIndex).css("background-color", "#d0d0d0");
        //set color for others cells
        for (row = 1; row <= 4; row++) {
            getCell('' + row + colIndex).css("background-color", "#e0e0ff");
        }
    }


    //monitor user input on board
    function boardOnClick() {
        var selected_value = $(this).text();
        var selected_id = $(this).attr('id');
        var rowIndex = selected_id[0];
        var colIndex = selected_id[1];

        //check if first cell is selected
        if (rowIndex == 0 && colIndex == 0) {}
        else {
            //check if row header is selected
            if (colIndex == 0) {
                selectRow(rowIndex);
            }
            //check if col header is selected
            else if (rowIndex == 0) {
                selectColumn(colIndex);
            }
            
        }
        

    }

    function randomNum(min, max) {
        var random = Math.random() * (max - min + 1) + min
        var decimal = parseFloat(random).toFixed(2)
        return decimal;
    }

    //return cell by its position
    function getCell(id) {
        return $("[id=" + id + "]")
    }

})
