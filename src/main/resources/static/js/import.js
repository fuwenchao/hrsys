$(document).ready(function(){
    /*导入其他的html文件到当前html文件中*/
    $(".import-html").each(function(){
        $(this).load($(this).attr("src"));
    });

});