$(function () {
    $("input[name='buildingtype']").click(function () {
        console.log("click");
        
        //MEttre toute disabled
        $("#apartments,#floors,#basements,#parking,#elevator,#businessdisctinc,#occupants,#maxoccupants,#hours,#numberofelevator").attr("disabled", "disabled");
        
        if  ($("#residancebuildingtype").is(":checked")) {
            console.log("is residential");
            $("#apartments,#floors,#basements,#numberofelevator").removeAttr("disabled");
            $("#apartments").focus();
            $('form :input').val('');
        }

        if  ($("#commercialbuildingtype").is(":checked")) { 
            console.log("is commercial");
            $("#floors,#basements,#parking,#elevator,#businessdisctinc,#numberofelevator").removeAttr("disabled");
            $("#floors").focus();
            $('form :input').val('');
        }

        if  ($("#industrialbuildingtype").is(":checked")) { 
            console.log("is industrial");
            $("#floors,#basements,#parking,#occupants,#maxoccupants,#numberofelevator").removeAttr("disabled");
            $("#floors").focus();
            $('form :input').val('');

        }
        if  ($("#hybridbuildingtype").is(":checked")) { 
            console.log("is hybrid");
            $("#floors,#basements,#parking,#businessdisctinc,#maxoccupants,#hours,#numberofelevator").removeAttr("disabled");
            $("#floors").focus();
            $('form :input').val('');

        }
     
        
    })
});

