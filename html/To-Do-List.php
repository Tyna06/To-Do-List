<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <!-- Ajout d'un icon devant mon titre -->
    <link rel="shortcut icon" href="../images/to-do.png">
    <!-- Lien vers ma page de style -->
    <link rel="stylesheet" href="../css/To-Do-List.css">
</head>

<body>
    <h1>My To-Do-List</h1>
 
        <div class="container">
            <div class="Header">
                <!-- title & img -->
                <h2>Current list<img src="../images/list.png" alt="image de la liste"></h1>
                    <span class="hide" id="counter">0</span>

            </div>
            <div class="row" id="addTasks">
                <input type="text" placeholder="Please enter your tasks" id="tasks">
                <button onclick="addTasks()">Add</button>
            </div>
            <ul id="List-container">
                <!-- <li class="checked"><a href="">tasks</a></li>
                <li class="checked"><a href="">tasks</a></li>
                <li class="checked"><a href="">tasks</a></li>
                <li class="checked"><a href="">tasks</a></li> -->
            </ul>
           
                <input type="submit" value="Save" id="btns" onclick="saveTasks()">
                <input type="reset" value="Clear" id="btnc" onclick="clearTasks()">
            
        </div>


  
    <script src="../js/todo.js"></script>
</body>

</html>