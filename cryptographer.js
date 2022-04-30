//var buttonDecrypt = document.querySelector('#decrypt');
//buttonDecrypt.addEventListener('click', teste);

function buttonEncrypt() {
    let userTxt = document.querySelector('#txt').value; // text encrypted already
    let encryptedTxt = "";
    if (userTxt != "") {

        for (var i = 0; i < userTxt.length; i++) {
            switch (userTxt[i]) {
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

                default: encryptedTxt += userTxt[i];
                console.log(encryptedTxt);
            }

        }

        document.querySelector('#encrypted-txt').value = encryptedTxt;
        cleanScream();


    }

    function cleanScream() {
        document.querySelector('#txt').value = "";
    }
}

function buttonDecrypt() {
    let txt = document.querySelector('.message').value; // text encrypted already
    let decryptedTxt = "";
    if (txt != "") {
        replaceAll('ai','a');
        replaceAll('enter', 'e');
        replaceAll('imes', 'i');
        replaceAll('ober', 'o');
        replaceAll('ufat', 'u');   
    }
    document.querySelector('#decrypted.txt').value = decryptedTxt;
}    


