$("#rtosavebtn").click(function(){
  console.log("save button clicked")
});
// // function update(){
// // 	$('#mdlrtoedit').modal('show');
	
// // }
// // function remove(){
// // 	$('#mdlrtodel').modal('show');
// // }	

// $(document).ready(function(){
//   var loadForm = function () { 
//     var btn = $(this);
//     $.ajax({
//       url: btn.attr("data-url"),
//       type: 'get',
//       dataType: 'json',
//       beforeSend: function () {
//         $("#modal-product .modal-content").html("");
//         $("#modal-product").modal("show");
//       },
//       success: function (data) {
//         $("#modal-product .modal-content").html(data.html_form);
//       }
//     });
//   };
 
//   var saveForm = function () {
//     var form = $(this);
//     $.ajax({
//       url: form.attr("action"),
//       data: form.serialize(),
//       type: form.attr("method"),
//       dataType: 'json',
//       success: function (data) {
//         if (data.form_is_valid) {
//           $("#tblList tbody").html(data.html_product_list);
//           $("#modal-product").modal("hide");
//         }
//         else {
//           $("#modal-product .modal-content").html(data.html_form);
//         }
//       }
//     });
//     return false;
//   };
 
 
//   /* Binding */
//   $(".js-create-product").click(loadForm);
//   $("#modal-product").on("submit", ".js-product-create-form", saveForm);
 
//   // Update product
//   $("#product-table").on("click", ".js-update-product", loadForm);
//   $("#mdlrtoedit").on("submit", ".js-product-update-form", saveForm);
 
//   // Delete product
//   $("#product-table").on("click", ".js-delete-product", loadForm);
//   $("#mdlrtodel").on("submit", ".js-product-delete-form", saveForm);
 
// });