var imgClass=document.getElementById('imgClass')
var allWork=document.getElementById('allWork')
var shopWork=document.getElementById('shopWork')
var aboutWork=document.getElementById('aboutWork')
var contactWork=document.getElementById('contactWork')
function show(img) {
    var newImg = document.getElementById("newImg");
    newImg.src = img.querySelector("img").src;
    newImg.style.display = "block"; // Show the enlarged image
    newImg.style.borderRadius='10px'
    allWork.style.display = "none";
    imgClass.style.display="block";
    shopWork.style.display='none';
    aboutWork.style.display='none';
    contactWork.style.display='none';

    


}
function home(){
    newImg.style.display = "none";
    allWork.style.display = "block";
    shopWork.style.display='none'
    imgClass.style.display = "none";
    aboutWork.style.display='none';
    contactWork.style.display='none';

    
}
function shop(){
    newImg.style.display = "none";
    allWork.style.display = "none";
    shopWork.style.display='block'
    imgClass.style.display="none";
    aboutWork.style.display='none';
    contactWork.style.display='none';


}
function contact(){
    contactWork.style.display='block';
    contactWork.style.marginTop='150px'
    newImg.style.display = "none";
    allWork.style.display = "none";
    shopWork.style.display='none'
    imgClass.style.display="none";
    aboutWork.style.display='none';

    
}

function about(){
    newImg.style.display = "none";
    allWork.style.display = "none";
    shopWork.style.display='none'
    imgClass.style.display="none";
    aboutWork.style.display='block';
    aboutWork.style.marginTop='150px';
    contactWork.style.display='none';

}
function back() {
    imgClass.style.display = "none";
    allWork.style.display = "block";
}

if(location.reload = true){
    imgClass.style.display = "none";
    shopWork.style.display='none'
    aboutWork.style.display='none';
    contactWork.style.display='none';

}else{
    imgClass.style.display = "block";
}

function buyNow(button) {
    // Get product details from data attributes
    var productName = button.getAttribute("data-product");
    var productPrice = button.getAttribute("data-price");

    

    // Encode the message to include in the URL
    var message = "Hello, I'm interested in buying The Trendy items which are shown in your website from your website .Could you provide more details?"  ;
    var encodedMessage = encodeURIComponent(message);

    // WhatsApp URL (use phone number with country code)
    var whatsappUrl = "https://wa.me/+923172218320?text=" + encodedMessage;

    // Open WhatsApp with the message
    window.open(whatsappUrl, "_blank");
}

function addCart(){
    Swal.fire({
        title: "Thanks!",
        text: "Added to Cart!",
        icon: "success"
      });
}

function clickNow(){
    var whatsappUrl = "https://wa.me/+923172218320?text=";
    window.open(whatsappUrl, "_blank");
}