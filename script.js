// Butonu ve menüyü HTML içinden seçiyoruz
  const profileBtn = document.getElementById('profileBtn');
  const profileMenu = document.getElementById('profileMenu');

  // Profil resmine tıklandığında çalışacak kod
  profileBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Tıklamanın dışarı taşmasını engeller
    profileMenu.classList.toggle('show'); // 'show' sınıfını ekle/çıkar (Aç/Kapat)
  });

  // Kullanıcı sayfada menü dışında herhangi bir yere tıklarsa menüyü kapat
  window.addEventListener('click', function() {
    if (profileMenu.classList.contains('show')) {
      profileMenu.classList.remove('show');
    }
  });

