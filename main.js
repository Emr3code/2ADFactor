function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    document.getElementById("onaylikutu").value=result;
    
    return result;
}

function kodonay(){
    var onaysizkod = document.getElementById("onaysizkutu").value;
    var onaylikod = document.getElementById("onaylikutu").value;

    if(onaysizkod == onaylikod){
        alert("Başarıyla giriş yaptınız siteye aktarılıyorsunuz...")
    }
    else{
        alert("Giriş başarısız (KOD HATALI)")
    }
}