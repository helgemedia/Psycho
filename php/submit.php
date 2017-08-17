<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// email address here
	$youremail = 'info@psychotherapie-tekath.de';

	// prepare an ordered version of the message
	$body = "This is the form that was just submitted:
	Name:  $_POST[name]
	E-Mail: $_POST[email]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// send the message if important fields are not empty
	if($_POST["message"] == "" || $_POST["name"] == ""){
	    return false;
        } else {
	mail($youremail, 'Contact Form', $body, $headers );
	}

}

?>
