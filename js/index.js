$(document).ready(start);

function start() {
	$("#entry").submit(handleForm);
}

function handleForm(e) {
	e.preventDefault();
	var input = $("#newEntry").val();
	addLineItem(input);
	addToTotal(input);
	$("newEntry").val("");
}

function addToTotal(num) {
	var rawCurrentTotal = $("#total").html();
	var convertedNum = parseFloat(num);
	var currentTotal = parseFloat(rawCurrentTotal);
	var newTotal = currentTotal + convertedNum;

	var formattedNewTotal = newTotal.toFixed(2);
	
	$("#total").html(formattedNewTotal);
}

function addLineItem(num) {
	var formattedNum = "$" + parseFloat(num).toFixed(2);
	
	var htmlResult = generateHtml(formattedNum);
	$("#entries").append(htmlResult);
}

function generateHtml(price) {
	return '<tr><td></td><td>' + price + '</td></tr>'; 
}