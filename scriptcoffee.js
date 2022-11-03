const text = ['LADANG COFFEESHOP'];
    let count = 0;
    let textIndex = 0;
    let currentText = '';
    let words = '';
    
    (function ketik() {
        if(count == text.length) {
        count = 0;
        }
        
        currentText = text[count];
        words = currentText.slice(0, ++textIndex);
        document.querySelector('.efek').textContent = words;
        
        if(words.length == currentText.length){
            textIndex = 0;
        }
        
        setTimeout(ketik, 500);
    })();