<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp Form</title>
    <link rel="stylesheet" href="signUp.css" type="text/css">
</head>
<body>


<?php
// define variables and set to empty values
$fname = $lname = $email = $pass = "";
$fnameErr = $lnameErr = $emailErr = $passErr ="";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty($_POST["fname"])){
        $fnameErr= "First Name should be required";
    }
    else{
        $fname = $_POST["fname"];
    }

    if(empty($_POST["lname"])){
        $lnameErr= "Last Name should be required";
    }
    else{
        $lname = $_POST["lname"];
    }

    if(empty($_POST["email"])){
        $emailErr= "Email should be required";
    }
    else{
        $email = $_POST["email"];
    }

    if(empty($_POST["pass"])){
        $passErr= "Password required";
    }
    else{
        $pass = $_POST["pass"];
    }
  
}



?>



<h1> PHP Form </h1>

    <div class="container">
        
        <form action=signUp.php  method="post" >

        <span class="error"><?php echo $fnameErr ?></span>
        <input type="text" name="fname" id="fname" placeholder="Enter Your First Name">
        
        <span class="error"><?php echo $lnameErr ?></span>
        <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name">
        
        <span class="error"><?php echo $emailErr ?></span>
        <input type="email" name="email" id="email" placeholder="Enter Your Email">
       
        <span class="error"><?php echo $passErr ?></span>
        <input type="password" name="pass" id="pass" placeholder="Enter Password">
        

        <input type="submit" name="submit" value="Submit Form" >
      
        
     
    </form>
    </div>

    <?php
if(isset($_POST["submit"])){
    if((empty($fnameErr) && empty($lnameErr) && empty($emailErr) && empty($passErr))){

    echo "<h2> Submitted Successfully</h2>";   

        echo "<h2> First Name : $fname; </h2>
        <h2> Last Name : $lname; </h2>
        <h2> Email : $email; </h2>";
   
    

    }
    else{
        echo "<h2>All fields complesory</h2>";
    }
}
?>
    
</body>
</html>

