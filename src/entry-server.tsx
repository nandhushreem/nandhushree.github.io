import {renderToString} from 'react-dom/server';
import {MotionConfig} from 'motion/react';
import {Site,routes,origin} from './Site';
export {routes,origin};
export function render(path:string){return renderToString(<MotionConfig reducedMotion="always"><Site path={path}/></MotionConfig>)}
