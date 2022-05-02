function autoResize(){
    txtAreaUser = document.querySelector('.userTxt');
        while (txtAreaUser.scrollHeight > txtAreaUser.offsetHeight)
        {
            txtAreaUser.rows += 1;
        }
    txtArea = document.querySelector('.message'); 
        while (txtArea.scrollHeight > txtArea.offsetHeight)
        {
            txtArea.rows += 1;
        }
}
autoResize();

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

function cleanScream() {
    document.querySelector('.userTxt').value = "";
    document.querySelector('.message').value = "";
}

function buttonDecrypt() {
    let second = document.querySelector('.message').value; //take the .message and put the text encrypted as value.
    let decryptedTxt = ""; // here it's saved all the values, becaming the decryptTxt value.
    if (second != "") {  // if the second let it's not empty, has a text, so...
        decryptedTxt.replaceAll('ai', 'a');
        decryptedTxt.replaceAll('enter', 'e');
        decryptedTxt.replaceAll('imes', 'i');
        decryptedTxt.replaceAll('ober', 'o');
        decryptedTxt.replaceAll('uber', 'u');

        document.querySelector('.message').value = decryptedTxt;
        cleanScream();
    } else {
        document.querySelector('.userTxt').value = decryptedTxt;
    }
   
}

cleanScream();


