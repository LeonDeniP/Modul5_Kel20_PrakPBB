import React from 'react';

export default function Profile() {
  // Data pengguna
  const users = [
    { nama: "Leonardus Deni Prabowo", pengikut: 160, github: "https://github.com/LeonDeniP", imageUrl: "https://github.com/LeonDeniP/Modul5_Kel20_PrakPBB/blob/main/FotoMonyet.png?raw=true" },
    { nama: "Aura Narendra Maheswara", pengikut: 122, github: "https://github.com/LeonDeniP", imageUrl: "https://github.com/LeonDeniP/Modul5_Kel20_PrakPBB/blob/main/FotoMonyet.png?raw=true" },
    { nama: "Ivan Benhard Sitorus", pengikut: 132, github: "https://github.com/LeonDeniP", imageUrl: "https://github.com/LeonDeniP/Modul5_Kel20_PrakPBB/blob/main/FotoMonyet.png?raw=true" },
    { nama: "Anugrah Excell Palupi", pengikut: 153, github: "https://github.com/LeonDeniP", imageUrl: "https://github.com/LeonDeniP/Modul5_Kel20_PrakPBB/blob/main/FotoMonyet.png?raw=true" }
  ];

  return (
    <div style={{ backgroundColor: "#1E1E2A", height: "100vh", padding: "20px" }}>
      {/* Kotak Data Diri */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        height: "80vh"
      }}>
        {users.map((user, index) => (
          <div key={index} style={{
            backgroundColor: "#2D2D3A",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "250px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"
          }}>
            <img 
              src={user.imageUrl} 
              alt="Foto Profil" 
              style={{ 
                borderRadius: "50%", 
                marginBottom: "20px",
                width: "100px", // Ukuran lebar gambar
                height: "100px" // Ukuran tinggi gambar
              }} 
            />
            <h2 style={{ color: "white" }}>Nama: {user.nama}</h2>
            <p style={{ color: "white" }}>Pengikut: {user.pengikut}</p>
            <a 
              href={user.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#3C4DFE", textDecoration: "none", fontWeight: "bold" }}
            >
              Profil GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
