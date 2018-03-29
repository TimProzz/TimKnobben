var getDefaultObject = function() {
    return {
        list: [],
        id: 0
    };
};

var deleteall = function(element) {
   var confirmation = confirm('Wil je alle Todo-list items verwijderen?')
   if (confirmation === true) {
        localStorage.removeItem('opslag');
       element.html('');
       };
};

var showTodoItem = function(todoObject, element) {
    if(todoObject.list.length !== 0) {
        element.html('');
        
        todoObject.list.sort(function(a, b){
            return(b.prioriteit - a.prioriteit)
                
                });        
        
var checkTodoItem = function(todoObject, id, prioriteit) {
    var IndexToCheck = findTodoItem(todoObject, id);
    if (IndexToCheck !== -1) {
        t.list[findTodoItem].prioriteit = -1;
    } 
    
}
        
        for(var itemIndex = 0; itemIndex < todoObject.list.length; itemIndex += 1) {
            var currentItem = todoObject.list[itemIndex];
            var newElement  = $('<li class="todo-item"></li>');
            var buttondelete = $('<input type="button" class="del" value="Verwijder"/>')
            var description = currentItem.description;
            var prioriteit = currentItem.prioriteit;
            
            newElement.addClass("prioriteit-" + currentItem.prioriteit);
            
            buttondelete.attr("data-id", currentItem.id);
            buttondelete.click(function() {
                if(confirm("Wil je dit Todo-list item verwijderen?")){
                    var id = +$(this).attr("data-id");
                    verwijderTodoItem(todoObject,id);
                    TodoListOpslaan(todoObject);
                    showTodoItem(todoObject, element);
                    
                }
                
                return false;
            });
            
            

            newElement.text(description+ " " + prioriteit );
            
            buttondelete.appendTo(newElement);
            newElement.appendTo(element);
        }
    }
};

var verwijderTodoItem = function(todoObject, id) {
    var indexToDelete = findTodoItem(todoObject, id);
    if(indexToDelete !== -1) {
        todoObject.list.splice(indexToDelete, 1)
        location.reload();
    }
};

var findTodoItem = function(todoObject, id){
    var index = -1;
    for(var i = 0; i < todoObject.list.length; i += 1) {
        var currentItem = todoObject.list[i];
        if(currentItem.id === id){
            index = i;
            break;
        }
    }
    return index;
};

var TodoListOpslaan = function(todoObject) {
    var AlsJsonString = JSON.stringify(todoObject);
    localStorage.setItem('opslag', AlsJsonString);
};

var TodoItemToevoegen = function(todoObject, description, prioriteit) {
    todoObject.id += 1;
    
    todoObject.list.push({
        description: description,
        id: todoObject.id,
        prioriteit: prioriteit,
    });
};

var todoListLaden = function() {
    var AlsJsonString = localStorage.getItem('opslag');
    var todo = getDefaultObject();
    
    if(typeof AlsJsonString === "string") {
        try {
            todo = JSON.parse(AlsJsonString);
        } catch (exception) {
            return todo;
        }
    }
    
    return todo;
};

$(document).ready(function() {
    var eenTodoObject = todoListLaden();
    var htmlListElement    = $('#lijst');

    
    showTodoItem(eenTodoObject, htmlListElement);
    
   
    var prioInput = $('#option');
    var itemForm = $('#item-form');
    var descInput = $('#omschrijving');
    itemForm.submit(function() {
        var prioriteit = prioInput.val();
        var text = descInput.val();
        
        if(text.trim() !== "") {
            TodoItemToevoegen(eenTodoObject, text, prioriteit);
            showTodoItem(eenTodoObject, htmlListElement);
            TodoListOpslaan(eenTodoObject);
            descInput.val('');
        }
        
        return false;
    });
    
    
    $('#verwijderAll').click(function(){
        deleteall(htmlListElement);  
        location.reload();
    });
       
});

$(document).ready(function(){
    $(".knopToggle").click(function(){
        $(".legenda").animate({
            height: 'toggle'
          }); 
    });
});