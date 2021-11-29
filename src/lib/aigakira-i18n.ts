import { writable, derived } from 'svelte/store'
import TranslationResult from './TranslationResult'

let chosen = writable("")

let library = writable({})

let dictionary = derived([library, chosen], ([ $library, $chosen ]) => {
    return $library[$chosen] ?? {}
})

let translation = derived(dictionary, ( $dictionary: any ) => {
    return (field: string, interpolation: object = {}) => {
        let trueValue = $dictionary
    
        for( let node of field.split('.')){
            trueValue = trueValue?.[node]
        }

        // let returnedValue: any

        // if( trueValue ){
        //     returnedValue = trueValue

        //     if( trueValue instanceof String ){
        //         for(let field in interpolation){
        //             returnedValue = returnedValue.replace(`{${field}}`, interpolation[field])
        //         }
        //     }
        // }

        let result = new TranslationResult(trueValue, interpolation)

        return result
    }
})

export const add = (name: string , dictionary: object) => {
    library.update(stored => ({
        ...stored,
        [name] : dictionary
    }))
}

export const use = (name: string) => {
    chosen.update(x => name)
}

export default translation