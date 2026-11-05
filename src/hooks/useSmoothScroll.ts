import {useEffect} from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
export function useSmoothScroll(reduced:boolean|null){
 useEffect(()=>{if(reduced)return;const lenis=new Lenis({autoRaf:true,anchors:{offset:-90},duration:1.25,smoothWheel:true,wheelMultiplier:.9,touchMultiplier:1.15});return()=>lenis.destroy()},[reduced]);
}
