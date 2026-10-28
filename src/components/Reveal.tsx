import {motion,useReducedMotion} from 'motion/react';
import type {ReactNode} from 'react';
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){const reduced=useReducedMotion();return <motion.div className={className} initial={{opacity:0,y:reduced?0:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:reduced?0:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
