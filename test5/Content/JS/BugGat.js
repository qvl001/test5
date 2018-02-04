$(document).ready(function () {

    ////daseleqteba

    //daseleqteba-------------------------------------------------------------------------------


    var domel;
    var Id;
    var Dadasturebuli;
    var Gadadebuli;
    var DokTipi;
    var DokNom;
    var Tarigi;
    var DebAng;
    var DebDas;
    var KredAng;
    var KredDas;
    var Tanxa;
    var valuta;
    var Kursi;
    var Memoriali;
    var Safudzveli;
    var AnalizuriVeli;
    var ShesrulebisTarigi;
    var User;

    $(document).on('click', 'table tr', function () {
        if ($(this).attr("id") === "selected")
            $(this).attr("id", null);
        else
            $(this).attr("id", "selected").siblings().attr("id", null);

        value = $(this).find('td:nth-child(6)').html();
        domel = $(this).closest('tr');
        Id = $.trim($(this).find('td:first').html());
        Dadasturebuli = $.trim($(this).find('td:nth-child(2)').html());
        Gadadebuli = $.trim($(this).find('td:nth-child(3)').html());
        DokTipi = $.trim($(this).find('td:nth-child(4)').html());
        DokNom = $.trim($(this).find('td:nth-child(5)').html());
        Tarigi = $.trim($(this).find('td:nth-child(6)').html());
        DebAng = $.trim($(this).find('td:nth-child(7)').html());
        DebDas = $.trim($(this).find('td:nth-child(8)').html());
        KredAng = $.trim($(this).find('td:nth-child(9)').html());
        KredDas = $.trim($(this).find('td:nth-child(10)').html());
        Tanxa = $.trim($(this).find('td:nth-child(11)').html());
        valuta = $.trim($(this).find('td:nth-child(12)').html());
        Kursi = $.trim($(this).find('td:nth-child(13)').html());
        Memoriali = $.trim($(this).find('td:nth-child(14)').html());
        Safudzveli = $.trim($(this).find('td:nth-child(15)').html());
        AnalizuriVeli = $.trim($(this).find('td:nth-child(16)').html());
        ShesrulebisTarigi = $.trim($(this).find('td:nth-child(17)').html());
        User = $.trim($(this).find('td:nth-child(18)').html());

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
        else {
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
                success: function (ret) {
                    KredAngId
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



    /////washla==================================================================================================
    
    $(document).on("click", "#BugGatDel", function () {

        $.ajax({
            url: '/Home/BugGatDel',
            type: 'POST',
            data: {"Id": Id },
            success: function (ret) {
                if (ret == "ok") {
                    $(".glyphicon-remove").trigger('click');
                } else
                    alert("გაასხა");
            }

        })

    });



    /////////redaqtirebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa













});