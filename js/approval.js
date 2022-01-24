/*jshint esversion: 6 */
/**
 * This function will generate a random number
*/

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('order-number').innerText = (Math.floor(Math.random()*1000) +1);
    });

    