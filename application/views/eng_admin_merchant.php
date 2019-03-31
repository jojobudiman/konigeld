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
                                <div class="row">
                                    <div class="col-sm-10 float-left">
                                        <h4><strong class="card-title">Merchant Table</strong></h4>
                                    </div>
                                    <div class="col-sm-2 text-right float-right">
                                        <a href="<?php echo base_url(). '
                                        admin_table_merchant_add' ?>">
                                            <button type="button" class="btn btn-outline-primary">Add Table</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                    <div class="row">
                                        <thead>
                                            <tr>
                                                <th>Merchant Name</th>
                                                <th>Business Name</th>
                                                <th>Business Type</th>
                                                <th>Location</th>
                                                <th>Monthly Revenue</th>
                                                <th>Pricing Plan</th>
                                                <th>Start Year</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach($admin as $list) { ?>
                                            <tr>
                                                <td><?php echo $list->fname_merchant.' '.$list->lname_merchant ?></td>
                                                <td><?php echo $list->nama_bisnis ?></td>
                                                <td><?php echo $list->tipe_bisnis ?></td>
                                                <td><?php echo $list->lokasi_bisnis ?></td>
                                                <td><?php echo $list->monthly_revenue ?></td>
                                                <td><?php echo $list->fname_admin ?></td> <!--Tolong ditambahkan jenis paket -->
                                                <td><?php echo $list->fname_admin ?></td> <!--Tambah mulai tahun-->
                                                <td><?php echo $list->fname_admin ?></td> <!--Tambah status -->
                                                <td id="buttons">
                                                    <div class="col-sm-4 offset-sm-1">
                                                        <a href="<?php echo base_url(). 'admin_table_merchant_edit' ?>">
                                                        <button type="button" class="btn btn-outline-success">Edit</button>
                                                        </a>
                                                    </div>
                                                    <div class="col-sm-4 offset-sm-1">
                                                        <a href="<?php echo base_url(). 'namametod/delete' ?>">
                                                        <button type="button" class="btn btn-outline-danger">Delete</button>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <?php } ?>
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
