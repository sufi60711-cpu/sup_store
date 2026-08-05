function kirimWA() {
    let nomor = "6283183653773";

    let id = document.getElementById("userId").value;
    let server = document.getElementById("serverId").value;

    let pesan =
`Halo Admin,

Saya ingin melakukan top up Mobile Legends.

🆔 ID : ${id}
🌐 Server : ${server}

Mohon diproses. Terima kasih.`;

    window.open(
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
