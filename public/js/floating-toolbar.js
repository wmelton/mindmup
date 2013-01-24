/*global jQuery*/
jQuery.fn.floatingToolbarWidget = function (mapRepository) {
	'use strict';
	return this.each(function () {
		var element = jQuery(this);
		element
			.draggable({containment: 'window'})
			.find('button.close').click(function () {
				if (jQuery('#toolbar-inner').is(':visible')) {
					jQuery('#toolbar-inner').hide();
					jQuery('.icon-resize-small', '#floating-toolbar').removeClass("icon-resize-small").addClass("icon-resize-full");
				} else {
					jQuery('#toolbar-inner').show();
					jQuery('.icon-resize-full', '#floating-toolbar').addClass("icon-resize-small").removeClass("icon-resize-full");
				}
			});
		jQuery("#menuPublish").click(function () {
			jQuery('#menuPublish')
				.html('<i class="icon-spinner icon-spin"></i>Saving...')
				.removeClass('btn-primary')
				.attr("disabled", true);
			jQuery('#toolbarSave p').hide();
			mapRepository.publishMap();
		});
	});
};
