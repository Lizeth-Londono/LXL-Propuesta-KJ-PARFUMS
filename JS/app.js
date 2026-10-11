

/* ==================================================
   DATOS: catálogo de demostración
   ================================================== */
const products=[{id:1,name:'Aura Floral',family:'Floral',desc:'Concepto aromático inspirado en pétalos suaves y notas luminosas.'},{id:2,name:'Brisa Clara',family:'Fresco',desc:'Concepto aromático de frescura ligera, ideal para explorar preferencias.'},{id:3,name:'Madera Nocturna',family:'Amaderado',desc:'Concepto aromático de matices cálidos y profundidad envolvente.'}];
/* ==================================================
   ESTADO: selección y producto activo
   ================================================== */
const selection={};let current=null;
/* ==================================================
   SELECTORES Y FUNCIONES DE INTERFAZ
   ================================================== */
const $=s=>document.querySelector(s);function renderCards(f='Todas'){$('#cards').innerHTML=products.filter(p=>f==='Todas'||p.family===f).map(p=>`<article class="card"><div class="productart" role="img" aria-label="Frasco ilustrativo ficticio"><div class="mini"></div></div><div class="cardbody"><div class="tag">Concepto ficticio · ${p.family}</div><h3>${p.name}</h3><p>${p.desc}</p><p class="notice">Precio y disponibilidad no definidos</p><button class="outline" onclick="openProduct(${p.id})">Ver detalles →</button></div></article>`).join('')}function openProduct(id){current=products.find(p=>p.id===id);$('#modalTitle').textContent=current.name;$('#modalText').textContent=current.desc;$('#modal').classList.add('show');$('#close').focus()}function closeModal(){$('#modal').classList.remove('show')}function renderCart(){let entries=Object.entries(selection);let n=entries.reduce((s,[,q])=>s+q,0);$('#count').textContent=`(${n})`;$('#cartCount').textContent=`(${n})`;$('#cart').innerHTML=entries.length?entries.map(([id,q])=>{let p=products.find(x=>x.id==id);return `<div class="cartrow"><div><strong>${p.name}</strong><div class="notice">Demostración</div></div><div><label>Cant. <input aria-label="Cantidad de ${p.name}" class="qty" type="number" min="1" max="99" value="${q}" onchange="setQty(${id},this.value)"></label><button style="background:none;border:0;color:var(--gold)" onclick="removeItem(${id})" aria-label="Quitar ${p.name}">×</button></div></div>`}).join(''):'<p>Aún no has seleccionado fragancias.</p>'}function setQty(id,q){selection[id]=Math.max(1,Math.min(99,Number(q)||1));renderCart()}function removeItem(id){delete selection[id];renderCart()}
/* ==================================================
   EVENTOS E INTERACCIONES
   ================================================== */
$('#add').onclick=()=>{selection[current.id]=(selection[current.id]||0)+1;renderCart();closeModal()};$('#close').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderCards(b.dataset.filter)});$('#guide').onclick=()=>{let f=$('#pref').value;if(!f){$('#guideResult').textContent='Selecciona una familia para continuar.';return}document.querySelector(`[data-filter="${f}"]`).click();$('#guideResult').textContent=`Mostrando conceptos ${f.toLowerCase()}s en el catálogo.`;$('#coleccion').scrollIntoView({behavior:'smooth'})};$('#quote').onclick=()=>{let names=Object.entries(selection).map(([id,q])=>`${products.find(p=>p.id==id).name} × ${q}`);$('#quoteResult').textContent=names.length?'Borrador de solicitud (no enviado): '+names.join(', ')+'. Se requiere catálogo real y canal de recepción autorizado.':'Agrega al menos una fragancia para preparar tu solicitud.'};$('#contactForm').onsubmit=e=>{e.preventDefault();$('#formResult').textContent='Demostración completada. No se ha enviado ni guardado ningún dato.'};
/* ==================================================
   INICIALIZACIÓN DEL CATÁLOGO
   ================================================== */
renderCards();renderCart();


/* ==================================================
   RECURSOS MULTIMEDIA OPCIONALES
   ================================================== */
// Recursos opcionales: si no existen, se mantiene la composición visual original.
document.querySelectorAll('.media-user-image').forEach(img=>{img.addEventListener('load',()=>img.classList.add('loaded'));img.addEventListener('error',()=>img.classList.remove('loaded'));if(img.complete&&img.naturalWidth)img.classList.add('loaded')});
document.querySelectorAll('.media-user-video').forEach(video=>{video.addEventListener('loadeddata',()=>{video.classList.add('loaded');video.play().catch(()=>{})});video.addEventListener('error',()=>video.classList.remove('loaded'));video.load()});
