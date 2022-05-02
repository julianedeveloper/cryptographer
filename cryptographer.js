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

function cleanScream() {
    document.querySelector('.userTxt').value = "";
}
cleanScream();

function buttonDecrypt(){
    let second = document.querySelector('.message').value; //take the .message and put the text encrypted as value.
    let decryptedTxt = ""; // here it's saved all the values, becaming the decryptTxt value.
    if (second != ""){  // if the second let it's not empty, has a text, so...
        for (var i = 0; i < second.length; i++){
            switch(second[i]){
                case 'ai':
                    decryptedTxt += 'a';
                    break;
                case 'enter':
                    case 'e':
                    decryptedTxt += 'e';
                case 'imes':
                    decryptedTxt += 'i';
                case 'ober':
                    decryptedTxt += 'o';
                case 'ufat':
                    decryptedTxt += 'u';

                document.querySelector('.userTxt').value = decryptedTxt;
                cleanScream();
            }
        }
    }
}
