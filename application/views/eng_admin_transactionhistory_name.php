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
                        <h1>Transaction Approval</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Transaction Approval</li>
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
                                                      <strong>Transaction Approval Table</strong> - Confirm Approval
                                                  </div>
                                                  <div class="card-body card-block">
                                                      <form name="add-transactionhistory" action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                                                          <div class="row form-group">
                                                             <div class="col col-md-3"><label class=" form-control-label">ID</label></div>
                                                             <div class="col-12 col-md-9">
                                                                 <p class="form-control-static">Nama ID Transaksi</p>
                                                             </div>
                                                         </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="name-merchant" class=" form-control-label">Merchant Name</label></div>
                                                              <div class="col-12 col-md-9"><input type="text" id="name-merchant" name="name-merchant" placeholder="Enter Name" class="form-control" value=""></div>
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
                                                               <div class="col col-md-3"><label for="payment-period" class=" form-control-label">Period</label></div>
                                                               <div class="col-12 col-md-9">
                                                                  <select name="payment-period" id="payment-period" class="form-control">
                                                                    <option value="0">Monthly</option>
                                                                    <option value="1">Annualy</option>
                                                                  </select>
                                                                </div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="start-date" class=" form-control-label">Starting Date</label></div>
                                                              <div class="col-12 col-md-9"><input type="number" id="start-date" name="start-date" placeholder="Enter Starting Date" class="form-control" value=""></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="end-date" class=" form-control-label">Ending Date</label></div>
                                                              <div class="col-12 col-md-9"><input type="number" id="end-date" name="end-date" placeholder="Enter Ending Date" class="form-control" value=""></div>
                                                          </div>
                                                          <div class="row form-group">
                                                              <div class="col col-md-3"><label for="total-price" class=" form-control-label">Total Price</label></div>
                                                              <div class="col-12 col-md-9"><input type="number" id="total-price" name="total-price" placeholder="Enter Total Price" class="form-control" value=""></div>
                                                          </div>
                                                      </form>
                                                  </div>
                                                  <div class="card-footer text">
                                                      <button type="submit" class="btn btn-primary btn-lg">
                                                          <i class="fa fa-thumbs-up"></i> Approve
                                                      </button>
                                                      <button type="reset" class="btn btn-danger btn-lg">
                                                          <i class="fa fa-thumbs-down"></i> Decline
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
