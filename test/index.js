import Loader from '../src/lib/loader';

const log = console.log.bind(console);

let MusicData = {
    'a':{
        name:'A4',
    },
    's':{
        name:'A6',
    },
    'd':{
        name:'C5',
    },
    'f':{
        name:'D5',
    },
    'g':{
        name:'D7',
    },
    'h':{
        name:'E5',
    },
    'j':{
        name:'E6',
    },
    'k':{
        name:'G4',
    },
    'l':{
        name:'G6',
    },
}


class Controller{
    constructor(){
        this._loader = new Loader(MusicData);

        this._music = this._loader.music;

        this._loader.download();
        // now we could get the all the media resources.

    }
}

new Controller()