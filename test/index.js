import '../src/lib/polyfill';
import Loader from '../src/lib/loader';
import Player  from '../src/play';
import keyboard from 'keyboardjs';
import {guitar,drum,bass} from '../src/lib/musicData';

const log = console.log.bind(console);


class Controller{
    constructor(){


        this._targetData = guitar;

        // now we could get the all the media resources.
        this._main();
        this._getChoice();

        this._player = new Player();
    }
    onChange(choice){
        switch(choice){
            case "guitar":
                this._targetData = guitar;
            break;
            case "drum":
                this._targetData = drum;
            break;
            case "bass":
                this._targetData = bass;
            default:

        }

        this._main();
    }
    _main(){
        this._music = this._targetData.data;
        this._loader = new Loader({musicData: this._targetData});
        this._loader.download();
        this._bindKeys();
    }

    _getChoice(){
        this._input = document.getElementById('musci-choice');

        this._input.addEventListener('change',
        (e)=>{

            this.onChange(e.target.value);

        },false);
    }
    _bindKeys(){
        keyboard.reset();

        Object.keys(this._music).forEach(key=>{
            debugger
            let player = this._player.createPlay();

            keyboard.on(key,(e)=>{
                e.preventRepeat();
                // press down
                player.play(this._music[key].buffer,key);

            },()=>{
                // press up
                // player.stop();
            });
        })
    }
}



new Controller()