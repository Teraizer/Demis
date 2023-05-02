<?php
include "databaseconnect.php";


 
$result = mysqli_query($conn, "SELECT * FROM news WHERE  id =  " . $_GET['id']);


    while ($news = mysqli_fetch_assoc($result))
{
    echo $news['content'];
    echo "<br>"; 
}

?>