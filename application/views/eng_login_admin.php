<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Königeld Admin Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body class="bg-blue">


    <div class="konigeld-login d-flex align-content-center flex-wrap">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="<?php echo base_url(). 'en/home' ?>">
                        <img class="align-content" src="<?php echo base_url(); ?>assets/admin/images/logo.png" alt="">
                    </a>
                </div>
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email-admin" id="email-admin" class="form-control" placeholder="Email">
                        </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password-admin" id="password-admin" class="form-control" placeholder="Password">
                        </div>
                                <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30">Sign in</button>
                                <div class="register-link m-t-20 text-center">
                                    <p>Don't have account? <a href="<?php echo base_url() . 'signup_admin' ?>"> Sign Up Here</a></p>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
