function init(){$(".clearBtn").hide(),$("#placeHolder .loadingText").hide();var e=$(".topNav").css("height"),t=100;parseInt(e)>=150&&(t=250),$("body").css("padding-top",""+t+"px")}function validate(e){return void 0==e?{valid:!1,title:"Error",message:"Algo anda mal.. intentalo de nuevo"}:void 0==e.city?{valid:!1,title:"Error",message:"Selecciona una ciudad"}:{valid:!0,message:"Buscando archivo...",key:function(){return void 0!=e.date?genKey(e.city,customKey(e.date)):genKey(e.city,todayKey())}()}}function liveSearch(){var e="#search",t="table tr",i=".fileNo > p";$(e).on("keyup",function(){var e=$(this).val();$(t).each(function(t){if(0!=t){$row=$(this);var n=$row.find(i).text();0!=n.indexOf(e)?$row.hide():$row.show()}n==e&&""!=e&&(swal("Its a match!!",$row.find(".fileText").text(),"success"),$row.addClass("success"))})})}function searching(){$("#navForm select").attr("disabled","disabled"),$("#navForm input").attr("disabled","disabled"),$(".searchBtn").hide(),$(".clearBtn").show(),$("#placeHolder .welcomeText").hide(),$("#placeHolder .loadingText").show()}function doneSearching(){$("#placeHolder").hide(),$("#boletin").show()}function newSearch(){$("#boletin").hide(),$(RESULTS_DIV).children().remove(),$("#placeHolder").show(),$("#placeHolder .welcomeText").show(),$("#placeHolder .loadingText").hide(),$("#navForm select").val(function(){$(this).removeAttr("disabled")}),$("#navForm input").val(function(){$(this).removeAttr("disabled")}),$(".searchBtn").show(),$(".clearBtn").hide()}function boletinReady(){$("#boletin").css("visibility","visible"),$("#emptyBoletin").hide(),bootstrapTables()}function genKey(e,t){return e+t}function customKey(e){var t=e.split("-");return""+(parseInt(t[0])-2e3)+t[1]+t[2]}function todayKey(){var e=new Date;return""+e.getYear()-100+""+(e.getMonth()+1)+function(){return e.getDate()<10?"0"+e.getDate():e.getDate()}()}function bootstrapTables(){$(TARGET_DIV).find("table").each(function(){$(this).wrap('<div class="table-responsive"></div>'),$(this).addClass("table table-striped table-hover"),$("tr > td:nth-child(1)",this).addClass("fileIndex"),$("tr > td:nth-child(2)",this).addClass("fileNo"),$("tr > td:nth-child(3)",this).addClass("fileText")})}function clearAttributes(){$(TARGET_DIV).find("*").each(function(){$(this).removeAttributes(),$(this).filter(function(){return 0==$(this).text().trim().length}).remove()}),$(TARGET_DIV).find("span").replaceWith(function(){return $(this).contents()}),$(TARGET_DIV).find("i").replaceWith(function(){return $(this).contents()}),$("o\\:p").remove()}function printHtml(e){var t=$(RESULTS_DIV);return t.append(e),!0}var TARGET_DIV=".WordSection1",RESULTS_DIV="#results";jQuery.fn.removeAttributes=function(){return this.each(function(){var e=$.map(this.attributes,function(e){return e.name}),t=$(this);$.each(e,function(e,i){t.removeAttr(i)})})};