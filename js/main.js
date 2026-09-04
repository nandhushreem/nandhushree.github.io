(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const data = PORTFOLIO;

  // ---------- Content rendering ----------
  document.title = `${data.person.name} — AI & GenAI`;
  $("#availability").textContent = data.person.tagline;
  $("#heroIntro").textContent = data.person.intro;
  $("#heroResume").href = data.person.resume;
  $("#resumeLink").href = data.person.resume;

  $("#miniStats").innerHTML = data.stats.map(s => `<div class="mini-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join("");
  $("#marqueeTrack").innerHTML = [...data.focus, ...data.focus].map(x => `<span>${x}</span><b>✦</b>`).join("");

  $("#projectGrid").innerHTML = data.projects.map((p) => `
    <article class="project-card tilt" tabindex="0">
      <div class="project-top"><span>${p.number}</span><a href="${p.link || '#'}" ${p.link && p.link !== '#' ? 'target="_blank" rel="noreferrer"' : ''}>↗</a></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </article>`).join("");

  $("#skillList").innerHTML = data.skills.map((s, i) => `
    <div class="skill-row" data-index="${i}"><span class="skill-icon">${s.icon}</span><div><strong>${s.name}</strong><small>${s.level}</small></div><span class="arrow">↗</span></div>
  `).join("");

  $("#achievementGrid").innerHTML = data.achievements.map(a => `
    <article class="achievement-card tilt" tabindex="0">
      <div class="achievement-icon">${a.icon}</div><span class="achievement-label">${a.label}</span>
      <h3>${a.title}</h3><p>${a.subtitle}</p>
    </article>`).join("");

  $("#aboutTitle").textContent = data.about.title;
  $("#aboutText").textContent = data.about.text;
  $("#principles").innerHTML = data.about.principles.map((p, i) => `<span><b>0${i+1}</b>${p}</span>`).join("");
  $("#contactText").textContent = data.contact.text;
  $("#contactLinks").innerHTML = data.contact.links.map(l => `<a href="${l.href}" ${l.external ? 'target="_blank" rel="noreferrer"' : ''}><span>${l.label}</span><b>↗</b></a>`).join("");
  $("#year").textContent = new Date().getFullYear();

  // Reveal content as it enters the viewport, while keeping it visible for reduced motion.
  const revealItems = $$(".section, .marquee, .hero-copy, .hero-stage");
  revealItems.forEach(item => item.classList.add("reveal"));
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: .14 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  // ---------- Mobile nav ----------
  const menu = $("#menuBtn");
  const mobile = $("#mobileNav");
  menu.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
  $$("#mobileNav a").forEach(a => a.addEventListener("click", () => {
    mobile.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));

  // ---------- Cursor glow ----------
  const glow = $(".cursor-glow");
  window.addEventListener("pointermove", e => {
    document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
    document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    if (glow) { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }
  }, { passive: true });

  // ---------- 3D tilt ----------
  const finePointer = matchMedia("(pointer:fine)").matches;
  if (finePointer && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".tilt").forEach(card => {
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => card.style.transform = "");
    });
  }

  // ---------- Skill interaction ----------
  $$(".skill-row").forEach(row => row.addEventListener("mouseenter", () => {
    $$(".skill-row").forEach(r => r.classList.remove("active"));
    row.classList.add("active");
  }));
  $$(".skill-row").forEach(row => row.addEventListener("focus", () => row.dispatchEvent(new Event("mouseenter"))));

  // ---------- Three.js hero ----------
  const canvas = $("#heroCanvas");
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || typeof THREE === "undefined" || prefersReduced) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  camera.position.z = 7;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));

  const group = new THREE.Group();
  scene.add(group);

  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.05, 2),
    new THREE.MeshBasicMaterial({ color: 0xaab4ff, wireframe: true, transparent: true, opacity: .72 })
  );
  group.add(ico);

  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.28, 1),
    new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: .28 })
  );
  group.add(inner);

  const particles = new THREE.BufferGeometry();
  const count = 380;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i*3] = (Math.random() - .5) * 11;
    positions[i*3+1] = (Math.random() - .5) * 8;
    positions[i*3+2] = (Math.random() - .5) * 7;
  }
  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const dots = new THREE.Points(particles, new THREE.PointsMaterial({ color: 0xe4e8ff, size: .028, transparent: true, opacity: .48 }));
  scene.add(dots);

  let tx = 0, ty = 0;
  window.addEventListener("pointermove", e => {
    tx = (e.clientX / innerWidth - .5) * .75;
    ty = (e.clientY / innerHeight - .5) * .45;
    const stage = canvas.parentElement;
    const bounds = stage.getBoundingClientRect();
    if (e.clientX >= bounds.left && e.clientX <= bounds.right && e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
      stage.style.setProperty("--stage-x", `${((e.clientX - bounds.left) / bounds.width - .5) * 2}`);
      stage.style.setProperty("--stage-y", `${((e.clientY - bounds.top) / bounds.height - .5) * 2}`);
    }
  }, { passive: true });

  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize);
  resize();

  let t = 0;
  function animate() {
    t += .005;
    requestAnimationFrame(animate);
    group.rotation.x += (ty - group.rotation.x) * .03;
    group.rotation.y += (tx - group.rotation.y) * .03;
    ico.rotation.z += .0016;
    inner.rotation.z -= .0024;
    dots.rotation.y = t * .07;
    dots.rotation.x = t * .02;
    renderer.render(scene, camera);
  }
  animate();
})();
