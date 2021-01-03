	$('#btrun').click(function() {

		$.ajax({
			url: "libs/php/Eearthquake.php",
			type: 'POST',
			dataType: 'json',
			data: {
				Earthquake: $('#SelEarthquake').val()

			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#Datetime').html(result['data'][0]['Datetime']);
					$('#depth').html(result['data'][0]['depth']);
					$('#magnitude').html(result['data'][0]['magnitude']);
					$('#lat').html(result['data'][0]['lat']);


				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});


	});
