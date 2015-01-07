$('#id_scheduled_time').datetimepicker({
 		format:'m/d/Y H:i:s',
 		minDate:'-2/01/1970',
	});
	
	$('#id_date').datetimepicker({
		timepicker:false,
 		format:'m/d/Y',
 		minDate:'-2/01/1970',

	});

	$('#id_scheduled_time_1').datetimepicker({
		datepicker:false,
		format:'H:i',
		minTime: 0
	});
	
	Toggle = function(){
		var self = this;
		self.tog = ko.observable(false);
		self.change_button_value = ko.observable('Submit')
		self.u_r = ko.observableArray();
		self.g_r = ko.observableArray();
		self.selected_u_r = ko.observableArray();
		self.selected_g_r = ko.observableArray();
		
		self.add_user_form_validation = {
			password: ko.observable(),
			password_re: ko.observable(),
		};

		self.ajaxPost = function(url, optionField, oble, selectize_element, formElement){
			var x = $('formElement, input').serialize();
			$.post(url,x
				).success(function(data){
					createdObj = {
						text: data[optionField],
						value: data.id,
					};
					self[oble].push(createdObj);

					var $select = $(selectize_element).selectize({
					});
					var selectize = $select[0].selectize;
					selectize.addOption(createdObj);
					selectize.addItem(data.id);

					var hh = $(formElement).find('.close-reveal-modal');
					$(hh).trigger("click");

				}).done(function(){
					var errorHtml = '<div data-alert class="alert-box success"> Option successfully ADDED and SELECTED! <a href="#" class="close">&times;</a></div>';
					$('#main-error-area').append(errorHtml).foundation();
					// $('#main-error-area').fadeOut(6000, "swing");
				}).error(function(data){
					var errorHtml = '<div data-alert class="alert-box round">'+ data.responseText +'<a href="#" class="close">&times;</a></div>';
					$(formElement).append(errorHtml);
				});
		};

		self.submit_save = function(data,event){
			if(self.tog()==true){
				self.change_button_value('Send To Outbox');
				console.log(event.target.checked); // log out the current state
       			console.log("1");
       			return true;
			} else {
				self.change_button_value('SEND');
				console.log(event.target.checked); // log out the current state
       			console.log("1");
       			return true; 
			};
		};
	};

	toggle = new Toggle();
	ko.applyBindings(toggle);