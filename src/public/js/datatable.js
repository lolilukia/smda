//Add dataTable Functions
var functions = $('<div class="btn-group"><button class="btn btn-default btn-xs" type="button">Actions</button><button data-toggle="dropdown" class="btn btn-xs btn-primary dropdown-toggle" type="button"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button><ul role="menu" class="dropdown-menu"><li><a href="#">Edit</a></li><li><a href="#">Copy</a></li><li><a href="#">Details</a></li><li class="divider"></li><li><a href="#">Remove</a></li></ul></div>');

$(document).ready(function(){
  //initialize the javascript
  //Basic Instance
  $("#datatable").dataTable();

  //Search input style
  $('.dataTables_filter input').addClass('form-control').attr('placeholder','Search');
  $('.dataTables_length select').addClass('form-control');

  /* Formating function for row details */
  function fnFormatDetails ( oTable, nTr )
  {
    var aData = oTable.fnGetData( nTr );
    var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    sOut += '<tr><td>Rendering engine:</td><td>'+aData[1]+' '+aData[4]+'</td></tr>';
    sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
    sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
    sOut += '</table>';

    return sOut;
  }



  /* Init DataTables */
  var aTable = $('#datatable3').dataTable();

  /* Apply the jEditable handlers to the table */
  aTable.$('td').editable( 'js/jquery.datatables/examples/examples_support/editable_ajax.php', {
    "callback": function( sValue, y ) {
      var aPos = aTable.fnGetPosition( this );
      aTable.fnUpdate( sValue, aPos[0], aPos[1] );
    },
    "submitdata": function ( value, settings ) {
      return {
        "row_id": this.parentNode.getAttribute('id'),
        "column": aTable.fnGetPosition( this )[2]
      };
    },
    "height": "14px",
  });
  /* Init DataTables */
  var bTable = $('#datatable4').dataTable();

  /* Apply the jEditable handlers to the table */
  bTable.$('td').editable( 'js/jquery.datatables/examples/examples_support/editable_ajax.php', {
    "callback": function( sValue, y ) {
      var aPos = aTable.fnGetPosition( this );
      aTable.fnUpdate( sValue, aPos[0], aPos[1] );
    },
    "submitdata": function ( value, settings ) {
      return {
        "row_id": this.parentNode.getAttribute('id'),
        "column": aTable.fnGetPosition( this )[2]
      };
    },
    "height": "14px",
  });
});
