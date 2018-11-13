// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-taco").on("click", function(event) {
      var id = $(this).data("id");
      var newState = {
        devoured: true
      };
  
  
      // Send the PUT request.
      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed taco state to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      function validate(){
        let isValid = true;
        $(".form-control").each(function(){
            if($(this).val() === ""){
                isValid = false
            };
        });
        return isValid;
    }
    if(validate()){
  
      var newTaco = {
        name: $("#userTacoName").val().trim(),
        devoured: 0
      };
    } else {
      alert("How can you eat a taco that doesn't exist?! Please provide a taco name!!")
    }

  
      // Send the POST request.
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("created new taco");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-taco").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted taco ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  