const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code Img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return; //if input is empty then return from here
    generateBtn.innerText = "Generating QR Code..."
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load",() => { //once Qr code img loaded
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
    // wrapper.classList.add("active");
    
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");

    }
})