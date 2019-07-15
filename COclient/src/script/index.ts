import BaseApp from './PageBase';
import '@/style/index.css';
import itemHbs from '@/handlebars/item.hbs';
import BusinessBase from '../business/BusinessBase';
import * as utils from '../business/utils';
import Parallax from 'parallax-js';
import anime from 'animejs';

class index extends BaseApp {

  COType: string = 'json';

  constructor(){
    super();
  }

  initiate():void{
  	this.initListener();
    this.initPara();
    this.initData();
  }

  initPara(){
    this.COType = utils.getUrlPara('t');
  }

  initListener(){
    window.addEventListener('message', function (e) {
      $('#text').css('color', e.data);
      window.localStorage.setItem('colorpicker',e.data);
      window.parent.postMessage(e.data, '*');
    });
  }

  getData(){
    // BusinessBase.call('getGoods',{COType:this.COType}).then((json:UJsonRespond)=>{
    //   $('#items').append(itemHbs(json.data));
    // })
  }

  initData(){
  	this.getData();
  }

}

new index();
