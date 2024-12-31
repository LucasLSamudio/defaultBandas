const funcion={
    isChar: function(xChar){ // Devuelve un boolean en base al char diciendo si es una letra o un carácter especial. (NO toma en cuenta tildes y demás.)
        const charArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
        xChar = xChar.toLowerCase();
        for(let i=0; i<charArr.length; i++){
            if(charArr[i] == xChar){
                return true;
            }
        }
        return false;
    },
    isEspacio: function(str){        // Función que devuelve un booleano diciendo si el string dado es un espacio o no.
        for(let i=0; i<str.length;i++){
            if(str[i] == " "){
                return true;
            }
        }
        return false;
    },
    nuevoStrSinEspacio: function(str){ // Con el string recibido de parámetro, crea un nuevo String hasta que aparece el primer espacio.
        let newStr = "";              // Si no tiene espacio, devuelve el string original.
        for(let i=0; i<str.length;i++){
            if(str[i]== " "){
                return newStr;
            }
            else{
                newStr += str[i];
            }
        }
        return newStr
    },
    sacarCaracteresEspeciales:function(str){ // Devuelve el string dado sin carácteres especiales.
        let newStr = "";
        for(let i=0; i<str.length;i++){ 
            if(!funcion.isEspacio(str[i]) && funcion.isChar(str[i])){
                newStr += str[i];
            }
        }
        return newStr;
    }
}

module.exports = funcion;