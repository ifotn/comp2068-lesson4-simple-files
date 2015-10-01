var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// add accounting package for currency formatting
var accounting = require('accounting');

// create the server to run the page
http.createServer(function (req, res) {

    // get the querystring and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    
    var subTotal = parseFloat(qs.subtotal);

    // calculate tax and total
    var tax = subTotal * 0.13;
    var total = subTotal + tax;

    // format values as currency
    subTotal = accounting.formatMoney(subTotal);
    tax = accounting.formatMoney(tax);
    total = accounting.formatMoney(total);
    
    // output all the values
    res.write('<h2>HST Calculator</h2>Sub Total: ' + subTotal + '<br />HST: ' + tax + '<br />Total: ' + total);
    res.end();

}).listen(3000);

// page runs at http://localhost:3000/tax-calculator.js?subtotal=x
