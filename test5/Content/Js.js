$(document).ready(function () {

    $("#RegSub").click(function() {
    //$(document).on("click", "#sub", function () {

        var mail = $("#email").val();
        var corp = $("#corp").val();
        var pass = $("#pwd").val();
        var pass1 = $("#pwd1").val();



        //if(mail == "" || corp == "" || pass == "" || pass1 == "") alert("სავალდებულოა რომ ყველა ველი იყოს შევსებული!!!")
        //if (pass != pass1) alert("პაროლები არ ემთხვევა!!!");

        //$.ajax({
        //    url: '/Reg/Reg',
        //    type: 'POST',
        //    data: { "Mail": mail, "comp": corp, "pass": pass },
        //    success: function (ret) {
        //        if (ret == "ok") {

        //            //$("#email").val("");
        //            //$("#corp").val("");
        //            //$("#pwd").val("");
        //            //$("#pwd1").val("");
        //            window.open("http://localhost:49798/Home/Index", "_self");
        //        }
        //        else
        //            alert("გაასხა");

        //    }

        //});

    });


    ///////gadmotanili dzvelidan==================================================================================================


    
    // clasis minicheba------------------------------------------------
    $('table tr').each(function () {
        var done = $.trim($(this).find('td:nth-child(8)').html());
        $(this).addClass("fdone" + done);
        $(this).find("td:first").addClass("done" + done);
    });


    //gashladaxurva---------------------------------------------------
    $('table tr span').on('click', function () {

        $(this).toggleClass("glyphicon-chevron-down");
        var done = $.trim($(this).closest('tr').find('td:nth-child(8)').html());
        var klasi = $.trim($(this).closest('tr').attr('class'));
        var done2 = $.trim($(this).closest('tr').next().find('td:nth-child(8)').html());
        var klasi2 = $.trim($(this).closest('tr').next().attr('class'));

        if (done < done2) {
            $(this).closest('tr').nextUntil('tr.' + klasi).each(function () {
                var klasi3 = $.trim($(this).closest('tr').attr('class'));
                var done3 = $.trim($(this).closest('tr').find('td:nth-child(8)').html());
                if (done3 < done)
                    return false;
                if (klasi3.search('hide') > 0)
                    return;

                $(this).addClass("hide" + done);

            });
        }

        if (done < done2 && klasi2.search('hide') > 0) {
            $(this).closest('tr').nextUntil("tr." + klasi).each(function () {
                var done3 = $.trim($(this).closest('tr').find('td:nth-child(8)').html());
                if (done3 <= done)
                    return false;

                $(this).closest('tr').removeClass('hide' + done);

            });

        }

    });


    //gaqrobis gilaki---------------------------------------------------------------
    $(".glyphicon-remove").click(function () {

        $(".pop_back").fadeOut();
        $(".pop_box").fadeOut();
        $(".edit").fadeOut();
        $(".add-child").fadeOut();
        $(".AddForm").fadeOut();
        $(".BugGatAdd").fadeOut();
        $(".test1").fadeOut();
        $(".AddCForm").fadeOut();
        $(".RedForm").fadeOut();

    })


    //fesvis damateba------------------------------------------------------------------
    $(".mybAdd").click(function () {

        $(".pop_back").fadeIn();
        $(".AddForm").fadeIn();


        $("#AddBut").click(function () {
            var saxeoba = $('#saxeoba').val();
            var angarishi = $('#angarishi').val();
            var tipi = $('#tipi').val();
            var dasaxeleba = $('#dasaxeleba').val();
            var findeb = $('#findeb').val();
            var finkred = $('#finkred').val();
            var finval = $('#finval').val();
            var gadaf = $("#gadaf").is(":checked");
           

            if (angarishi == "" || dasaxeleba == "" || findeb == "" || finkred == "" || finval == "")
                alert("შეავსე ველები");
            else
                $.ajax({
                    url: '/Home/Main',
                    type: 'POST',
                    data: { "angarishi": angarishi, "dasaxeleba": dasaxeleba, "findeb": findeb, "finkred": finkred, "finval": finval, "tipi": tipi, "gadaf": gadaf },
                    success: function (ret) {
                        if (ret == "a") {
                            //alert("შევიტანე");
                            $(".glyphicon-remove").trigger('click');
                            //$("table").append("aaaaaaa");
                        }
                        else
                            alert("გაასხა");
                    }

                })

        });
    });




    //daseleqteba-------------------------------------------------------------------------------


    var domel;
    var AngNom;
    var AngTip;
    var AngDas;
    var Gadaf;
    var Debeti;
    var krediti;
    var Valuta;
    var Done;
    var Pid;
    var Id;


    $(document).on('click', 'table tr', function () {
        if ($(this).attr("id") === "selected")
            $(this).attr("id", null);
        else
            $(this).attr("id", "selected").siblings().attr("id", null);

        value = $(this).find('td:nth-child(6)').html();
        domel = $(this).closest('tr');
        AngNom = $.trim($(this).find('td:first span.nnn').html());
        AngTip = $.trim($(this).find('td:nth-child(2)').html());
        AngDas = $.trim($(this).find('td:nth-child(3)').html());
        Gadaf = $.trim($(this).find('td:nth-child(4)').html());
        Debeti = $.trim($(this).find('td:nth-child(5)').html());
        krediti = $.trim($(this).find('td:nth-child(6)').html());
        Valuta = $.trim($(this).find('td:nth-child(7)').html());
        Done = $.trim($(this).find('td:nth-child(8)').html());
        Pid = $.trim($(this).find('td:nth-child(9)').html());
        Id = $.trim($(this).find('td:nth-child(10)').html());


    });



    //editis fanjris gamotana------------------------------------------------------------------------
    $(document).on('dblclick', 'table tr', function () {
        
        $(".pop_back").fadeIn();
        $(".RedForm").fadeIn();
       
        $('#Rangarishi').attr('value', AngNom); ///infutis formashi informaciis shetana 
        $('#Rtipi').val(AngTip);
        $('#Rdasaxeleba').attr('value', AngDas);
        if (Gadaf == "True") { $('#Rgadaf').prop('checked', 1); }
        else { $('#Rgadaf').prop('checked', 0); }
        $('#Rfindeb').attr('value', Debeti);
        $('#Rfinkred').attr('value', krediti);
        $('#Rfinval').val(Valuta);

    });


    $(document).on('click', '#RedBut', function () {
        
        var Rsaxeoba = $('#Rsaxeoba').val();
        var Rangarishi = $('#Rangarishi').val();
        var Rtipi = $('#Rtipi').val();
        var Rdasaxeleba = $('#Rdasaxeleba').val();
        var Rfindeb = $('#Rfindeb').val();
        var Rfinkred = $('#Rfinkred').val();
        var Rfinval = $('#Rfinval').val();
        var Rgadaf = $("#Rgadaf").is(":checked");
        var Rid = Id;
        var Rdone = Done;

        $.ajax({
            url: '/Home/Red',
            type: 'POST',
            data: { "Rangarishi": Rangarishi, "Rdasaxeleba": Rdasaxeleba, "Rfindeb": Rfindeb, "Rfinkred": Rfinkred, "Rfinval": Rfinval, "Rtipi": Rtipi, "Rgadaf": Rgadaf, "RId": Rid, "RDone": Rdone },
            success: function (ret) {
                if (ret == "ok") {
                    $(".glyphicon-remove").trigger('click');
                    //if (domel.search('glyphicon-chevron-right') > 0) {
                    //    domel.html('<td><span class="glyphicon glyphicon-chevron-right"></span><span class="nnn">' + Rangarishi + '</span></td><td>' + Rtipi + '</td><td>' + Rdasaxeleba + '</td><td>' + Rgadaf + '</td><td>' + Rfindeb + '</td><td>' + Rfinkred + '</td><td>' + Rfinval + '</td><td class="hide">' + Done + '</td><td class="hide">' + Pid + '</td><td class="hide">' + Id + '</td>');
                    //} else
                    domel.html('<td><span class="nnn">' + Rangarishi + '</span></td><td>' + Rtipi + '</td><td>' + Rdasaxeleba + '</td><td>' + Rgadaf + '</td><td>' + Rfindeb + '</td><td>' + Rfinkred + '</td><td>' + Rfinval + '</td><td class="hide">' + Done + '</td><td class="hide">' + Pid + '</td><td class="hide">' + Id + '</td>');

                    $('#Rsaxeoba').val('');
                    $('#Rangarishi').val('');
                    $('#Rtipi').val('');
                    $('#Rdasaxeleba').val('');
                    $('#Rfindeb').val('');
                    $('#Rfinkred').val('');
                    $('#Rfinval').val('');
                }
                else alert("problemaa");
            }
        });
    });


    $(document).on('click', '#mybED', function () {
        $(".pop_back").fadeIn();
        $(".RedForm").fadeIn();
        //$('#Emarka').attr('value', marka); ///infutis formashi informaciis shetana 
    });

    //washla-------------------------------------------------------------------------------------
    $(document).on('click', '#mybDel', function () {
        $.ajax({
            url: '/Home/Del',
            type: 'POST',
            data: { "Id": Id },
            success: function (ret) {
                if (ret == "ok") {
                    $(domel).addClass("hide");
                    //$(".glyphicon-remove").trigger('click');                      
                }else if (ret == "HASC") {
                    alert("მშობლის წაშლამდე საჭიროა წაიშალოს შვილი!!!");
                }
                //else
                //    alert("გაასხა");
            }
        })
    });  

    //redaqtirebaaaa------------------------------------------------------
    //$("#editt").click(function () {
    //    alert("ddd");
    //    var marka = $.trim($(this).find('td:first span.nnn').html());
    //    var modeli = $.trim($(this).find('td:nth-child(2)').html());
    //    var fasi = $.trim($(this).find('td:nth-child(3)').html());
                
    //    if (marka == "" || modeli == "" || fasi == "")
    //        alert("oeeee");
    //    else {
    //        $.ajax({
    //            url: '/Home/Edit',
    //            type: 'POST',
    //            data: { "Id": id, "marka": marka, "Modeli": modeli, "Fasi": fasi },
    //            success: function (ret) {
    //                if (ret == "ho") {
    //                    //alert("შევიტანე");
    //                    $(".glyphicon-remove").trigger('click');
    //                    //$(this).hide();
    //                }
    //                else
    //                    alert("გაასხა");
    //            }

    //        })
    //    }
    //});



    //shvilis damateba-------------------------------------------------------------

    ///$('.list').append('<tr><td style="visibility:hidden;">' + A + '</td><td>' + k + '</td><td>' + ot + '</td><td>' + s + '</td><td>' + f);

    $(document).on("click", "#mybCAdd", function () {

        $(".pop_back").fadeIn();
        $(".AddCForm").fadeIn();
    });
       
        $(document).on("click", "#CAddBut", function () {


            var saxeoba = $('#Csaxeoba').val();
            var angarishi = $('#Cangarishi').val();
            var tipi = $('#Ctipi').val();
            var dasaxeleba = $('#Cdasaxeleba').val();
            var findeb = $('#Cfindeb').val();
            var finkred = $('#Cfinkred').val();
            var finval = $('#Cfinval').val();
            var gadaf = $("#Cgadaf").is(":checked");
            var Pid = Id;
            var done = Done;

                $.ajax({
                    url: '/Home/AddChild',
                    type: 'POST',
                    data: { "angarishi": angarishi, "dasaxeleba": dasaxeleba, "findeb": findeb, "finkred": finkred, "finval": finval, "tipi": tipi, "gadaf": gadaf, "PId": Pid, "Done": done },
                    success: function (ret) {
                        if (ret == "ok") {
                            //alert("შევიტანე");
                            $(".glyphicon-remove").trigger('click');
                            //$("table").append("aaaaaaa");
                        } if (ret == "metia") {
                            alert("მშობელ ანგარიშზე არის თანხა!!!!");
                        }
                        else
                            alert("გაასხა");
                    }

                })
       
    });



    /////////////////// Bugaltruli gatarebaaaaa------------------------------------------

    $(document).on("click", "#BugGatADD", function () {

        $(".pop_back").fadeIn();
        $(".BugGatAdd").fadeIn();

    });
        

    var DebAngId;
    var DebAngDas;
    var KerdAngId;
    var KredAngDas;
   


    $(document).on("click", "#DebList", function () {
        $(".DebForm").fadeIn();
    });

    $(document).on("click", "#KredList", function () {
        $(".KredForm").fadeIn();
    });


    $(document).on("click", ".XX", function () {
        $(".DebForm").fadeOut();
        $(".KredForm").fadeOut();
    });

    $(document).on("dblclick", ".DebList tr", function () {
        DebAngId = $.trim($(this).find('td:first').html());
        DebAngDas = $.trim($(this).find('td:nth-child(6)').html());
        $(".DebForm").fadeOut();
        $("#DebAng").val(DebAngDas);
    });


    $(document).on("dblclick", ".KredList tr", function () {
        KredAngId = $.trim($(this).find('td:first').html());
        KredAngDas = $.trim($(this).find('td:nth-child(6)').html());
        $(".KredForm").fadeOut();
        $("#KredAng").val(KredAngDas);
    });




    $(document).on("click", "#AddBut", function () {
        if (DebAngId == KredAngId) {
            alert("ანგარიშები ემთხვევა!!!");
        }
        else{
        var BugDokNom = $("#BugDokNom").val();
        var BugGatDate = $("#BugGatDate").val();
        var Proeqti = $("#Proeqti").val();
        var Memoriali = $("#Memoriali").val();
        var saxeoba = $("#saxeoba").val();
        var Safudzveli = $("#Safudzveli").val();
        var Analizuri = $("#Analizuri").val();
        var AnalizuriCheck = $("#AnalizuriCheck").is(":checked");
        var DadastCheck = $("#DadastCheck").is(":checked");
        var GadadebuliCheck = $("#GadadebuliCheck").is(":checked");

        $.ajax({
            url: '/Home/BugGat',
            type: 'POST',
            data: {
                "BugDokNom": BugDokNom, "BugGatDate": BugGatDate, "Proeqti": Proeqti, "Memoriali": Memoriali, "saxeoba": saxeoba,
                "Safudzveli": Safudzveli, "AnalizuriCheck": AnalizuriCheck, "DadastCheck": DadastCheck, "GadadebuliCheck": GadadebuliCheck,
                "DebAngId": DebAngId, "KerdAngId": KredAngId, "Analizuri": Analizuri
            },
            success: function (ret) {KredAngId
                if (ret == "ok") {
                    //alert("შევიტანე");
                    $(".glyphicon-remove").trigger('click');
                    //$("table").append("aaaaaaa");
                } else
                    alert("გაასხა");
            }

        })






        }
    });

    ////Barati-------------------------------------------





});













