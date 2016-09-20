// window.LoginView = Backbone.View.extend({
ava.views.LoginView = Backbone.ModalView.extend({

    initialize:function () {
        console.log('Initializing Login View');
        this.template = _.template( this.templateHtml);
    },

    events: {
        "click #loginButton": "login",
        "click #loginButtonGetData": "loginGetData"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    templateHtml:
            "<div class='modal-header'>Login</div>" +
            // "<form action='http://192.168.0.58:8080/flaps2/checkLogin.jsp' method='post'>" +
            "<form>" +
                "<table class='compact'>" +
                    "<tr><td>" +
                        "<label for='code'>帳號</label>" +
                        "</td><td>" +
                        "<input type='text' id='code' />" +
                    "</td></tr>" +
                    "<tr><td>" +
                        "<label for='pwd'>密碼</label>" +
                        "</td><td>" +
                        "<input type='password' id='pwd' />" +
                    "</td></tr>" +
                    // "<tr><td>" +
                    //     "<label for='phone'>Phone</label>" +
                    //     "</td><td>" +
                    //     "<input type='text' id='phone' />" +
                    // "</td></tr>" +
                    "<tr><td></td><td>" +
                        "<input type='submit' value= '登入' id='loginButton' />" +
                    "</td></tr>" +

                    "<tr><td></td><td>" +
                        "---------------------------------------------" +
                    "</td></tr>" +
                    "<tr><td></td><td>" +
                        "---------------------------------------------" +
                    "</td></tr>" +

                    "<tr><td></td><td>" +
                        "<input type='submit' value= '取得資料' id='loginButtonGetData' />" +
                    "</td></tr>" +
                "</table>" +
            "</form>",

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url = 'http://192.168.0.58:8080/flaps2/checkLogin.jsp';
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        console.log('Loggin in... ');
        var formValues = {
            // code: $('#code').val(),
            // pwd: $('#pwd').val()
            code: '',
            pwd: ''
        };

        $.ajax({
            url:url,
            // type:'GET',
            type:'POST',
            // crossDomain: true,
            // headers: { 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/x-www-form-urlencoded' },
            // dataType:"json",
            data: formValues,
            success:function (data, textStatus, jqXHR) {

                
                if (jqXHR.getResponseHeader('Content-Length') != "4319") {
                    window.localStorage.setItem('loginSuccess', true);
                }else{
                    window.localStorage.setItem('loginSuccess', false);
                }
                


                console.log(["Login request details: ", data]);
               
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            },
            error: function(xhr, textStatus, errorThrown){
               alert('request failed');
            }
        });
    },

    loginGetData:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url = 'http://192.168.0.58:8080/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=1&FMieQ4fK=1';
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        console.log('Loggin in... ');
        var formValues = {
            // code: $('#code').val(),
            // pwd: $('#pwd').val()
            code: '',
            pwd: ''
        };

        $.ajax({
            url:url,
            // type:'GET',
            type:'POST',
            // crossDomain: true,
            // headers: { 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/x-www-form-urlencoded' },
            // dataType:"json",
            // data: formValues,
            success:function (data, textStatus, jqXHR) {
                console.log(["Login request details: ", data]);

                var oJson = xml2json(data);

                alert(JSON.stringify(oJson));
               
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            },
            error: function(xhr, textStatus, errorThrown){
               alert('request failed');
            }
        });
    }
});