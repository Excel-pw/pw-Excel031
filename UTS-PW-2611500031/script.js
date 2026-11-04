// Isi tanggal kunjungan otomatis dengan tanggal hari ini
document.getElementById('tg').value = new Date().toISOString().split('T')[0];

// Validasi form buku tamu
document.getElementById('formTamu').addEventListener('submit', function (e) {
  let ok = true;

  function cek(id, err, pesan) {
    const v = document.getElementById(id).value.trim();
    document.getElementById(err).textContent = v ? '' : pesan;
    if (!v) ok = false;
  }

  cek('nm', 'e_nm', 'Nama lengkap wajib diisi');
  cek('em', 'e_em', 'Email wajib diisi');
  cek('ps', 'e_ps', 'Pesan wajib diisi');

  const em = document.getElementById('em');
  if (em.value && !em.checkValidity()) {
    document.getElementById('e_em').textContent = 'Format email tidak valid';
    ok = false;
  }

  if (!ok) e.preventDefault();
});