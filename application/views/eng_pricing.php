<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Königeld</title>
    </head>
    <body>

        <!--================Header Menu Area =================-->
        <header class="main_menu_area">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img src="<?php echo base_url(); ?>assets/img/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'english_home' ?>">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'english_about' ?>">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'english_feature' ?>">Features</a></li>
                        <li class="nav-item active"><a class="nav-link" href="<?php echo base_url(). 'english_pricing' ?>">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'english_backoffice' ?>">Login</a></li>
                        <!--<li class="nav-item dropdown submenu">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                <li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
                                <li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
                            </ul>
                        </li>-->
                        <li class="nav-item dropdown submenu">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                            <svg version="1.1" id="Layer_1" height="10pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 72 512 512" width="20pt" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <path style="fill:#41479B;" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
                                c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
                                C512,105.443,494.833,88.276,473.655,88.276z"/>
                                <path style="fill:#F5F5F5;" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
                                    v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
                                    c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
                                    c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"/>
                                <g>
                                    <polygon style="fill:#FF4B55;" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483
                                        229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	"/>
                                    <path style="fill:#FF4B55;" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
                                        C13.377,415.157,18.714,418.955,24.793,421.252z"/>
                                    <path style="fill:#FF4B55;" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                                        />
                                    <path style="fill:#FF4B55;" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/>
                                    <path style="fill:#FF4B55;" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                                        />
                                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>ENG</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item active">
                                    <a class="nav-link active" href="<?php echo base_url(). 'indo_main' ?>"><svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>IND</a></li>
                                <li class="nav-item"><a class="nav-link" href=""><svg version="1.1" id="Layer_1" height="10pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 72 512 512" width="20pt" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <path style="fill:#41479B;" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
                                    c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
                                    C512,105.443,494.833,88.276,473.655,88.276z"/>
                                <path style="fill:#F5F5F5;" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
                                    v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
                                    c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
                                    c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"/>
                                <g>
                                    <polygon style="fill:#FF4B55;" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483
                                        229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	"/>
                                    <path style="fill:#FF4B55;" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
                                        C13.377,415.157,18.714,418.955,24.793,421.252z"/>
                                    <path style="fill:#FF4B55;" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                                        />
                                    <path style="fill:#FF4B55;" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/>
                                    <path style="fill:#FF4B55;" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                                        />
                                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                </svg>ENG</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!--================End Header Menu Area =================-->

        <!--================Banner Area =================-->
        <section class="banner_area">
            <div class="container">
                <div class="banner_inner_text">
                    <h2 class="bold">Pricing</h2>
                    <p>No surprise fees and much more</p>
                </div>
            </div>
        </section>
        <!--================End Banner Area =================-->

        <!--================Pricing Area =================-->
        <section class="section-multi-column bg-white auto-layout flex-valign-middle">
            <div class="content">
                <div class="grid grid-row-equal-heights grid-3-at-large">
                    <div class="column">
                        <div class="grid grid-space-line">
                            <div class="column">
                                <div class="pricing-group">
                                    <div class="pricing-entry entry pad-vert-large pad-horz-small">
                                        <div class="grid-row-space-small grid-align-center">
                                          <div class="column">
                                            <div class="display-inline-block right">
                                              <div class="h1">Rp 25000</div>
                                              <div>Per month</div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="grid grid-space-line">
                            <div class="column">
                                <div class="position-relative">

                                </div>
                            </div>
                            <div class="column">

                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="grid grid-space-line">
                            <div class="column">
                                <div class="position-relative">

                                </div>
                            </div>
                            <div class="column">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Service Solution Area =================-->

        <!--================Footer Area =================-->

            <div class="footr_wrapper">
                <div class="container">
                <footer class="footr_area">
                <div class="footer_koni">
                    <div class="footer_copyright">
                        <div class="left footer_dropdown">
                            <ul class="lang-title footer_dropdown">
                                <li>
                                    <a href="#">
                                        <svg version="1.1" id="Layer_1" height="10pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 72 512 512" width="20pt" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <path style="fill:#41479B;" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
                                        c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
                                        C512,105.443,494.833,88.276,473.655,88.276z"/>
                                        <path style="fill:#F5F5F5;" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
                                            v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
                                            c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
                                            c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"/>
                                        <g>
                                            <polygon style="fill:#FF4B55;" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483
                                                229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	"/>
                                            <path style="fill:#FF4B55;" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
                                                C13.377,415.157,18.714,418.955,24.793,421.252z"/>
                                            <path style="fill:#FF4B55;" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                                                />
                                            <path style="fill:#FF4B55;" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/>
                                            <path style="fill:#FF4B55;" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                                                />
                                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                        </svg>English
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>Bahasa Indonesia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <ul class="footer_copyright_socmed">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                </div>
                <div class="footer_copyright_btm">
                    <h5>&copy; Copyright <script>document.write(new Date().getFullYear());</script> CV Double Jo’s. All Rights Reserved.</h5>
                </div>
                </footer>
                </div>
            </div>

        <!--================End Footer Area =================-->
    </body>
</html>
