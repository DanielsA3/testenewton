$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: true
});

$('.main-carousel-esp').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: true,
  pageDots: false
});

function Menu(item) {
  $('html, body').animate({
      scrollTop: $("#"+item).offset().top
  }, 2);

  $('.menu').removeClass('open-mobile');
}

function Formulario() {
  var errors = 0;

  var nome = $('#nome').val();
  if(nome == ''){
    errors++;
    $('#nome').addClass('error');
  }else{
    $('#nome').removeClass('error');
  }

  var email = $('#email').val();
  if(email == ''){
    errors++;
    $('#email').addClass('error');
  }else{
    $('#email').removeClass('error');
  }

  var assunto = $('#assunto').val();
  if(assunto == ' '){
    errors++;
    $('#assunto').addClass('error');
  }else{
    $('#assunto').removeClass('error');
  }

  var mensagem = $('#mensagem').val();
  if(mensagem == ''){
    errors++;
    $('#mensagem').addClass('error');
  }else{
    $('#mensagem').removeClass('error');
  }  

  if(errors == 0){
    var dados = $('#form-contato').serialize();

    $.ajax({
      type: 'POST',
      data: dados,
      url:'envio.php',
      success: function(){
        $('#sucesso').show();
        $('#formulario').hide();
      }
    });        
  }
}

function AbreMenu() {
  $('.menu').toggleClass('open-mobile');
}