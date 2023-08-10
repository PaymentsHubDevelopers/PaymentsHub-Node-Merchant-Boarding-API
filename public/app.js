var applicationKey = "";

$(function(){ 

// Create Application Button Event Listener
  $("#create-app-button").click(function(event){
    event.preventDefault();
    $("#request-status-loading").slideDown();

    // Create Application Button Event Listener
    $.ajax({
      type: 'POST',
      url: '/create-application',
      data: {
        'appName': $("#application-name").val(),
        'agentId': $("#agent-id").val(),
        'planId': $("#plan-id").val(),
        "principals":
          {
            "istreet": $("#street").val(),
            "city": $("#city").val(),
            "state": $("#state").val(),
            "zipCode": $("#zipCode").val(),
            "firstName": $("#first-name").val(),
            "lastName": $("#last-name").val(),
            "socialSecurityNumber": $("#ssn").val(),
            "driverLicenseNumber": $("#driver-license-number").val(),
            "driverLicenseIssuedState": $("#driver-license-state").val(),
            "dateOfBirth": $("#date-of-birth").val(),
            "phoneNumber": $("#phone-number").val(),
            "email": $("#email").val(),
            "equityOwnershipPercentage": $("#equity-ownership-percentage").val(),
            "title": $("#title").val(),
            "isPersonalGuarantor": $("#is-personal-guarantor").val()
          }
      }, 
      success: function (data, status, xhr) {

        // Show data
        $("#boarding-api-response").html(JSON.stringify(data));
        applicationKey = data.application.externalKey;

        // Show Status
        $("#request-status-error").slideUp();
        $("#request-status-loading").slideUp();

        // Show Send appliaction button
        $("#create-app-button").slideUp();
        $("#update-app-button").slideDown();
        $("#send-app-button").slideDown();
      },
      error: function (jqXhr, textStatus, errorMessage) {
        // Show Error
        $("#request-status-loading").slideUp();
        $("#request-status-error").slideDown();
        $("#request-status-error").html(errorMessage);
        console.log('Error' + errorMessage);
      }
    });

  });


// Update Application Button Event Listener
  $("#update-app-button").click(function(event){
    event.preventDefault();
    $("#request-status-loading").slideDown();

    // Update Application Button Event Listener
    $.ajax({
      type: 'POST',
      url: '/update-application',
      data: {
        'appName': $("#application-name").val(),
        'agentId': $("#agent-id").val(),
        'planId': $("#plan-id").val(),
        'externalKey': applicationKey,
        "principals":
          {
            "istreet": $("#street").val(),
            "city": $("#city").val(),
            "state": $("#state").val(),
            "zipCode": $("#zipCode").val(),
            "firstName": $("#first-name").val(),
            "lastName": $("#last-name").val(),
            "socialSecurityNumber": $("#ssn").val(),
            "driverLicenseNumber": $("#driver-license-number").val(),
            "driverLicenseIssuedState": $("#driver-license-state").val(),
            "dateOfBirth": $("#date-of-birth").val(),
            "phoneNumber": $("#phone-number").val(),
            "email": $("#email").val(),
            "equityOwnershipPercentage": $("#equity-ownership-percentage").val(),
            "title": $("#title").val(),
            "isPersonalGuarantor": $("#is-personal-guarantor").val()
          }
      }, 
      success: function (data, status, xhr) {

        // Show data
        $("#boarding-api-response").html(JSON.stringify(data));

        // Show Status
        $("#request-status-error").slideUp();
        $("#request-status-loading").slideUp();

      },
      error: function (jqXhr, textStatus, errorMessage) {
        // Show Error
        $("#request-status-loading").slideUp();
        $("#request-status-error").slideDown();
        $("#request-status-error").html(errorMessage);
        console.log('Error' + errorMessage);
      }
    });

  });


// Send Application Button Event Listener
  $("#send-app-button").click(function(event){
    event.preventDefault();
    $("#request-status-loading").slideDown();

    // AJAX Call
    $.ajax({
      type: 'POST',
      url: '/send-application',
      data: {
        'externalKey': applicationKey
      }, 
      success: function (data, status, xhr) {

        // Show data
        $("#boarding-api-response").html(JSON.stringify(data));

        // Show Status
        $("#request-status-error").slideUp();
        $("#request-status-loading").slideUp();

        // Show submit appliaction button
        $("#send-app-button").slideUp();
        $("#submit-app-button").slideDown();
      },
      error: function (jqXhr, textStatus, errorMessage) {
        // Show Error
        $("#request-status-loading").slideUp();
        $("#request-status-error").slideDown();
        $("#request-status-error").html(errorMessage);
        console.log('Error' + errorMessage);
      }
    });

  });




// Submit Application Button Event Listener
  $("#submit-app-button").click(function(event){
    event.preventDefault();
    $("#request-status-loading").slideDown();

  // AJAX Call
    $.ajax({
      type: 'POST',
      url: '/submit-application',
      data: {
        'externalKey': applicationKey
      }, 
      success: function (data, status, xhr) {

        // Show data
        $("#boarding-api-response").html(JSON.stringify(data));

        // Show Status
        $("#request-status-error").slideUp();
        $("#request-status-loading").slideUp();

        // Show upate appliaction button
        $("#send-app-button").slideUp();
        $("#submit-app-button").slideUp();
      },
      error: function (jqXhr, textStatus, errorMessage) {
        // Show Error
        $("#request-status-loading").slideUp();
        $("#request-status-error").slideDown();
        $("#request-status-error").html(errorMessage);
        console.log('Error' + errorMessage);
      }
    });

  });

});
