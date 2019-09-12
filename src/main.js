import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Cats } from './../src/APItesting.js';


$(document).ready(function(){
  $("#catBtn").click(function()  {
    const catSearch = $("#cat").val();
    console.log(catSearch);

    let catPic = new Cats();
    let promise = catPic.getCatPic(catSearch);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".showCats").html(`<img src="${body[0].url}" alt="">`);
      console.log(body);
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    });
});
