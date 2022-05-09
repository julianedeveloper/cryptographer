
function cleanScream() {

    document.querySelector('.message').value = "";

}

function buttonEncrypt() {

    let first = document.querySelector('.userTxt').value; // text encrypted already
    let encryptedTxt = "";
    if (first != "") {

        for (var i = 0; i < first.length; i++) {
            switch (first[i]) {
                case 'a':
                    encryptedTxt += 'ai';
                    break;

                case 'e':
                    encryptedTxt += 'enter';
                    break;

                case 'i':
                    encryptedTxt += 'imes';
                    break;

                case 'o':
                    encryptedTxt += 'ober';
                    break;

                case 'u':
                    encryptedTxt += 'ufat';
                    break;

                default: encryptedTxt += first[i];
                    console.log(encryptedTxt);
            }

        }
        document.querySelector('.message').value = encryptedTxt;
        console.log(encryptedTxt);
    }
}
cleanScream();

function buttonDecrypt() {
    debugger
    let second = document.querySelector('.message').value; //take the .message and put the text encrypted as value.
    let decryptedTxt = ""; // here it's saved all the values, becaming the decryptTxt value.
    if (second != "") {  // if the second let it's not empty, has a text, so...
        decryptedTxt = second.replaceAll('ai', 'a');
        console.log('oi mundo', decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('enter', 'e');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('imes', 'i');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('ober', 'o');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('ufat', 'u');
        console.log(decryptedTxt);
        
        document.querySelector('.userTxt').value = decryptedTxt;
        console.log(decryptedTxt);
    }
    
}

function buttonCopy() {

    let copyText = document.querySelector('.message').value;
    let copy = "";
    if (copyText != "") {

        navigator.clipboard.writeText(copyText);
        document.querySelector('.message').value = copy;
        console.log(copy);
    }
    cleanScream();
}







