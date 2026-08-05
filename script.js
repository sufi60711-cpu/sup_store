function kirimWA() {
    const nomor = "6283183653773";

    const pesan = `Halo Admin Supi Store,

Saya sudah melakukan pembayaran.

Mohon dicek ya.

Terima kasih.`;

    window.open(
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
}