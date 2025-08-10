Matrix — портфолио сайт (тъмна неонова визия)
==============================================

Файлове в архива:
- index.html
- styles.css
- script.js
- products.json
- images/ (три примерни SVG изображения)
- README_DEPLOY.txt (инструкции за качване в GitHub Pages)
- video_script.txt (скрипт/навигация за кратко видео-инструкция)

Как да добавиш продукт (лесен начин):
1. Качваш изображение в папката `images/`. Препоръчителни размери: 1200x800 px.
2. Отваряш `products.json` и добавяш обект:
   {
     "image": "filename.jpg",
     "title": "Заглавие на продукта",
     "description": "Кратко описание"
   }
3. Запазваш и презареждаш сайта — новият продукт ще се покаже автоматично.

README_DEPLOY.txt — кратки стъпки за GitHub Pages:
1) Създай нов публичен GitHub репозиториум (например: matrix-site).
2) Клонирай го локално:
   git clone https://github.com/ТВОЕ-ПОЛЗВАТЕЛСКО/matrix-site.git
3) Копирай всички файлове от този архив в клонираното folder и комитни:
   git add .
   git commit -m "Initial Matrix portfolio site"
   git push origin main
4) Отиди в Settings > Pages и избери Branch: main, Folder: / (root). Запази.
5) След няколко минути сайтът ще е достъпен на https://ТВОЕ-ПОЛЗВАТЕЛСКО.github.io/matrix-site

Бележки:
- Ако променяш files директно в GitHub web UI, не забравяй да качиш и снимките в папката images.
- За локално тестиране използвай прост HTTP сървър (например `python -m http.server 8000`) и отвори localhost:8000.

