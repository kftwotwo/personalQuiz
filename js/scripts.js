$(document).ready(function(){
  $("form#ailments").submit(function(event){
    event.preventDefault();
    $("#body-responses").show();
       totalSick = [];
    $("input:checkbox[name=sick]:checked").each(function(){
      var sickMode = $(this).val();
          totalSick.push(sickMode);
       numSicks = totalSick.length;
       $('#body-responses').append(sickMode + "<br>");
    });

    $("#life-responses").show();
     totalLife = [];
    $("input:checkbox[name=life]:checked").each(function(){
      var lifeMode = $(this).val();
        totalLife.push(lifeMode);
       numLifes = totalLife.length;
       $('#life-responses').append(lifeMode + "<br>");
    });
    if (numSicks > 4 || numLifes >4 )
      alert("Please seek medical attention!");
      else {
        alert("Please drink more water!");
      }

    $('#ailments').hide();
  });
});
