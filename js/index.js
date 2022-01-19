
const shrimp = {
    share: 0.3, 
    weight: 0.33,
    unitCost: 5
};

const snapper = {
    share : 0.2,
    weight: 0.33,
    unitCost: 4
};

const seabass = {
    share: 0.2,
    weight: 0.33,
    unitCost: 4
};

const chicken = {
    share: 0.2,
    weight: 0.33,
    unitCost: 4
};

const ribeye = {
    share: 0.1,
    weight: 0.5,
    unitCost: 4
};


let date = document.getElementById("date")
date.addEventListener('change', function (e) {
    console.log(this.value);
});

let dishes = document.getElementById("guests-number")
dishes.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});

let createdBy = document.getElementById("created-by")
createdBy.addEventListener('change', function (e) {
    console.log(this.value);
});

let operand1Shrimp = document.getElementById('operand1-shrimp');
operand1Shrimp.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});



let operand1Snapper = document.getElementById('operand1-snapper');
operand1Snapper.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});


let operand1Seabass = document.getElementById('operand1-seabass');
operand1Seabass.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});



let operand1Chicken = document.getElementById('operand1-chicken');
operand1Chicken.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



let operand1Ribeye = document.getElementById('operand1-ribeye');
operand1Ribeye.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});


/**
 * Getting all the elements on page one to be able to gather needed information to make calculations for page two */

 function Calculate() {
     
    let date = document.getElementById("date").value;
    let dishes = document.getElementById("guests-number").value;
    let createdBy = document.getElementById("created-by").value;
    let operand1Shrimp = document.getElementById('operand1-shrimp').value;
    let operand1Snapper = document.getElementById('operand1-snapper').value;
    let operand1Seabass = document.getElementById('operand1-seabass').value;
    let operand1Chicken = document.getElementById('operand1-chicken').value;
    let operand1Ribeye = document.getElementById('operand1-ribeye').value;

     
    multiplyShareDishes(dishes);
    amountDish ();
    needAmount();

}
    /**
     * ??????
     */
    function multiplyShareDishes(dishes) {
        
        let operand3Shrimp = shrimp.share * dishes;
        document.getElementById("operand3-shrimp").value = operand3Shrimp;

        let operand3Snapper = snapper.share * dishes;
        document.getElementById("operand3-redsnapper").value = operand3Snapper;


        let operand3Seabass = seabass.share * dishes;
        document.getElementById("operand3-seabass").value = operand3Seabass;

        let operand3Chicken = chicken.share * dishes;
        document.getElementById('operand3-chicken').value = operand3Chicken;
        
        let operand3Ribeye = ribeye.share * dishes;
        document.getElementById('operand3-ribeye').value = operand3Ribeye;
        
    }
    /**
     * ???????
     */
    function amountDish () {
           document.getElementById("operand4-shrimp").value = shrimp.weight;
           document.getElementById("operand4-redsnapper").value = snapper.weight;
           document.getElementById("operand4-seabass").value = seabass.weight;
           document.getElementById("operand4-chicken").value = chicken.weight;
           document.getElementById("operand4-ribeye").value = ribeye.weight;
           
    }

    function needAmount() {

        
        let operand5Shrimp = document.getElementById("operand3-shrimp").value;
        operand5Shrimp *= shrimp.weight;
        document.getElementById("operand5-shrimp").value = operand5Shrimp;

        let operand5Snapper = document.getElementById("operand3-redsnapper").value;
        operand5Snapper *= snapper.weight;
        document.getElementById("operand5-redsnapper").value = operand5Snapper;

        let operand5Seabass = document.getElementById("operand3-seabass").value;
        operand5Seabass *= seabass.weight;
        document.getElementById("operand5-seabass").value = operand5Seabass;

        let operand5Chicken = document.getElementById("operand3-chicken").value;
        operand5Chicken *= chicken.weight;
        document.getElementById("operand5-chicken").value = operand5Chicken;

        let operand5Ribeye = document.getElementById("operand3-ribeye").value;
        operand5Ribeye *= ribeye.weight;
        document.getElementById("operand5-ribeye").value = operand5Ribeye;
}




    
    /*let shoppingList = [date, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye];
    
    window.location = '../order.html?shoppingList=' + shoppingList;]*/
    
    
    
    
    
    
    
function contentLoad() {
    let date2 = document.getElementById("datep2")
    let dishes2 = document.getElementById("guests-numberp2")
    let createdBy2 = document.getElementById("created-byp2")
    let operand2Shrimp = document.getElementById("operand2-shrimp");
    let operand2Snapper = document.getElementById("operand2-snapper");
    let operand2Seabass = document.getElementById("operand2-seabass");
    let operand2Chicken = document.getElementById('operand2-chicken');
    let operand2Ribeye = document.getElementById('operand2-ribeye');

    
    
}



/**
 * This function should execute all the operations and show results in chart
 */


/**
 * This function should divide the total amount of dishes expected to be sold with the sells share of each dish
 
function calculateDishesByProduct() {*/

  
    


/**
 * This function should multiply the total amount of dishes expected to be sold per product with the amount of product contained in each dish */


function productAmount() {
    
    
}

/**
 * This function should substract the product on stock from the total amount of product needed and multiply the result by the unit cost of each product */
function calculateOrder() {
    let operand6Shrimp = document.getElementById("operand6-shrimp");
    let operand6Snapper = document.getElementById("operand6-snapper");
    let operand6Seabass = document.getElementById("operand6-seabass");
    let operand6Chicken = document.getElementById('operand6-chicken');
    let operand6Ribeye = document.getElementById('operand6-ribeye');

    operand6Shrimp = operand5Shrimp - operand2Shrimp;
    operand6Snapper = operand5Snapper - operand2Snapper;
    operand6Seabass = operand5Seabass - operand2Seabass;
    operand6Chicken = operand5Chicken - operand2Chicken;
    operand6Ribeye = operand5Ribeye - operand2Ribeye;

    let operand7Shrimp = document.getElementById("operand7-shrimp");
    let operand7Snapper = document.getElementById("operand7-snapper");
    let operand7Seabass = document.getElementById("operand7-seabass");
    let operand7Chicken = document.getElementById('operand7-chicken');
    let operand7Ribeye = document.getElementById('operand7-ribeye');

    operand7Shrimp = shrimp.unitCost;
    operand7Snapper = snapper.unitCost;
    operand7Seabass = seabass.unitCost;
    operand7Chicken = chicken.unitCost;
    operand7Ribeye = ribeye.unitCost;

    let operand8Shrimp = document.getElementById("operand8-shrimp");
    let operand8Snapper = document.getElementById("operand8-snapper");
    let operand8Seabass = document.getElementById("operand8-seabass");
    let operand8Chicken = document.getElementById('operand8-chicken');
    let operand8Ribeye = document.getElementById('operand8-ribeye');

}



