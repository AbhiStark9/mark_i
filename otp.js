let bodytag = document.body;
bodytag.addEventListener("keydown", (e)=>{
    console.log(e);
})

let otpinputboxtag = document.querySelectorAll('.otp-num')
console.log(otpinputboxtag);

otpinputboxtag.forEach((element, index) => {
    element.addEventListener("keydown", (e)=>{
        if(e.key >= 0 && e.key<10){
            otpinputboxtag[index].value = "";
            // timepass
            setTimeout(()=>{
                otpinputboxtag[index+1].focus()
            }, 0)
        }
        else if (e.key === 'backspace') {
            otpinputboxtag[index-2].focus()
        }
        console.log(index);
    })
});