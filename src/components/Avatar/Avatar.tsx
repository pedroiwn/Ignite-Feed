import styles from './style.module.css';
import { ImgHTMLAttributes } from 'react';

interface Avatarprops extends ImgHTMLAttributes<HTMLImageElement> {
   hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: Avatarprops) {
console.log(props);

 return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
   {...props}
    />
 );
}
