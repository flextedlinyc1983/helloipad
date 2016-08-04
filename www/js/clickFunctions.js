$(document).ready(
    function()
    {
        $("#loginIcon").click(
            function( event)
            {
                event.preventDefault();
                event.stopPropagation();
                
                var loginModel = new ava.models.LoginModel();
                var loginView = new ava.views.LoginView( {model:loginModel});
                loginView.render().showModal({
                    x: event.pageX,
                    y: event.pageY
                });
            });
    });
    