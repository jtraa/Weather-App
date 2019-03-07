<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css"/>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <!-- <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> -->
    <!-- <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
    
    <title>Weather</title>
</head>
<body>
    
<div class="container">
    
    </div>
    <div class="row">
    
                <div class="form-group has-feedback">
                
            		<button value="search" onclick="searchCity()">
                    <label for="search" class="sr-only">Search</label>
            		<input type="text" class="form-control let linknavbar" name="sea" id="search"
                     placeholder="location"autocomplete="off">
                     <span class="glyphicon glyphicon-search form-control-feedback"></span>        
            	</div>
    </div>
</div>



<div class="location">

    <h1 class="location-timezone">Timezone</h1>
    
</div>
<canvas class="icon" width="128" height="128"></canvas>

    
   <div class="temperature">
            <div class="degree-section">
        <h2 class="temperature-degree">34</h2>
        <span>°F</span>
        </div>
        <div class="temperature-description">It's freaking Cold
        </div>
   </div> 

   <script src="https://rawgithub.com/darkskyapp/skycons/master/skycons.js">></script>
   <script src="js/script.js"></script>
    <script src="js/script2.js"></script>
</body>
</html>
