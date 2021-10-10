var subtotal = 0 ;
const Drinks = new Map();

$(".plusBtn").click(function () {
    var n = $(this).parent(".buttons").find(".totalAmount");
    n.val(Number(n.val()) + 1);

    var name = $(this).parent(".buttons").parent(".card-body").find(".item-name").text() ;
    var price = $(this).parent(".buttons").parent(".card-body").find(".price").text() ;

    var id = name.split(" ").join("") ; 

    var total = (price.substring(1,price.length) * n.val()).toFixed(2);
    
    Drinks.set(`${name}`,total);

    var totalDrinks = 0 ;
    Drinks.forEach (function(value, key) {
        totalDrinks = (eval(`${totalDrinks} + ${value}`)).toFixed(2);
    })

    document.getElementById('totalDrinks').innerHTML = totalDrinks ;
    document.getElementById('subtotal').innerHTML = totalDrinks ;
    if(totalDrinks == 0){
        var tax = 0 ;
    }
    else{
        var tax = 12 ;
    }
    document.getElementById('pay').innerHTML = (eval(`${totalDrinks} + ${tax}`)).toFixed(2) ;

    if(n.val() >= 1){
        if(n.val() == 1){
            $(`#${id}`).remove();
            $("#drinks-bill").append(`<div id="${id}" class="d-flex flex-row justify-content-between"><p>${name}</p><p>${price} x ${n.val()}</p><p>${total}</p></div>`)

        }
        else{
            $(`#${id}`).remove();
            $("#drinks-bill").append(`<div id="${id}" class="d-flex flex-row justify-content-between"><p>${name}</p><p>${price} x ${n.val()}</p><p>${total}</p></div>`)
            
        }
    }
    
});

$(".minusBtn").click(function() {
    var n = $(this).parent(".buttons").find(".totalAmount");

    var name = $(this).parent(".buttons").parent(".card-body").find(".item-name").text() ;
    var price = $(this).parent(".buttons").parent(".card-body").find(".price").text() ;
    var id = name.split(" ").join("") ; 
    
    var amount = Number(n.val());
    if(amount > 0 ){
        n.val(amount-1);
    }
    
    var total = price.substring(1,price.length) * n.val();

    Drinks.set(`${name}`,total);

    var totalDrinks = 0 ;
    Drinks.forEach (function(value, key) {
        totalDrinks = (eval(`${totalDrinks} + ${value}`)).toFixed(2);
    })

    document.getElementById('totalDrinks').innerHTML = totalDrinks ;
    document.getElementById('subtotal').innerHTML = totalDrinks ;
    if(totalDrinks == 0){
        var tax = 0 ;
    }
    else{
        var tax = 12 ;
    }
    document.getElementById('pay').innerHTML = (eval(`${totalDrinks} + ${tax}`)).toFixed(2) ;
    
    if (amount > 0) {
        if(n.val() == 1){
            $(`#${id}`).remove();
            $("#drinks-bill").append(`<div id="${id}" class="d-flex flex-row justify-content-between"><p>${name}</p><p>${price} x ${n.val()}</p><p>${total}</p></div>`)
        }
        else{
            $(`#${id}`).remove();
            $("#drinks-bill").append(`<div id="${id}" class="d-flex flex-row justify-content-between"><p>${name}</p><p>${price} x ${n.val()}</p><p>${total}</p></div>`)
        }
    }
    if(n.val() == 0){
        $(`#${id}`).remove();
    }
});