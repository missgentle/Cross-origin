import $ from 'jquery';
import * as utils from '../business/utils';

abstract class Base {

  constructor(){
    $( window ).on( 'load', ()=>{
      if (navigator.onLine) {
        $('#indicator').hide();
      }else {
        $('#indicator').show();
      }
      this.initiate();

      $(window).on('online',()=>{
        $('#indicator').hide();
      });

      $(window).on('offline',()=>{
        $('#indicator').show();
      });
    });
    
  }

  abstract initiate():void;
}

export default Base;
