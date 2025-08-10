/* script.js - зарежда products.json и анимира Matrix код */
(async function(){
  // Load products.json and render gallery
  async function loadProducts(){
    try{
      const res = await fetch('products.json');
      const products = await res.json();
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = '';
      products.forEach(p=>{
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.src = 'images/' + p.image;
        img.alt = p.title;
        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.innerHTML = '<h4>' + p.title + '</h4><p>' + p.description + '</p>';
        card.appendChild(img);
        card.appendChild(meta);
        gallery.appendChild(card);
      });
    }catch(err){
      console.error('Не можа да се зареди products.json', err);
      document.getElementById('gallery').innerHTML = '<p class="note">Няма продукти или products.json е празен.</p>';
    }
  }

  await loadProducts();

  // Simple Matrix falling code canvas
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / fontSize);
    drops = new Array(cols).fill(1);
  }

  let fontSize = 14;
  let cols = 0;
  let drops = [];
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()';
  const charArr = chars.split('');

  window.addEventListener('resize', resize);
  resize();

  function draw(){
    ctx.fillStyle = 'rgba(5,5,7,0.12)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.font = fontSize + 'px monospace';
    ctx.fillStyle = '#9b59ff'; // base purple glow
    for(let i=0;i<drops.length;i++){
      const text = charArr[Math.floor(Math.random() * charArr.length)];
      ctx.fillStyle = i % 2 === 0 ? '#9b59ff' : '#3498ff';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  draw();

})();