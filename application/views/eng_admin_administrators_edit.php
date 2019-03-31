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
    <title>Königeld Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Administrators</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Administrators</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="content mt-3">
          <div class="animated fadeIn">
                <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                                                  <div class="card-header">
                                                      <strong>Administrator Table</strong> - Edit Element
                                                  </div>
                                                  <div class="card-body card-block">
                                                      <form name="add-admin" action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="fname-admin" class=" form-control-label">First Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="fname-admin" name="fname-admin" placeholder="Enter First Name" class="form-control" value="<?php echo $list->fname_admin ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="lname-admin" class=" form-control-label">Last Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="lname-admin" name="lname-admin" placeholder="Enter Last Name" class="form-control" value="<?php echo $list->lname_admin ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="email-admin" class=" form-control-label">Email</label></div>
                                                              <div class="col-12 col-md-9"><input type="email" id="email-admin" name="email-admin" placeholder="Enter Email" class="form-control" value="<?php echo $list->email_admin ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="phone-admin" class=" form-control-label">Phone</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="phone-admin" name="phone-admin" placeholder="Enter Phone" class="form-control" value="<?php echo $list->hp_admin ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="address-admin" class=" form-control-label">Address</label></div>
                                                              <div class="col-12 col-md-9"><textarea name="address-admin" id="address-admin" rows="9" placeholder="Enter Address" class="form-control" value="<?php echo $list->alamat_admin ?>"></textarea></div>
                                                          </div>
                                                          <div class="row form-group">
                                                               <div class="col col-md-3"><label for="status-admin" class=" form-control-label">Status</label></div>
                                                               <div class="col-12 col-md-9">
                                                                  <select name="status-admin" id="status-admin" class="form-control">
                                                                    <option value="0">Active</option>
                                                                    <option value="1">Inactive</option>
                                                                  </select>
                                                                </div>
                                                          </div>
                                                      </form>
                                                  </div>
                                                  <div class="card-footer text">
                                                      <button type="submit" class="btn btn-primary btn-lg">
                                                          <i class="fa fa-rocket"></i> Submit
                                                      </button>
                                                      <button type="reset" class="btn btn-danger btn-lg">
                                                          <i class="fa fa-circle-o"></i> Reset
                                                      </button>
                                                  </div>
                                              </div>
                    </div>
                </div>
            </div><!-- .animated -->
        </div> <!-- .content -->
    </div><!-- /#right-panel -->

    <!-- Right Panel -->
</body>

</html>
