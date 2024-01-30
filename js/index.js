// <<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    var plusButtons = document.querySelectorAll('.menu button[id^="plus"]');
    plusButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var inputElement = button.previousElementSibling;
        tambahNilai(inputElement, button);
      });
    });

    var inputElements = document.querySelectorAll('.menu input[type="number"]');
    inputElements.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        validasiNilai(inputElement);
      });
    });
  });

  function tambahNilai(inputElement, button) {
    var currentValue = parseInt(inputElement.value);
    if (currentValue < 10) {
      inputElement.value = currentValue + 1;
      hideNotification(button);
    } else {
      inputElement.value = 10;
      showNotification(button);
    }
  }

  function validasiNilai(inputElement) {
    var currentValue = parseInt(inputElement.value);
    if (currentValue > 10) {
      inputElement.value = 10;
    }
  }

  function showNotification(button) {
    var notification = button.nextElementSibling;
    notification.style.display = 'block';
    setTimeout(function () {
      hideNotification(button);
    }, 3000);
  }

  function hideNotification(button) {
    var notification = button.nextElementSibling;
    notification.style.display = 'none';
  }



function addNotif(){
    const notifData=document.getElementById('notifData');
    notifData.style.display='flex';
}
function removeNotif(){
    const notifData=document.getElementById('notifData');
    notifData.style.display='none';
}


function kirimWa(){
    
    // const no='+6285791256693';
    const no='+6285176984188';

    menu1=document.getElementById('menu-1').value;
    menu2=document.getElementById('menu-2').value;
    menu3=document.getElementById('menu-3').value;
    menu4=document.getElementById('menu-4').value;
    nama=document.getElementById('nama').value;
    kelas=document.getElementById('kelas').value;
    jurusan=document.getElementById('jurusan').value;
    keterangan=document.getElementById('keterangan').value;

    if (!/[a-zA-Z]/.test(keterangan)) {
        keterangan = 'Tidak Ada Pesan';
    }

    var url= "https://wa.me/"+no+"?text="
    +"*Data Diri :* %0a%0a"
    +"Nama      : "+nama+"%0a"
    +"Kelas       : "+kelas+"%0a"
    +"Jurusan   : "+jurusan+"%0a"
    +"Pesan      : "+keterangan+"%0a%0a%0a"
    +"*Pesanan :* %0a%0a"
    +"Menu-1 : "+menu1+"%0a"
    +"Menu-2 : "+menu2+"%0a"
    +"Menu-3 : "+menu3+"%0a"
    +"Menu-4 : "+menu4+"%0a%0a"
    +"Terima Kasih 🙏";

    window.open(url,'_blank').focus();
}

function kirimTele() {
   var nama = document.getElementById('nama');
   var kelas = document.getElementById('kelas');
   var jurusan = document.getElementById('jurusan');
   var pesan = document.getElementById('pesan');

   var gabungan = 'nama%20%3A%0' + nama.value + 'kelas%20%3A%0A' + kelas.value + 'jurusan%20%3A%0A' + jurusan.value + 'seller%20%3A%0A' + pesan.value 

   var token = '6525268741:AAHYijcErRW9c9QtD1551z1fBzOoaNCKKNE';
   var grup = '-1002091826166';

   $.ajax({
      url: 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html',
      method: 'POST',

   })
}
// =======
document.addEventListener('DOMContentLoaded', function () {
    var plusButtons = document.querySelectorAll('.menu button[id^="plus"]');
    plusButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var inputElement = button.previousElementSibling;
        tambahNilai(inputElement, button);
      });
    });

    var inputElements = document.querySelectorAll('.menu input[type="number"]');
    inputElements.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        validasiNilai(inputElement);
      });
    });
  });

  function tambahNilai(inputElement, button) {
    var currentValue = parseInt(inputElement.value);
    if (currentValue < 10) {
      inputElement.value = currentValue + 1;
      hideNotification(button);
    } else {
      inputElement.value = 10;
      showNotification(button);
    }
  }

  function validasiNilai(inputElement) {
    var currentValue = parseInt(inputElement.value);
    if (currentValue > 10) {
      inputElement.value = 10;
    }
  }

  function showNotification(button) {
    var notification = button.nextElementSibling;
    notification.style.display = 'block';
    setTimeout(function () {
      hideNotification(button);
    }, 3000);
  }

  function hideNotification(button) {
    var notification = button.nextElementSibling;
    notification.style.display = 'none';
  }



function addNotif(){
    const notifData=document.getElementById('notifData');
    notifData.style.display='flex';
}
function removeNotif(){
    const notifData=document.getElementById('notifData');
    notifData.style.display='none';
}


function kirimWa(){
    
    // const no='+6285791256693';
    const no='+6285176984188';

    menu1=document.getElementById('menu-1').value;
    menu2=document.getElementById('menu-2').value;
    menu3=document.getElementById('menu-3').value;
    menu4=document.getElementById('menu-4').value;
    nama=document.getElementById('nama').value;
    kelas=document.getElementById('kelas').value;
    jurusan=document.getElementById('jurusan').value;
    keterangan=document.getElementById('keterangan').value;

    if (!/[a-zA-Z]/.test(keterangan)) {
        keterangan = 'Tidak Ada Pesan';
    }

    var url= "https://wa.me/"+no+"?text="
    +"*Data Diri :* %0a%0a"
    +"Nama      : "+nama+"%0a"
    +"Kelas       : "+kelas+"%0a"
    +"Jurusan   : "+jurusan+"%0a"
    +"Pesan      : "+keterangan+"%0a%0a%0a"
    +"*Pesanan :* %0a%0a"
    +"Menu-1 : "+menu1+"%0a"
    +"Menu-2 : "+menu2+"%0a"
    +"Menu-3 : "+menu3+"%0a"
    +"Menu-4 : "+menu4+"%0a%0a"
    +"Terima Kasih 🙏";

    window.open(url,'_blank').focus();
// >>>>>>> 47a05bdbce591a3837f6d07f9298fe25051a6316
}