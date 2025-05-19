export default {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`✅ ${client.user.tag} olarak giriş yapıldı!`);
  }
};
// Bu dosya, botun hazır olduğunda çalışacak olan bir event tanımıdır.
// Botun giriş yapıldığında konsola bir mesaj yazdırır.
// Bu dosya, botun hazır olduğunda çalışacak olan bir event tanımıdır.