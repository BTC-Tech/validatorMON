jQuery(document).ready(function($) {

		$("#toggle_uptime").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'uptime'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_uptime").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_uptime").fadeOut();
				}, 2000);

				});
		});
		$("#toggle_icons").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'icons'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_icons").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_icons").fadeOut();
				}, 2000);
				});
		});
		$("#toggle_return").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'return'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_return").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_return").fadeOut();
				}, 2000);
				});
		});
		$("#toggle_bubbles").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'bubbles'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_bubbles").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_bubbles").fadeOut();
				}, 2000);
				});
		});
		$("#toggle_rewards").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'rewards'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_rewards").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_rewards").fadeOut();
				}, 2000);

				});
		});
		$("#toggle_fee").click(function(){
		var data = {
			'action': 'ajx_set_view',
			'_nonce': vmon.nonce,
			'toggle': 'fee'
		};
				jQuery.post(ajaxurl, data, function(response) {
				$("#vmon_icon_saved_fee").fadeIn();
				setTimeout(function(){
				$("#vmon_icon_saved_fee").fadeOut();
				}, 2000);

				});
		});
});