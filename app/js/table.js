function initTable() {
	 $('table').rsLiteGrid({
        caption: 'Table caption',

        cols: [{
          name: 'name',
          header: 'Name'
        }, {
          name: 'gender',
          header: 'Gender',
          markup: '<select><option value="male">Male</option><option value="female">Female</option></select>',
          defaultValue: 'male'
        }, {
          name: 'age',
          header: 'Age',
          markup: '<input type="number">'
        }, {
          name: 'rule',
          header: 'Rule'
        }, {
          // Delete button needs no name, since this columns does not need to be exported to Json
          markup: '<button title="delete this row">X</button>',
          tabStop: false
        }],

        // event fired after each row is appended to the table.
        // The right place to set the click event for the delete row button
        onAddRow: function (event, $lastNewRow) {
          $('button', $lastNewRow).click(function () {
            $('table').rsLiteGrid('delRow', $lastNewRow);
          });
        }

        // load table with 2 rows of data
      }).rsLiteGrid('setData', [
        { name: 'John', rule: 'Developer', age: 43 },
        { name: 'Maria', gender: 'female' }
      ]);

      // export data
      $('table + button').click(function () {
        console.log($('table').rsLiteGrid('getData'));
        alert('Open your browser console to see the Json data.');
      });
 }