module.exports = function toReadable (number) {
    number = number.toString(10);
    let result;
  
    if (number[number.length - 1] === '0') {
        result= 'zero';
    } else if (number[number.length - 1] === '1') {
        result = 'one';
    } else if (number[number.length - 1] === '2') {
        result = 'two';
    } else if (number[number.length - 1] === '3') {
        result = 'three';
    } else if (number[number.length - 1] === '4') {
        result = 'four';
    } else if (number[number.length - 1] === '5') {
        result = 'five';
    } else if (number[number.length - 1] === '6') {
        result = 'six';
    } else if (number[number.length - 1] === '7') {
        result = 'seven';
    } else if (number[number.length - 1] === '8') {
        result = 'eight';
    } else if (number[number.length - 1] === '9') {
        result = 'nine';
    }
    
    if (number.length > 1) {
        if (number[number.length -2] === '1') {
            if (number[number.length - 1] === '0') {
                result = 'ten';
            } else if (number[number.length - 1] === '1') {
                result = 'eleven';
            } else if (number[number.length - 1] === '2') {
                result = 'twelve';
            } else if (number[number.length - 1] === '3') {
                result = 'thirteen';
            } else if (number[number.length - 1] === '4') {
                result = 'fourteen';
            } else if (number[number.length - 1] === '5') {
                result = 'fifteen';
            } else if (number[number.length - 1] === '6') {
                result = 'sixteen';
            } else if (number[number.length - 1] === '7') {
                result = 'seventeen';
            } else if (number[number.length - 1] === '8') {
                result = 'eighteen';
            } else if (number[number.length - 1] === '9') {
                result = 'nineteen';
            }
        }
    }

    if (number.length > 1) {
        if (number[number.length -2] === '2') {
            result = 'twenty ' + result;
        } else if (number[number.length -2] === '3') {
            result = 'thirty ' + result;
        } else if (number[number.length -2] === '4') {
            result = 'forty ' + result;
        } else if (number[number.length -2] === '5') {
            result = 'fifty ' + result;
        } else if (number[number.length -2] === '6') {
            result = 'sixty ' + result;
        } else if (number[number.length -2] === '7') {
            result = 'seventy ' + result;
        } else if (number[number.length -2] === '8') {
            result = 'eighty ' + result;
        } else if (number[number.length -2] === '9') {
            result = 'ninety ' + result;
        } 
    }

    if (number.length > 1) {
        if (number[number.length -2] === '2' && number[number.length - 1] === '0') {
            result = 'twenty';
        } else if (number[number.length -2] === '3' && number[number.length - 1] === '0') {
            result = 'thirty';
        } else if (number[number.length -2] === '4' && number[number.length - 1] === '0') {
            result = 'forty';
        } else if (number[number.length -2] === '5' && number[number.length - 1] === '0') {
            result = 'fifty';
        } else if (number[number.length -2] === '6' && number[number.length - 1] === '0') {
            result = 'sixty';
        } else if (number[number.length -2] === '7' && number[number.length - 1] === '0') {
            result = 'seventy';
        } else if (number[number.length -2] === '8' && number[number.length - 1] === '0') {
            result = 'eighty';
        } else if (number[number.length -2] === '9' && number[number.length - 1] === '0') {
            result = 'ninety';
        } 
    }

    if (number.length > 2) {
        if (number[number.length - 3] === '1') {
            result = 'one hundred ' + result;
        } else if (number[number.length - 3] === '2') {
            result = 'two hundred ' + result;
        } else if (number[number.length - 3] === '3') {
            result = 'three hundred ' + result;
        } else if (number[number.length - 3] === '4') {
            result = 'four hundred ' + result;
        } else if (number[number.length - 3] === '5') {
            result = 'five hundred ' + result;
        } else if (number[number.length - 3] === '6') {
            result = 'six hundred ' + result;
        } else if (number[number.length - 3] === '7') {
            result = 'seven hundred ' + result;
        } else if (number[number.length - 3] === '8') {
            result = 'eight hundred ' + result;
        } else if (number[number.length - 3] === '9') {
            result = 'nine hundred ' + result;
        }
    }

    if (number.length > 2) {
        if (number[number.length - 3] === '1' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'one hundred';
        } else if (number[number.length - 3] === '2' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'two hundred';
        } else if (number[number.length - 3] === '3' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'three hundred';
        } else if (number[number.length - 3] === '4' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'four hundred';
        } else if (number[number.length - 3] === '5' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'five hundred';
        } else if (number[number.length - 3] === '6' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'six hundred';
        } else if (number[number.length - 3] === '7' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'seven hundred';
        } else if (number[number.length - 3] === '8' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'eight hundred';
        } else if (number[number.length - 3] === '9' && number[number.length - 1] === '0' && number[number.length - 2] === '0') {
            result = 'nine hundred';
        }
    }
    return result;
}
