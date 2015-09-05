<!doctype html>
<html lang="en">
<head>
	<title>Webgyor Waves- Email Sent</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="Home Page of Sai Pc.I am a Designer,Developer and Programmer for hire.">
<meta name="keywords" content="Web Developer,App Developer,Web Design,">
<meta name="author" content="Sai Prashanth">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">

<link rel="icon" type="image/png" href="favicon.png">
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="sitewide.css">



</head>

<body>
<div id="container">
<section id="contact">
<h2>Email Sent</h2>
<?php
$name=$_POST['name'];
$email=$_POST['email'];
$desc=$_POST['desc'];
$phone=$_POST['phone'];
$hidden=$_POST['hidden'];
$to='saiprash_thegreatest@yahoo.co.in';
$subject='Website Required';

echo '<p>Your E-mail has been sent,<br>with the following details:<br>';
echo 'Name :'.$name.'<br>';
echo 'E-Mail :'.$email.'<br>';
echo 'Description of the site :'.$desc.'<br>';
echo 'Phone no :'.$phone.'</p>';
echo 'Return to page <a href="index.htm">Click here</a>';

$msg="Name :$name\nDescription: $desc\n Phone no: $phone";
if($hidden=='hide' && !empty($email) && $phone.length==10)
mail($to, $subject, $msg, 'From:' . $email);
?>
</section>
</div>
</body>
</html>