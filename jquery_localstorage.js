 
<script>
    $.noConflict();
    jQuery.noConflict();
    $(document).ready(function() {
             
    function dataSave(){
        var jsonObj = [];
        
        $("form input:text").each(function(){
            
            var key = $(this).attr("id");
            var va = $(this).val();
        
            if( key !== 'card_number' && key !== 'cvv'){
                item = {}
                item ["key"] = key;
                item ["value"] = va;
                jsonObj.push(item);
            }
            
        });
        
        localStorage.setItem('create_data', JSON.stringify(jsonObj));
        
    } 
    
    function dataLoad() {
        
        if ( localStorage.getItem('create_data') !== null) {
            var inputParse = JSON.parse(localStorage.getItem('create_data'));
                    
            if(inputParse !== null){
                 for(var i=0; i<inputParse.length; i++) {

                     if(inputParse[i].key !== '' && inputParse[i].value != '')
                         $('#'+ inputParse[i].key ).val( inputParse[i].value)
                 }
            }
        }
          
    }
    
});

</script>