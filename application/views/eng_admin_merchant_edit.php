<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
    <?php 
    if($this->session->userdata("id") == "") {
        redirect('english_home');
    }
    ?>

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
                        <h1>Merchant</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Merchant</li>
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
                                                      <strong>Merchant Table</strong> - Edit Element
                                                  </div>
                                                  <div class="card-body card-block">
                                                      <form name="edit-merchant" action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="fname-merchant" class=" form-control-label">Merchant First Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="fname-merchant" name="fname-merchant" placeholder="Enter First Name" class="form-control" value="<?php echo $list->fname_merchant ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="lname-merchant" class=" form-control-label">Merchant Last Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="lname-merchant" name="lname-merchant" placeholder="Enter Last Name" class="form-control" value="<?php echo $list->lname_merchant ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="name-business" class=" form-control-label">Business Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="name-merchant" name="name-merchant" placeholder="Enter Business Name" class="form-control" value="<?php echo $list->nama_bisnis ?>"></div>
                                                          </div>
                                                          <div class="row form-group">
                                                               <div class="col col-md-3"><label for="type-business" class=" form-control-label">Business Type</label></div>
                                                               <div class="col-12 col-md-9">
                                                                  <select name="type-business" id="type-business" class="form-control">
                                                                    <option value="0">Active</option>
                                                                    <option value="1">Inactive</option>
                                                                  </select>
                                                                </div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="location-business" class=" form-control-label">Location</label></div>
                                                              <div class="col-12 col-md-9"><textarea name="location-business" id="location-business" rows="9" placeholder="Enter Location" class="form-control" value=""></textarea></div>
                                                          </div>
                                                          <div class="row form-group">
                                                               <div class="col col-md-3"><label for="month-revenue" class=" form-control-label">Monthly Revenue</label></div>
                                                               <div class="col-12 col-md-9">
                                                                  <select name="month-revenue" id="month-revenue" class="form-control">
                                                                    <option value="0">Active</option>
                                                                    <option value="1">Inactive</option>
                                                                  </select>
                                                                </div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label class=" form-control-label">Pricing Plan</label></div>
                                                              <div class="col col-md-9">
                                                                <div class="form-check-inline form-check">
                                                                  <label for="entry" class="form-check-label ">
                                                                    <input type="radio" id="entry" name="inline-radios" value="Entry" class="form-check-input">Entry
                                                                  </label>
                                                                  <label for="junior" class="form-check-label ">
                                                                    <input type="radio" id="junior" name="inline-radios" value="Junior" class="form-check-input">Junior
                                                                  </label>
                                                                  <label for="senior" class="form-check-label ">
                                                                    <input type="radio" id="senior" name="inline-radios" value="Senior" class="form-check-input">Senior
                                                                  </label>
                                                                </div>
                                                              </div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="start-year" class=" form-control-label">Start Year</label></div>
                                                              <div class="col-12 col-md-9"><input type="number" id="start-year" name="start-year" placeholder="Enter Starting Year" class="form-control" value=""></div>
                                                          </div>
                                                           <div class="row form-group">
                                                               <div class="col col-md-3"><label for="status-merchant" class=" form-control-label">Status</label></div>
                                                               <div class="col-12 col-md-9">
                                                                  <select name="status-admin" id="status-merchant" class="form-control">
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
