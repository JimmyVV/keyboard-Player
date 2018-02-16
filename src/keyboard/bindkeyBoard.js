import keyboard from 'keyboardjs';


class BindKeyboard{
    constructor({
        keyboardEvents
    }){
        // the keyboards
        this._keys = [
            'a',
            's',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
        ]

        this.bind();
    }
    bind(){
        this._keys.forEach(alphba=>{

            keyboard.bind(alphba,()=>{
                keyboardEvents[alphba].apply(null,alphba);
            })

        })
    }
}