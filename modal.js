$(function(){
  var modal = $('#modal'),
        modalContent = $('#modal_content'),
        btnOpen = $("#btn_open"),
        btnClose = $(".btn_close");
 
  $(btnOpen).on('click', function() {
    modal.show();
  });
 
  $(modal).on('click', function(event) {
    if(!($(event.target).closest(modalContent).length)||($(event.target).closest(btnClose).length)){
      modal.hide();
    }
  });
});
