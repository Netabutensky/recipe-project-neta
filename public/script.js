function button(){

    $("#all-ingredients").empty()
    let inputfood = $("#food-input").val()

    $.get(`http://localhost:8081/recipes/${inputfood}`,function(data){
  
      const source = $("#ingredient-template").html()
      const template= Handlebars.compile(source)
      const somehtml = template({ingredi: data}) 
      $("#all-ingredients").append(somehtml) 


    
     $("#headline").empty()
     $("#headline").append(inputfood)


    })
    
}



function first(){

    console.log(ingredients[0])
}

