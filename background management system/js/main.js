/*function navList(id) {
    var $obj = $("#nav_list"), $item = $("#J_nav_" + id);
    $item.parent().removeClass("none").parent().addClass("selected");
    
    $obj.find("h4").click(function () {
        var $div = $(this).siblings(".list_item");
        if ($(this).parent().hasClass("selected")) {
            $div.slideUp(600);
            $(this).parent().removeClass("selected");
        }
        if ($div.is(":hidden")) {
            $("#nav_list li").find(".list_item").slideUp(600);
            $("#nav_list li").removeClass("selected");
            $(this).parent().addClass("selected");
            $div.slideDown(600);

        } else {
            $div.slideUp(600);
        }
    });
}
*/

$(function(){
	var $obj = $("#nav_list");
	
	$obj.find("h4").click(function(){
		var $div = $(this).siblings(".list_item");
		
		if($div.is(":hidden")){
			$("#nav_list li").find(".list_item").slideUp(600);
            $("#nav_list li").removeClass("selected");
            $(this).parent().addClass("selected");
            $div.slideDown(600);
		}else{
			$div.slideUp(600);
		}		
	});	
});

