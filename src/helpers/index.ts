import {BsArrowRight} from 'react-icons/bs'
import {ReactNode} from 'react'
export const classNameButton = (type:string): string => {
    switch(type){
        case 'navigate' : return 'button__navigate' 
        case 'signIn' : return ''
        default: return 'button__default'        
    }
}

export const iconButton = (type:string) :ReactNode => {
    switch(type){
        case 'navigate' : return null
        case 'signIn' : return 'button_signin'
    default: return ''        
    }
}