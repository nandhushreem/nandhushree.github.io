import {useRef} from 'react';
import {motion,useReducedMotion,useScroll,useTransform} from 'motion/react';
import type {Project} from '../content';
export function ProjectArt({kind}:{kind:Project['visual']}) {
 const artRef=useRef<HTMLDivElement>(null);
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:artRef,offset:['start end','end start']});
 const y=useTransform(scrollYProgress,[0,1],reduced?[0,0]:[28,-28]);
 const scale=useTransform(scrollYProgress,[0,1],reduced?[1,1]:[1.05,1]);
 return <div ref={artRef} className={`project-art ${kind}`} aria-hidden="true"><motion.div className="project-art-inner" style={{y,scale}}>{kind==='terrain'?<><div className="terrain-grid">{Array.from({length:9},(_,i)=><div key={i} style={{height:`${40+((i*37)%90)}px`}}><span/></div>)}</div><span className="art-coordinate">13.0827° N / 77.5877° E</span><span className="art-tag">VOLUMETRIC / 003</span></>:kind==='neural'?<><svg viewBox="0 0 500 280"><defs><radialGradient id="glow"><stop stopColor="#f8f7f7"/><stop offset="1" stopColor="#895d6e"/></radialGradient></defs>{[0,1,2].flatMap(col=>[0,1,2,3].flatMap(row=>[0,1,2,3].map(next=><line key={`${col}-${row}-${next}`} x1={70+col*120} y1={45+row*63} x2={190+col*120} y2={45+next*63} stroke="#f8f7f7" strokeOpacity=".22"/>)))}{[0,1,2,3].flatMap(col=>[0,1,2,3].map(row=><circle key={`${col}-${row}`} cx={70+col*120} cy={45+row*63} r={col===1||col===2?9:6} fill="url(#glow)"/>))}</svg><span className="art-tag">INPUT → POSSIBILITY</span></>:<><div className="flow-node">a question<span>01 / DEFINE</span></div><i>↓</i><div className="flow-node accent">AI + human<span>02 / EXPLORE</span></div><i>↓</i><div className="flow-node">a better idea<span>03 / ITERATE</span></div></>}</motion.div></div>
}
