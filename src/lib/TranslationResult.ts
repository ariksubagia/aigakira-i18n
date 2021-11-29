export interface TranslationEntity{
    get(alternativeValue: any) : any
    plural(counter: number) : TranslationEntity
}

export default class TranslationResult implements TranslationEntity{
    private translationValue: any
    private pluralCounter: number = 1
    private interpolation: object = {}

    constructor( value: any, interpolation: object = {} ){
        this.translationValue = value
        this.interpolation = interpolation
    }

    public valueOf(){
        return this.translationValue
    }

    public get( alternativeValue: any = undefined ){
        let candidateValue = this.translationValue

        if(candidateValue instanceof Array){
            candidateValue = this.pluralDetermination(this.pluralCounter, candidateValue)
        }

        return this.interpolate(candidateValue, this.interpolation) ?? alternativeValue
    }

    public plural(counter: number) : TranslationEntity{
        this.pluralCounter = counter
        return this
    }

    private interpolate( str: string, interpolation: object ){
        let candidate = str
        for( let field in interpolation ){
            candidate = candidate.replace(`{${field}}`, interpolation[field])
        }

        return candidate
    }

    private pluralDetermination( counter: number, candidate: any[] ){
        if( candidate.length <= 0 ){
            return undefined
        }

        if( counter <= 0 ){
            return candidate[2] ?? candidate[0]
        }

        if( counter == 1 ){
            return candidate[0]
        }

        if( counter > 1 ){
            return candidate[1] ?? candidate[0]
        }

        return undefined
    }
}