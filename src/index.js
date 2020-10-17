module.exports =function toReadable (number) {
    
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   if (number === 0) {
       return 'zero';
   } else if (number < 10) {
       return ones[number];
  } else if (number>=10 && number < 20) {
       let i = number - 10;
       return teens[i];
   } else if (number >=20 && number < 100) {
       let pos = number.toString().split('');
       let result = `${tens[pos[0]]} ${ones[pos[1]]}`
       return result.trim();
    } else if (number >=100 && number < 1000) {
        let pos = number.toString().split('');
        if (pos[1] === '1') {
            let result = `${ones[pos[0]]} hundred ${teens[pos[2]]}`;
        return result.trim();
        } else {
          let result = `${ones[pos[0]]} hundred ${tens[pos[1]]} ${ones[pos[2]]}`
        return result.replace(/ +/g, ' ').trim();  
        }
        
    }
 
}


