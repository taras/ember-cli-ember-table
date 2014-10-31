import Ember from 'ember';
import ColumnDefinition from 'ember-cli-ember-table/column-definition';

export default Ember.ArrayController.extend({

  columns: function() {
    var dateColumn, openColumn;
    dateColumn = ColumnDefinition.create({
      columnWidth: 400,
      isSortable: true,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('content.date');
      }
    });
    openColumn = ColumnDefinition.create({
      columnWidth: 200,
      isSortable: true,
      textAlign: 'text-align-left',
      headerCellName: 'ID',
      getCellContent: function(row) {
        return row.get('content.open');
      }
    });
    return [dateColumn, openColumn];
  }.property(),

  numRows: 30,
  testContent: function() {
    var numRows = this.get('numRows');
    var rows = [];
    for (var i = numRows - 1; i >= 0; i--) {
      var date;
      var obj;
      date = new Date();
      date.setDate(date.getDate() + i);
      obj = {
        date: date,
        open: Math.random() * 100 - 50,
        high: Math.random() * 100 - 50,
        low: Math.random() * 100 - 50,
        close: Math.random() * 100 - 50,
        volume: Math.random() * 1000000
      };
      rows.push(obj);
    }
    return rows;
  }.property('numRows')

});