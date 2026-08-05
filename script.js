async function cekNickname() {

    const userId = document.getElementById("userId").value.trim();
    const zoneId = document.getElementById("zoneId").value.trim();
    const hasil = document.getElementById("nickname");

    if (!userId || !zoneId) {
        hasil.innerHTML = "❌ Masukkan User ID dan Zone ID";
        hasil.style.color = "red";
        return;
    }

    hasil.innerHTML = "⏳ Sedang mengecek akun...";

    try {

        const response = await fetch("https://www.lyvaindonesia.com/api/v1/game-id/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Lyva-Api-Id": "YOUR_API_ID",
                "X-API-Key": "YOUR_API_KEY"
            },
            body: JSON.stringify({
                game: "mobile-legends",
                userId: userId,
                zoneId: zoneId
            })
        });

        const data = await response.json();

        if (data.result && data.data.valid) {

            hasil.innerHTML = `
                ✅ Nama: ${data.data.nickname}<br>
                🌍 Negara: ${data.data.country.name}
            `;
            hasil.style.color = "#00ff88";

        } else {

            hasil.innerHTML = "❌ ID atau Zone tidak valid";
            hasil.style.color = "red";

        }

    } catch (error) {

        hasil.innerHTML = "❌ Gagal terhubung ke server";
        hasil.style.color = "red";
        console.error(error);

    }

}

/* ===========================
   DANA
=========================== */
function bayarDana() {
    window.location.href = "https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012025010745701326";
}
    window.open(
        <button onclick="bayarDana()">
    💙 Bayar via DANA
</button>
        "_blank"
    );

}


/* ===========================
   GOPAY
=========================== */

function bayarGopay(){

    document.getElementById("infoPembayaran").innerHTML =
    "Nomor GoPay : 083183653773";

}