import Constellation from './views/constellation';

export default class App {
  constructor() {

  }

  createChildren() {
    this.canvas = document.getElementById('constellation');

    return this;
  }

  initModules() {
  	this.constellationInstance = new Constellation(this.canvas);
  	this.constellationInstance.init();
  }

  init() {
  	this.createChildren()
  		.initModules();
  }

}
