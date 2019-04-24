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
                        <h1>Transaction Approvals</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Transaction Approvals</li>
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
                                <div class="row">
                                    <div class="col-sm-12 float-left">
                                        <h4><strong class="card-title">Transaction Approvals</strong></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                    <div class="row">
                                        <thead>
                                            <tr>
                                                <th>Transaction ID</th>
                                                <th>Merchant's Name</th>
                                                <th>Business' Name</th>
                                                <th>Date</th>
                                                <th>Type</th>
                                                <th>Subscriptions</th>
                                                <th>Period</th>
                                                <th>Total Payment</th>
                                                <th>Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <?php foreach($trans as $list) { ?>
                                                <td><?php echo $list->id_transaksi ?></td>
                                                <td><?php echo $list->fname_merchant." ".$list->lname_merchant ?></td>
                                                <td><?php echo $list->nama_bisnis ?></td>
                                                <td><?php echo $list->tgl_transaksi ?></td>
                                                <td><?php echo $list->tipe_transaksi ?></td>
                                                <td><?php echo $list->nama_kategori ?></td>
                                                <td><?php echo $list->jangka_periode ?></td>
                                                <td><?php echo $list->total_transaksi ?></td>
                                                <td>
                                                    <a href="<?php echo base_url(). 'admin_transactionapproval/approve/'.$list->id_transaksi ?>">
                                                        <button type="button" class="btn btn-outline-success">
                                                            <i class="fa fa-thumbs-up"></i>
                                                            &nbsp; Approve
                                                        </button>
                                                    </a>
                                                    <a href="<?php echo base_url(). 'admin_transactionapproval/decline/'.$list->id_transaksi ?>"></a>
                                                    <button type="button" class="btn btn-outline-danger">
                                                      <i class="fa fa-thumbs-down"></i>&nbsp; Decline</button>
                                                </td>
                                                <?php } ?>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
