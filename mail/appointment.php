<?php
 $html = ' Name: '. $_POST['name'] .'
 Email Id: '.$_POST['email'].'
 Mobille Number: '.$_POST['mobile'].'
 Message: '.$_POST['message'];
$message = $html;
$subject = 'Client Enquiry (ROOT DENTAL APPOITMENT INQUIRY )'; 
$headers = 'From: support@bigappcompany.com' . "\r\n" . 'Reply-To: support@spotsoon.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion(); 
$to ='ahada.mahendra@gmail.com';

if(mail($to, $subject, $message, $headers)) {
     echo "<script>alert('Thanks For Contacting . We will contact you within 72hours');location.href=\"../index.php\"</script>";
}
else 
{ echo "<script>alert('Unable to send mail. Please try after some time.');location.href=\"../contact.php\"</script>"; 
}			
?>