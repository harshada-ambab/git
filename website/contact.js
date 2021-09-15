$(function() {
    $("#registration").validate({
        errorClass: "error fail-alert",
        rules:{
            fname :{
                required :true,
                minlength :3
            },
            lname:{
                required :true,
                minlength :3
            },
            email:{
                required:true,
                email:true
            },
            add:{
                required:true
            },
            number:{
                required:true,
                minlength: 10,
                maxlength:10
            },
            message:{
                required:true
            } 
        },
        messages:{
            fname:{
                required :"Please Enter Your First Name",
                minlength: "Name should be include atleast 3 characters"
            },
            lname:{
                required :"Please Enter Your Last Name",
                minlength: "Name should be include atleast 3 characters"
            },
            email:{
                required :"Please Enter Your Email",
                email: "Enter Valid Email Address"
            },
            add :{
                required:"Please Provide Your Address"
            },
            number :{
                required:"Please Provide Your Contact Number",
                minlength: "Please Enter 10 digit Mobile Number",
                maxlength: "Please Enter 10 digit Mobile Number"
            },
            message:{
                required:"Let me know your concern"
            }
        },
        submitHandler:function(form){
            form.submit();
        }
    });
});



