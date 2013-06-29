$(function() {
	$('input[rel="popover"]').popover();
	$('input[rel="tooltip"]').tooltip();

	$('.table-highlight tbody tr').mouseover(function(){
		$(this).find('td').css('background-color','#FFFDF3');
	}).mouseout(function(){
		$(this).find('td').css('background-color','');	
	})	

	$('.deletereport, .deleteuser').mouseover(function(){
		$(this).addClass('btn-danger');
		$(this).find('.icon-trash').addClass('icon-white');
	}).mouseout(function(){
		$(this).removeClass('btn-danger');	
		$(this).find('.icon-trash').removeClass('icon-white');		
	})

	$('.cancel-account').mouseover(function(){
		$(this).addClass('btn-danger');
	}).mouseout(function(){
		$(this).removeClass('btn-danger');	
	})			

});

$('#add_user').modal('toggle');

// Feedback modal
var defaultTextareaValue = $('#feedback-modal textarea').html();
$('#feedback-modal textarea').live('keyup', function() {
	if ($(this).val() != defaultTextareaValue && $(this).val() != ''){
			$('#feedback-modal input').removeAttr('disabled');			
		}

		else {$('#feedback-modal input').attr('disabled','disabled');};
})
$('#feedback-modal textarea').blur(function(){
	if ($(this).val() == '') {
		$(this).attr('value',defaultTextareaValue);		
	}
})

/* Misc */
$(function() {  		 
  $('.dropdown-toggle').dropdown();		 
  $('.dropdown-menu').click(function(e) {
    e.stopPropagation();
  });

});    

$(function () {	
	$("a.confirm").click(function(e) {
		e.preventDefault();
		var location = $(this).attr('href');
		bootbox.confirm("Are you sure?", "No", "Yes", function(confirmed) {
			if(confirmed) {
			window.location.replace(location);
			}
		});
	}); 	
	$("a.approve").click(function(e) {
		e.preventDefault();
		var location = $(this).attr('href');
		bootbox.confirm("Are you sure you wish to approve this report? If you click Yes, the report will become available to the user.", "No", "Yes", function(confirmed) {
			if(confirmed) {
			window.location.replace(location);
			}
		});
	}); 
	$("a.deletereport").click(function(e) {
		e.preventDefault();
		var location = $(this).attr('href');
		bootbox.confirm("Are you sure you wish to delete this report?", "No", "Yes", function(confirmed) {
			if(confirmed) {
			window.location.replace(location);
			}
		});
	}); 
	$("a.deleteuser").click(function(e) {
		e.preventDefault();
		var location = $(this).attr('href');
		bootbox.confirm("Are you sure you want to delete this user? Deleting a user also deletes all the reports uploaded for that user.", "No", "Yes", function(confirmed) {
			if(confirmed) {
			window.location.replace(location);
			}
		});
	}); 
	$("a.confirm-license-upgrade").click(function(e) {
		e.preventDefault();
		var location = $(this).attr('href');
		var license = $(this).attr('rel');			
		bootbox.confirm("Are you sure you wish to upgrade to AWR Cloud "+license+"?<BR> Once you click Yes, your plan will be changed and your credit card will be billed accordingly.", "No", "Yes", function(confirmed) {
			if(confirmed) {
			window.location.replace(location);
			}
		});
	});		
});		