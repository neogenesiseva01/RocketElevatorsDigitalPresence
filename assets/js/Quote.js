$( document ).ready(function() {
    
    console.log( "ready!" );

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
            $("#floors,#basements,#parking,#occupants,#numberofelevator").removeAttr("disabled");
            $("#floors").focus();
            $('form :input').val('');


        }
        if  ($("#hybridbuildingtype").is(":checked")) { 
            console.log("is hybrid");
            $("#floors,#basements,#parking,#businessdisctinc,#maxoccupants,#hours,#numberofelevator").removeAttr("disabled");
            $("#floors").focus();
            $('form :input').val('');


        }
        compute();




        
    });




    $("input[name='imput_client']").keyup(function () {
        console.log("change");
        
        
        
        if ($("#residancebuildingtype").is(":checked")) {
            console.log("is residential");
            var AppV = parseInt($("#apartments").val());
            var FloV = parseInt($("#floors").val());
            var not_used = parseInt($("#basements").val());
            console.log(AppV);
            console.log(not_used);
            var AvgDoor = (Math.ceil(AppV/FloV));
            console.log(FloV);
            var TotalDoor = (Math.ceil(AvgDoor/6));
            console.log(TotalDoor);
            var ElevByShaft = (Math.ceil(FloV/20));
            console.log(ElevByShaft);
            var TotalResElevator = ElevByShaft*TotalDoor;
            console.log(TotalResElevator);
            var NbsEleV = TotalResElevator;
            console.log(NbsEleV);

            $("#numberofelevator").val(NbsEleV)
        }

        if ($("#commercialbuildingtype").is(":checked")) {

            console.log ("is commercial 2");
            var EleV = parseInt ($("#elevator").val());
            console.log(EleV);
            var NbsEleV = EleV;
            $("#numberofelevator").val(NbsEleV)
        }
    
        if ($("#industrialbuildingtype").is(":checked")) {
            console.log ("is industrial or Hybrid"); 
            var FloV = parseInt($("#floors").val());
            console.log(FloV);
            var BasV = parseInt($("#basements").val());
            console.log(BasV);
            var OccV = parseInt($("#occupants").val());
            console.log(OccV);
            var FloTotal = (FloV+BasV);
            console.log(FloTotal);
            var TotalOccFloo = (FloTotal*OccV);
            console.log(TotalOccFloo);
            var TotalOcc = (Math.ceil(TotalOccFloo / 1000));
            console.log(TotalOcc);				
            var ColoneTotal = ( Math.ceil(FloTotal / 20));
            console.log(ColoneTotal);
            var EleByShaft = (Math.ceil(TotalOcc / ColoneTotal));
            console.log(EleByShaft);
            var NbsEleV = ColoneTotal*EleByShaft; 
            console.log(NbsEleV);
            $("#numberofelevator").val(NbsEleV) 
        }
         if ($("#hybridbuildingtype").is(":checked")) {
            console.log ("is industrial or Hybrid"); 
            var FloV = parseInt($("#floors").val());
            console.log(FloV);
            var BasV = parseInt($("#basements").val());
            console.log(BasV);
            var OccV = parseInt($("#occupants").val());
            console.log(OccV);
            var FloTotal = (FloV + BasV);
            console.log(FloTotal);
            var TotalOccFloo = (FloTotal * OccV);
            console.log(TotalOccFloo);
            var TotalOcc = (Math.ceil(TotalOccFloo / 1000));
            console.log(TotalOcc);				
            var ColoneTotal = ( Math.ceil(FloTotal / 20));
            console.log(ColoneTotal);
            var EleByShaft = (Math.ceil(TotalOcc / ColoneTotal));
            console.log(EleByShaft);
            var NbsEleV = ColoneTotal * EleByShaft; 
            console.log(NbsEleV);
            $("#numberofelevator").val(NbsEleV) 
        }
        compute();
    });

    $("input[name='services_price']").change(function () {
        console.log("service");
         compute();   
    });



});


function compute() {

    if ($("#PriceStandard").is(":checked")) {
        console.log("is residential");

            var NbsEleV = parseInt($("#numberofelevator").val());
            var ElevStd = (7565 * NbsEleV);
            console.log(ElevStd);
            var EleStdInt = (Math.ceil(((7565 * 1.1) - 7565) * NbsEleV));
            console.log(EleStdInt);
            var PriceStd = (Math.ceil(ElevStd + EleStdInt));
            console.log(PriceStd);

            $("#PriceUnit").val(ElevStd)
            $("#InstallationCost").val(EleStdInt)
            $("#TotalCost").val(PriceStd)
            };           
    

    if ($("#PricePremium").is(":checked")) {

        var NbsEleV = parseInt($("#numberofelevator").val());
        var ElePre = (12345 * NbsEleV);
        console.log(ElePre);
        var ElePreInt = (Math.ceil(((12345 * 1.13) - 12345) * NbsEleV));
        console.log(ElePreInt);
        var PricePre = (Math.ceil(ElePre + ElePreInt));
        console.log(PricePre);

        $("#PriceUnit").val(ElePre)
        $("#InstallationCost").val(ElePreInt)
        $("#TotalCost").val(PricePre)
    }


    if ($("#PriceExcelium").is(":checked")) {  

        var NbsEleV = parseInt($("#numberofelevator").val());
        var EleExel = (15400 * NbsEleV);
        console.log(EleExel);
        var EleExelInt = (Math.ceil(((15400 * 1.16) - 15400) * NbsEleV));
        console.log(EleExelInt);
        var PriceExel = (Math.ceil(EleExel + EleExelInt));
        console.log(PriceExel);

        $("#PriceUnit").val(EleExel)
        $("#InstallationCost").val(EleExelInt)
        $("#TotalCost").val(PriceExel)
        };


}




