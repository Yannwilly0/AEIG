function heart()
{
    alert('works!');
}
function readURL(input) {
    id = input.name;
   if (input.files && input.files[0]) {
       var reader = new FileReader();

       reader.onload = function (e) {
           $('#blah'
               .attr('src', e.target.result);
       };

       reader.readAsDataURL(input.files[0]);
   }
}