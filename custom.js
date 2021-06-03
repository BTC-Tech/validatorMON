jQuery(document).ready(function($) {
    $('#table_id').DataTable();
} );
var widget = document.getElementById('vmon_widget');

if (widget){
	getJax();
}

function getJax(){
jQuery(document).ready(function($) {
		var data = {
			'action': 'ajx_widget',
			'_nonce': wpmm.nonce
		};
				jQuery.post(wpmm.ajaxurl, data, function(response) {
				var json = response;
					//alert(json['response']);

					var h_uptime = $("#h_uptime").val();
					var h_return = $("#h_return").val();
					var h_rewards = $("#h_rewards").val();
					var h_fee = $("#h_fee").val();

					var bubbles = $("#bubbles").val();

					if(bubbles == 'on'){
					$("#stat_uptime").html(json['uptime'] + '%'+'<div class="rightCircle">'+h_uptime+'%</div>');
					$("#stat_return").html(json['return'] + '%'+'<div class="rightCircle">'+h_return+'%</div>');
					$("#stat_rewards").html(json['rewards'] +'<div class="rightCircle">'+h_rewards+'</div>');
					$("#stat_fee").html(json['fee'] + '%' + '<div class="rightCircle">'+h_fee+'%</div>');
					} else {
					$("#stat_uptime").html(json['uptime'] + '%');
					$("#stat_return").html(json['return'] + '%');
					$("#stat_rewards").html(json['rewards']);
					$("#stat_fee").html(json['fee'] + '%');
					}


					if(h_uptime>json['uptime']){
					//uptime gone down
						$("#vmon_icon_uptime_d").show();
						setTimeout(function(){
								$("#vmon_icon_uptime_d").hide();
						}, 2000);
					}
					if(h_uptime<json['uptime']){
					//uptime gone up
						$("#vmon_icon_uptime_d").show();
						setTimeout(function(){
								$("#vmon_icon_uptime_d").hide();
						}, 2000);
					}

					if(h_rewards>json['rewards']){
						//rewards gone down
						//$("#vmon_icon_rewards_d").show();
						$("#vmon_icon_rewards_d").css('display', 'inline');
						$("#stat_rewards").addClass('price_down');
						setTimeout(function(){
								$("#vmon_icon_rewards_d").hide();
								$("#stat_rewards").removeClass('price_down');
						}, 2000);
					}
					if(h_rewards<json['rewards']){
						//rewards gone dup
						//$("#vmon_icon_rewards_u").show();
						$("#vmon_icon_rewards_u").css('display', 'inline');
						$("#stat_rewards").addClass('price_up');
						setTimeout(function(){
								$("#vmon_icon_rewards_u").hide();
								$("#stat_rewards").removeClass('price_up');
						}, 2000);
					}
					if(h_return>json['return']){
						//rewards gone down
						$("#vmon_icon_return_d").show();
						setTimeout(function(){
								$("#vmon_icon_return_d").hide();
						}, 2000);
					}
					if(h_return<json['return']){
						//rewards gone dup
						$("#vmon_icon_return_u").show();
						setTimeout(function(){
								$("#vmon_icon_return_u").hide();
						}, 2000);
					}
					if(h_fee>json['fee']){
						//rewards gone down
						$("#vmon_icon_fee_d").show();
						setTimeout(function(){
								$("#vmon_icon_fee_d").hide();
						}, 2000);
					}
					if(h_fee<json['fee']){
						//rewards gone dup
						$("#vmon_icon_fee_u").show();
						setTimeout(function(){
								$("#vmon_icon_fee_u").hide();
						}, 2000);
					}
					$("#h_uptime").val(json['uptime']);
					$("#h_return").val(json['return']);
					$("#h_rewards").val(json['rewards']);
					$("#h_fee").val(json['fee']);

				});

});
setTimeout(getJax, 5000);
}