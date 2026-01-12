## **🔐 Emr3Code – 2 Aşamalı Doğrulama Sistemi**

**Proje, bir kullanıcının gerçek bir insan mı yoksa otomatik bir bot mu olduğunu ayırt etmeyi amaçlayan, hafif ve etkili bir 2 aşamalı doğrulama (2FA) uygulamasıdır. Özellikle basit bot saldırılarına karşı ek bir güvenlik katmanı sağlamak için tasarlanmıştır.**

🧠 Sistem Nasıl Çalışır?
- Doğrulama süreci iki temel adımdan oluşur:

1️⃣ Dinamik Kod Üretimi

- Uygulamanın üst kısmında yer alan kod:
- 5 karakterlidir
- Sürekli olarak değişir
- Her yenilemede veya belirli bir zaman aralığında yeniden üretilir
- Tahmin edilmesi veya sabitlenmesi zordur
- Bu kod, kullanıcının gerçekten ekrandaki bilgiyi okuyup okuyamadığını test eder.

2️⃣ Kullanıcı Doğrulaması

- Kullanıcıdan beklenen işlem:
- Ekranda gösterilen dinamik 5 karakterli kodu
- Alt kısımdaki giriş alanına doğru şekilde girmesidir
- Girilen kod ile üretilen kod eşleşirse doğrulama başarılı olur ve kullanıcı bir sonraki aşamaya geçebilir.

🎯 Amaç ve Kullanım Alanları

- Bot ve script tabanlı girişleri engellemek
- Basit ama etkili bir insan doğrulama mekanizması oluşturmak
- CAPTCHA benzeri sistemlere alternatif, daha sade bir çözüm sunmak
- Giriş ekranları, formlar veya kritik işlemler öncesi ek güvenlik sağlamak

🛠️ Teknik Notlar

- Sistem hafif ve hızlıdır, kullanıcı deneyimini yormaz
- Görsel karmaşa olmadan yalnızca gerekli bilgiyi sunar
- Zaman tabanlı veya olay tabanlı kod üretimi desteklenebilir
- Geliştirilmeye ve farklı doğrulama senaryolarına açık bir yapıya sahiptir
