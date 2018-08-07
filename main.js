document.getElementById('contactForm').addEventListener("submit" , submitForm);
function submitForm(e)
{
    e.preventDefault();   
     var name = getInputVal("name");
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone= getInputVal("phone");
    var message= getInputVal("message");
    //save message
    saveMessage(name, company, email, phone, message);
    document.getElementById('contactForm').reset();
}
function saveMessage(name, company, email, phone, message){
    var messagesRef = firebase.database().ref('messages');
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email: email,
        phone: phone,
        message: message
    });
    toastr["success"]("your message has been sent", "thank you ")

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
  }
//submit form
function getInputVal(id)
{
    return document.getElementById(id).value;
}

