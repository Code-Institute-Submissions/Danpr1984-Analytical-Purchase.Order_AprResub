let shrimp = { 
    share: 0.3,  
    weight: 0.33,
    unitCost: 5
};

let snapper = {
    share: 0.2,  
    weight: 0.33,
    unitCost: 4

};

let seabass = {
    hare: 0.2,  
    weight: 0.33,
    unitCost: 4

};

let chicken = {
    hare: 0.2,  
    weight: 0.33,
    unitCost: 4

};

let ribeye = {
    share: 0.1,  
    weight: 0.5,
    unitCost: 4

};

function contentLoad();

function contentLoad2();
/**
 * This function should execute all the operations and show results in chart
 */
function runCalculations (); 

/**
 * This function should divide the total amount of dishes expected to be sold with the sells share of each dish
 */
function calculateDishesByProduct();

/**
 * This function should multiply the total amount of dishes expected to be sold per product with the amount of product contained in each dish
 */
function calculateAmount();

/**
 * This function should substract the product on stock from the total amount of product needed and multiply the result by the unit cost of each product */
function calculateOrder();
