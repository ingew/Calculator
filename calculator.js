
function operationPower(){
    var output = document.getElementById('output').innerHTML;
    var ans = document.getElementById('ans').innerHTML;
    var messages = '';

    if (output == ''){
        messages = 'Insert a number';
    } else{
        messages = '';
        ans = output + ' ^ ';
        output = '';
    }

    document.getElementById('output').innerHTML = output;
    document.getElementById('ans').innerHTML = ans;
    document.getElementById('messages').innerHTML = messages;
}

function operationResult(){
    var output = document.getElementById('output').innerHTML;
    var ans = document.getElementById('ans').innerHTML;
    var messages = '';

    if (output != '' && ans.indexOf('^') != -1 && ans.indexOf('=') == -1 ){
        var number = ans.substring(0, ans.indexOf(' '));
        var result = Math.pow(number,output);
        var resultString = result.toString();
        if (resultString.indexOf('e')!= -1){
            var aux = resultString.substring(0,resultString.indexOf('.')+2);
            result = aux + resultString.substring(resultString.indexOf('e'));
        }
        ans = ans + output + ' = ' + result;
        output = '';
    } else if ((output != '' && ans.indexOf('^') == -1 ) || (output != '' && ans.indexOf('=') != -1)){
        messages = 'Insert an operation';
    } else {
        messages = 'Insert a number';
    }

    document.getElementById('output').innerHTML = output;
    document.getElementById('ans').innerHTML = ans;
    document.getElementById('messages').innerHTML = messages;
}

function operationReset(){
    document.getElementById('output').innerHTML = '';
    document.getElementById('ans').innerHTML = '';
    document.getElementById('messages').innerHTML = '';
}

