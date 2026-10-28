import React from 'react';
import ReactDOM from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import {Site} from './Site';
import './styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><MotionConfig reducedMotion="user"><Site path={window.location.pathname}/></MotionConfig></React.StrictMode>);
