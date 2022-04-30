function buttonEncrypt() {
    let userTxt = document.querySelector('#txt').value; // text encrypted already
    let encryptedTxt = "";
    if (userTxt != "") {

        for (var i = 0; i < userTxt.length; i++) {
            switch (userTxt[i])  {
                case 'a' :
                    encryptedTxt += 'ai';
                    break;

                case 'e' :
                    encryptedTxt += 'enter';
                    break;
                
                case 'i' :
                    encryptedTxt += 'imes';
                    break;

                case 'o' :
                    encryptedTxt += 'ober';
                    break;

                case 'u' :
                    encryptedTxt += 'ufat';
                    break;

                default: encryptedTxt += userTxt[i] ;
            }
            
        }

        document.querySelector('#encrypted-txt').value = encryptedTxt;

    }

function cleanScream(){
    document.querySelector('#txt').reset;
}

function buttonDecrypt() {
    cleanScream();

    let txt = document.querySelector('#txt').value; // text encrypted already
    let decryptedTxt = "";
    if (encrypted.Txt != "") {

        for (var i = 0; i < txt.length; i++) {
            
            switch (txt[i])  {
                case 'ai' :
                    encryptedTxt += 'a';
                    break;

                case 'enter' :
                    encryptedTxt += 'e';
                    break;
                
                case 'imes' :
                    encryptedTxt += 'i';
                    break;

                case 'ober' :
                    encryptedTxt += 'o';
                    break;

                case 'ufat' :
                    encryptedTxt += 'u';
                    break;

                default: decryptedTxt += txt[i] ;
            }
            
        }

        document.querySelector('#encryptTxt').value = txt;



        }
    }
}
