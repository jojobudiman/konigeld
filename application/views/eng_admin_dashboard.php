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
    
    $countT = 0;
    $countM = 0;
    $countP = 0;
    $countC = 0;
    
    foreach($trans as $list1) {
        $countT++;
    }
    foreach($mer as $list2) {
        $countM++;
    }
    foreach($product as $list3) {
        $countP++;
    }
    foreach($contact as $list4) {
        $countC++;
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
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="content mt-3">
            <div class="col-sm-6 col-lg-3">
                  <div class="card">
                      <div class="card-body">
                          <div class="clearfix">
                              <i class="fa fa-usd bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                              <div class="h5 text-secondary mb-0 mt-1"><?php echo $countT ?></div>
                              <div class="text-muted text-uppercase font-weight-bold font-xs small">Payment Approvals</div>
                          </div>
                          <div class="b-b-1 pt-3"></div>
                          <hr>
                          <div class="more-info pt-2" style="margin-bottom:-10px;">
                              <a class="font-weight-bold font-xs btn-block text-muted small" href="<?php echo base_url(). 'admin_transactionapproval' ?>">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="clearfix">
                                <i class="fa fa-group bg-flat-color-2 p-3 font-2xl mr-3 float-left text-light"></i>
                                <div class="h5 text-secondary mb-0 mt-1"><?php echo $countM ?></div>
                                <div class="text-muted text-uppercase font-weight-bold font-xs small">Merchants</div>
                            </div>
                            <div class="b-b-1 pt-3"></div>
                            <hr>
                            <div class="more-info pt-2" style="margin-bottom:-10px;">
                                <a class="font-weight-bold font-xs btn-block text-muted small" href="<?php echo base_url(). 'admin_table_merchant' ?>">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                      <div class="card">
                          <div class="card-body">
                              <div class="clearfix">
                                  <i class="fa fa-archive bg-flat-color-4 p-3 font-2xl mr-3 float-left text-light"></i>
                                  <div class="h5 text-secondary mb-0 mt-1"><?php echo $countP ?></div>
                                  <div class="text-muted text-uppercase font-weight-bold font-xs small">Created Products</div>
                              </div>
                              <div class="b-b-1 pt-3"></div>
                              <hr>
                              <div class="more-info pt-2" style="margin-bottom:-10px;">
                                  <a class="font-weight-bold font-xs btn-block text-muted small" href="<?php echo base_url(). 'admin_transactionapproval' ?>">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-sm-6 col-lg-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-envelope bg-flat-color-3 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1"><?php echo $countC ?></div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Message Requests</div>
                                </div>
                                <div class="b-b-1 pt-3"></div>
                                <hr>
                                <div class="more-info pt-2" style="margin-bottom:-10px;">
                                    <a class="font-weight-bold font-xs btn-block text-muted small" href="<?php echo base_url(). 'admin_transactionapproval' ?>">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

            <div class="col-xl-3 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-user text-primary border-primary"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">Recently Registered Merchants</div>
                                <div class="stat-digit"><?php echo $countM ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-layout-grid2 text-warning border-warning"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">Pricing Plans Registered</div>
                                <div class="stat-digit"><?php echo $countT ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <!-- .content -->
    </div><!-- /#right-panel -->

    <!-- Right Panel -->
</body>

</html>
