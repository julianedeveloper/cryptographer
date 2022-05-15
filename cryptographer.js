function buttonEncrypt() {

    let first = document.querySelector('.userTxt').value; // text encrypted already
    let image = document.querySelector('.message').value;
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

        image.style.backgroundImage = "none";
        document.querySelector('.message').value = encryptedTxt;
        document.querySelector('.userTxt').value = "";
        console.log(encryptedTxt);

    } else {

        alert('First of all, insert a message to encrypt, please.');

    }
}

function buttonDecrypt() {
    console.log(document.querySelector(".message"));
    let second = document.querySelector('.userTxt').value; //take the .message and put the text encrypted as value.
    console.log(second);
    let decryptedTxt = ""; // here it's saved all the values, becaming the decryptTxt value.
    if (second != "") {  // if the second let it's not empty, has a text, so...
        decryptedTxt = second.replaceAll('ai', 'a');
        console.log( decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('enter', 'e');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('imes', 'i');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('ober', 'o');
        console.log(decryptedTxt);
        decryptedTxt = decryptedTxt.replaceAll('ufat', 'u');
        console.log(decryptedTxt);
        
        
        document.querySelector('.message').value = decryptedTxt;
        console.log(decryptedTxt);
        document.querySelector('.userTxt').value = "";
        
    } else {

        alert('First of all, insert a message to decrypt please.');

    }
}

function buttonCopy() {

    let copyText = document.querySelector('.message').value;
    let copy = "";
    if (copyText != "") {

        navigator.clipboard.writeText(copyText);
        document.querySelector('.message').value = copy;
        console.log(copy);
        alert ('Text sucessfully copied!');
        document.querySelector('.message').value = "";
        document.querySelector('.userTxt').value = "";
    }
}







