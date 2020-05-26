function arrayBufferToBase64( buffer, callback ) {
    var blob = new Blob([buffer],{type:'application/octet-binary'});
    var reader = new FileReader();
    reader.onload = function(evt){
        var dataurl = evt.target.result;
        callback(dataurl.substr(dataurl.indexOf(',')+1));
    };
    reader.readAsDataURL(blob);
}

var buf = new Uint8Array([11,22,33])

arrayBufferToBase64(buf, (res) => {
    console.log(res)

})