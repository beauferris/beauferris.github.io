var slider = document.getElementById("myRange");
var pageviews = document.getElementById("demo");
var cost = document.getElementById("cost");
var billing = document.getElementById("billing-mode");


// 10K pageviews / $8 per month
// 50K pageviews / $12 per month
// 100K pageviews / $16 per month
// 500k pageviews / $24 per month
// 1M pageviews / $36 per month


// Update the current slider value (each time you drag the slider handle)
function getPrice(){
    
    let discount = 0;
    let price = 0;
    let views ="10";

    if(billing.checked){
        discount = 0.25;
    }

    switch(slider.value){
        case "0":
            views= "10K PAGEVIEWS";
            price =8
            break;
        case "1":
            views = "50K PAGEVIEWS";
            price =12
            break;
        case "2":
            views = "100K PAGEVIEWS";
            price =16
            break;
        case "3":
            views = "500K PAGEVIEWS";
            price =24
            break;
        case "4":
            views = "1M PAGEVIEWS";
            price =36
            break;
    }
    price = price - price * discount;
    pageviews.innerHTML = views;
    cost.innerHTML = "$"+price.toFixed(2);
}

slider.addEventListener("input", getPrice);
billing.addEventListener("input", getPrice);

getPrice()



