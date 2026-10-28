import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {render,routes,origin} from '../.prerender/entry-server.js';
const template=await readFile('dist/index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [path,name,title,description] of routes){
 const schema={'@context':'https://schema.org','@graph':[{'@type':'Person','@id':origin+'/#person',name:'Nandhushree M',alternateName:['Nandhushree Reddy M','Nandushri M','Nandushri Reddy M','Nandushri Diburahalli'],url:origin+'/',image:origin+'/portrait.webp',description:'Aspiring AI engineer and machine learning research enthusiast; CSE undergraduate at NCET Bengaluru.',sameAs:['https://github.com/nandhushreem','https://in.linkedin.com/in/nandhushreem'],affiliation:{'@type':'CollegeOrUniversity',name:'Nagarjuna College of Engineering & Technology'}},{'@type':'WebPage',name:title,url:origin+path,description,about:{'@id':origin+'/#person'}}]};
 const metadata=`<link rel="canonical" href="${origin+path}"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${origin+path}"><meta property="og:image" content="${origin}/portrait.webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
 const html=template.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/,`<meta name="description" content="${escape(description)}">`).replace('</head>',metadata+'</head>').replace('<div id="root"></div>',`<div id="root">${render(path).replaceAll('opacity:0','opacity:1')}</div>`);
 const folder='dist'+path;await mkdir(folder,{recursive:true});await writeFile(folder+(path.endsWith('/')?'':'/')+'index.html',html);
}
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(([p])=>`<url><loc>${origin+p}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('dist/404.html','<!doctype html><html lang="en"><head><title>Page not found | Nandhushree M</title><meta name="robots" content="noindex"></head><body><h1>Page not found</h1><a href="/">Return to Nandhushree’s portfolio</a></body></html>');
await rm('.prerender',{recursive:true,force:true});
console.log('Prerendered six pages, canonical URLs, structured data and sitemap.');
