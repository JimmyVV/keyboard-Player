let AudioContext = window.AudioContext || window.webkitAudioContext;

export default class Context{
    constructor(){
        this._context = new AudioContext();
    }
}