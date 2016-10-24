$(document).ready(function(){
  $("form#ailments").submit(function(event){
    event.preventDefault();
    $("#body-responses").show();
    $("input:checkbox[name=sick]:checked").each(function(){
      var sickMode = $(this).val();
      $('#body-responses').append(sickMode + "<br>");
    });
    $("#life-responses").show();
    $("input:checkbox[name=life]:checked").each(function(){
      var lifeMode = $(this).val();
      $('#life-responses').append(lifeMode + "<br>");
    });
    $('#ailments').hide();
  });
});
