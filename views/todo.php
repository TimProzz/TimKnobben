<div class="main-container backgroundColorLittleGrey">
    <div class="paddingLeftRight">
        <div class="main-content">  

            <script type="text/javascript" src="assets/todo.js"></script>

            <div id="TODO">      
                <h1>TODO-lijst</h1>       
                <ul id="lijst"></ul>
                <form id="item-form">   
                    <input type="text" id="omschrijving" name="omschrijving" placeholder="Wat is je Todo?" /> <br><br>
                    <label for="prioriteit">Prioriteit:</label>
                    <select name="option" id="option">
                    <option value="1">1. Zeer laag</option>   
                    <option value="2">2. Laag</option>
                    <option value="3">3. Gemiddeld</option>
                    <option value="4">4. Hoog</option>
                    <option value="5">5. Zeer hoog</option>
                    </select><br><br>
                    <input type="submit" id="opslaan" name="opslaan" value="Toevoegen" />
                </form>          
                <br> 
                <input type="button" id="verwijderAll" class="boven_todo_list" value="Alles verwijderen"/><br>            
                <h2 class="legendaClass">Legenda</h2>
                <div class="legenda">
                    <br><div class="prio1"></div><p>= Prioriteit 1 - Zeer Laag</p> 
                    <br><div class="prio2"></div><p>= Prioriteit 2 - Laag</p> 
                    <br><div class="prio3"></div><p>= Prioriteit 3 - Gemiddeld</p>  
                    <br><div class="prio4"></div><p>= Prioriteit 4 - Hoog</p>
                    <br><div class="prio5"></div><p>= Prioriteit 5 - Zeer Hoog</p>
                </div><br>
                <button class="knopToggle">Legenda openen / sluiten</button>            
            </div>
        </div>
    </div>
</div>