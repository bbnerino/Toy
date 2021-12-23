<template>
  <div>
    <div class="form-container">
  <form class="form-2" action="">
    <lable>Enter password
      <input class="input-2" type="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;">
      </lable>
    <div class="progress-bar_wrap">
      <div class="progress-bar_item progress-bar_item-1"></div>
      <div class="progress-bar_item progress-bar_item-2"></div>
      <div class="progress-bar_item progress-bar_item-3"></div>
    </div>
    <span class="progress-bar_text">Password is blank</span>
  </form>
</div>
  </div>
</template>

<script>
import $ from 'jquery'
$( document ).ready(function() {
  
  const changeText = function (el, text, color) {
    el.text(text).css('color', color);
  };
  
  $('.input-1').keyup(function(){
    let len = this.value.length;
    const pbText = $('.form-1 .progress-bar_text');

    if (len === 0) {
      $('.form-1 .progress-bar_item').each(function() {
        $(this).removeClass('active')
      });
      $('.form-1 .active').css('background-color', 'transparent');
      changeText(pbText, 'Password is blank');
    } else if (len > 0 && len <= 4) {
      $('.form-1 .progress-bar_item-1').addClass('active');
      $('.form-1 .progress-bar_item-2').removeClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#FF4B47');
      changeText(pbText, 'Too weak');
    } else if (len > 4 && len <= 8) {
      $('.form-1 .progress-bar_item-2').addClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#F9AE35');
      changeText(pbText, 'Could be stronger');
    } else {
      $('.form-1 .progress-bar_item').each(function() {
        $(this).addClass('active');
      });
      $('.form-1 .active').css('background-color', '#2DAF7D');
      changeText(pbText, 'Strong password');
    } 
  });
  
  $('.input-2').keyup(function(){
    let len = this.value.length;
    const pbText = $('.form-2 .progress-bar_text');

    if (len === 0) {
      $('.form-2 .progress-bar_item').each(function() {
        $(this).removeClass('active')
      });
      changeText(pbText, 'Password is blank');
    } else if (len > 0 && len <= 4) {
      $('.form-2 .progress-bar_item-1').addClass('active');
      $('.form-2 .progress-bar_item-2').removeClass('active');
      $('.form-2 .progress-bar_item-3').removeClass('active');
      changeText(pbText, 'Too weak');
    } else if (len > 4 && len <= 8) {
      $('.form-2 .progress-bar_item-2').addClass('active');
      $('.form-2 .progress-bar_item-3').removeClass('active');
      changeText(pbText, 'Could be stronger');
    } else {
      $('.form-2 .progress-bar_item').each(function() {
        $(this).addClass('active');
      });
      changeText(pbText, 'Strong password');
    } 
  });
  
  $('.input-3').keyup(function(){
    let len = this.value.length;
    const pbText = $('.form-3 .progress-bar_text');

    if (len === 0) {
      $(this).css('border-bottom-color', '#2F96EF');
      changeText(pbText, 'Password is blank', '#aaa');
    } else if (len > 0 && len <= 4) {
      $(this).css('border-bottom-color', '#FF4B47');
      changeText(pbText, 'Too weak', '#FF4B47');
    } else if (len > 4 && len <= 8) {
      $(this).css('border-bottom-color', '#F9AE35');
      changeText(pbText, 'Could be stronger', '#aaa');
    } else {
      $(this).css('border-bottom-color', '#2DAF7D');
      changeText(pbText, 'Strong password');
    } 
  });
  
  $('.input-4').keyup(function(){
    let len = this.value.length;
    const pbText = $('.form-4 .progress-bar_text');

    if (len === 0) {
      $(this).css('border-color', '#2F96EF');
      changeText(pbText, 'Password is blank', '#aaa');
    } else if (len > 0 && len <= 4) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Too weak', '#FF4B47');
    } else if (len > 4 && len <= 8) {
      $(this).css('border-color', '#F9AE35');
      changeText(pbText, 'Could be stronger', '#F9AE35');
    } else {
      $(this).css('border-color', '#2DAF7D');
      changeText(pbText, 'Strong password', '#2DAF7D');
    } 
  });
  
});

export default {
  name:'Password',

}
</script>

<style scoped>
  body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.form-container {
  display: block;
  width: 500px;
  margin: 60px auto;
  text-align: left;
}

lable {
  display: block;
  position: relative;
  text-transform: uppercase;
  color: #aaa;
}

input[type='password'] {
  width: 100%;
  box-sizing: border-box;
  height: 55px;
  display: inline-block;
  border: 3px solid #2F96EF;
  border-radius: 5px;
  padding: 0 15px;
  margin: 10px 0;
  transition: .2s;
}

input[type='password']:focus {
  outline: none;
   -moz-outline: none;
   -webkit-outline: none;
}

lable:before {
  content: "\f070";
  color: #aaa;
  font-size: 22px;
  font-family: FontAwesome;
  position: absolute;
  right: 25px;
  top: 44px;
}

.progress-bar_wrap {
  width: 300px;
  height: 5px;
  background: #F6F6FA;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  border-radius: 5px;
}



.form-1 .progress-bar_item {
  display: inline-block;
  height: 100%;
  width: 33.33%;
  float: left;
  visibility: hidden;
  transition: background-color .2s, visisility .1s;
}

.form-1 .active {
  visibility: visible;
}



.progress-bar_text {
  display: inline-block;
  color: #aaa;
  margin-left: 5px;
  transition: .2s;
}



.form-2 .progress-bar_item {
  display: inline-block;
  height: 100%;
  width: 32.5%;
  margin-right: .8%;
  border-radius: 5px;
  float: left;
  transition: background-color .2s, visisility .1s;
}

.form-2 .progress-bar_item-1.active {
  background-color: #FF4B47;
}

.form-2 .progress-bar_item-2.active {
  background-color: #F9AE35;
}

.form-2 .progress-bar_item-3.active {
  background-color: #2DAF7D;
}

</style>