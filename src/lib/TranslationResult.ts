export interface TranslationEntity{
    alt(s: any) : any
}

export default class TranslationResult{
    private translationValue: any

    constructor( value: any ){
        this.translationValue = value
    }

    public valueOf(){
        return this.translationValue
    }

    public get( alternativeValue: any = undefined ){
        return this.translationValue ?? alternativeValue
    }
}