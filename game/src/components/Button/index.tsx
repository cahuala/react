import { ComponentProps } from 'react';
import styles from './styles.module.css';
type ButtonProps = ComponentProps<'button'> & { 
    text:string
}
export function Button({ text, ...rest }: ButtonProps) {
  return <button type="button" className={ styles.button } { ...rest }>{ text }</button>;
}