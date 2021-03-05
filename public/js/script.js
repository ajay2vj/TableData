$(document).ready(function(){
  $.getJSON("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json" , function(data){
    var employee_data = '';
    $.each(data, function(key, value){
      employee_data += '<tr>';
      employee_data += '<td>'+value.firstName+'</td>';
      employee_data += '<td>'+value.lastName+'</td>';
      employee_data += '<td>'+value.location+'</td>';
      employee_data += '<td>'+value.date+'</td>';
      employee_data += '<td>'+value.salary+'</td>';
      employee_data += '</tr>';
    });
    $('#employee_table').append(employee_data);
  });

  $.getJSON("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json" , function(data){
    var employee_data_medium = '';
    $.each(data, function(key, value){
      employee_data_medium += '<tr>';
      employee_data_medium += '<td>'+value.firstName+'</td>';
      employee_data_medium += '<td>'+value.lastName+'</td>';
      employee_data_medium += '<td>'+value.location+'</td>';
      employee_data_medium += '<td>'+value.date+'</td>';
      employee_data_medium += '<td>'+value.salary+'</td>';
      employee_data_medium += '</tr>';
    });
    $('#employee_table_medium').append(employee_data_medium);
  });

  $.getJSON("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json" , function(data){
    var employee_data_large = '';
    $.each(data, function(key, value){
      employee_data_large += '<tr>';
      employee_data_large += '<td>'+value.firstName+'</td>';
      employee_data_large += '<td>'+value.lastName+'</td>';
      employee_data_large += '<td>'+value.location+'</td>';
      employee_data_large += '<td>'+value.date+'</td>';
      employee_data_large += '<td>'+value.salary+'</td>';
      employee_data_large += '</tr>';
    });
    $('#employee_table_large').append(employee_data_large);
  });
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function() {
  $('#').paging({limit:5});
  $('#employee_table_medium').paging({

    limit: 5,
    rowDisplayStyle: 'block',
    activePage: 0,
    rows: []
    
    });
});

