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
                     <a class="navbar-brand" href="<?php echo base_url(). 'id/home' ?>"><img src="<?php echo base_url(); ?>assets/img/logo.png" alt=""></a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span></span>
                         <span></span>
                         <span></span>
                     </button>

                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav">
                             <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'id/home' ?>">Beranda</a></li>
                             <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'id/about' ?>">Tentang Kami</a></li>
                             <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'id/features' ?>">Fitur</a></li>
                             <li class="nav-item active"><a class="nav-link" href="<?php echo base_url(). 'id/pricing' ?>">Harga</a></li>
                             <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'id/login' ?>">Masuk</a></li>
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
                                 <svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>IND</a>
                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <li class="nav-item">
                                         <a class="nav-link" href="<?php echo base_url(). 'id/features' ?>">
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
                                     </li>
                                     <li class="nav-item active">
                                         <a class="nav-link active" href="<?php echo base_url(). 'en/features' ?>"><svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>IND</a>
                                     </li>
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
                    <h2 class="bold">Harga</h2>
                    <p>Tidak ada pengaruh biaya tambahan</p>
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
                                    <div class="price-entry entry pad-vert-small pad-horz-small">
                                        <div class="grid-row-space-small grid-align-center">
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 75 75">
                                                    <g id="Group_96" data-name="Group 96" transform="translate(-1001.283 -244.088)">
                                                      <g id="Group_95" data-name="Group 95" transform="translate(1001.283 244.088)">
                                                        <path id="Path_555" data-name="Path 555" d="M1071.887,292.953V270.076a6.6,6.6,0,0,0,4.4-6.214,11,11,0,0,0-8.979-10.8,11,11,0,0,0-10.8-8.979h-35.451a11,11,0,0,0-10.8,8.979,11,11,0,0,0-8.975,10.8,6.6,6.6,0,0,0,4.393,6.214v22.877a6.591,6.591,0,0,0,0,12.427v11.51a2.2,2.2,0,0,0,2.2,2.2h61.816a2.2,2.2,0,0,0,2.2-2.2V305.38a6.589,6.589,0,0,0,0-12.427Zm-50.829-44.469h35.451a6.6,6.6,0,0,1,6.214,4.393h-47.881A6.6,6.6,0,0,1,1021.058,248.484Zm-8.788,8.788H1065.3a6.6,6.6,0,0,1,6.59,6.59,2.2,2.2,0,1,1-4.393,0,2.2,2.2,0,0,0-4.4,0,2.2,2.2,0,1,1-4.4,0,2.2,2.2,0,0,0-4.393,0,2.2,2.2,0,0,1-2.2,2.2,2.336,2.336,0,0,1-2.345-2.2,2.2,2.2,0,0,0-4.392,0,2.2,2.2,0,1,1-4.4,0,2.2,2.2,0,0,0-4.393,0,2.336,2.336,0,0,1-2.345,2.2,2.2,2.2,0,0,1-2.2-2.2,2.2,2.2,0,0,0-4.4,0,2.2,2.2,0,1,1-4.393,0,2.2,2.2,0,0,0-4.4,0,2.2,2.2,0,1,1-4.393,0,2.2,2.2,0,0,0-4.4,0,2.2,2.2,0,1,1-4.4,0A6.6,6.6,0,0,1,1012.269,257.272Zm2.418,35.3h-4.616v-22.5a4.208,4.208,0,0,1,6.59.38,6.579,6.579,0,0,1,8.792,0,6.574,6.574,0,0,1,8.788,0,6.76,6.76,0,0,0,4.5-1.718,6.578,6.578,0,0,0,8.865,0,6.755,6.755,0,0,0,4.5,1.718,6.574,6.574,0,0,1,8.788,0,4.211,4.211,0,0,1,6.594-.38v22.5h-52.807Zm52.807,22.119h-57.423V305.76h57.423Zm2.195-13.331h-61.816a2.2,2.2,0,0,1,0-4.4h61.816a2.2,2.2,0,0,1,0,4.4Z" transform="translate(-1001.283 -244.088)" fill="#fff"/>
                                                      </g>
                                                    </g>
                                                  </svg>
                                              </div>
                                              <div class="display-inline-block float-right right white">
                                                <div class="h1 super-strong small-gap">ENTRY</div>
                                                <div class="h3 super-strong">Rp 25000</div>
                                                <div class="near-text">per bulan</div>
                                              </div>
                                          </div>
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <svg class="entry-price" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="254" height="519" viewBox="0 0 254 519">
                                                    <defs>
                                                      <clipPath id="clip-path">
                                                        <rect id="Rectangle_211" data-name="Rectangle 211" width="360" height="600" transform="translate(406 487)" fill="#fff" stroke="#707070" stroke-width="1"/>
                                                      </clipPath>
                                                    </defs>
                                                    <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-406 -487)" clip-path="url(#clip-path)">
                                                      <path id="Path_527" data-name="Path 527" d="M715.054,501.587C738.7,465.228,684.61,387.824,645.2,349.577c-20.938-20.325-84.706-75.176-170.838-73.2-150.328,3.459-267.3,177.7-239.548,225.752,16.876,29.223,76.825-6.275,247.673-1.528C629.691,504.7,693.931,534.07,715.054,501.587Z" transform="translate(-69.914 428.302)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                      <path id="Path_528" data-name="Path 528" d="M291.389,278.643a57.908,57.908,0,0,1,12.23,1.323v-2a12.23,12.23,0,1,0-24.46,0v2A57.873,57.873,0,0,1,291.389,278.643Z" transform="translate(117.297 387.349)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                      <path id="Rectangle_210" data-name="Rectangle 210" d="M0,0H28.317a0,0,0,0,1,0,0V18.317a10,10,0,0,1-10,10H10a10,10,0,0,1-10-10V0A0,0,0,0,1,0,0Z" transform="translate(391.931 827.891)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                      <g id="Group_88" data-name="Group 88" transform="translate(279.57 700.727)">
                                                        <path id="Path_529" data-name="Path 529" d="M285.922,275.526" transform="translate(-136.136 -275.526)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <ellipse id="Ellipse_185" data-name="Ellipse 185" cx="22.384" cy="22.384" rx="22.384" ry="22.384" transform="translate(0 74.56)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <ellipse id="Ellipse_186" data-name="Ellipse 186" cx="22.384" cy="22.384" rx="22.384" ry="22.384" transform="translate(212.599 74.56)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <line id="Line_102" data-name="Line 102" transform="translate(191.014 127.163)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <line id="Line_103" data-name="Line 103" x1="130.364" transform="translate(60.65 127.163)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <path id="Path_530" data-name="Path 530" d="M266.914,300.129" transform="translate(-209.598 -180.44)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                      </g>
                                                      <path id="Path_531" data-name="Path 531" d="M266.959,300.906a3.592,3.592,0,0,1,0,7.117" transform="translate(70.146 523.29)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                      <path id="Path_532" data-name="Path 532" d="M297.493,300.906a3.593,3.593,0,0,0,0,7.117" transform="translate(176.187 523.29)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                      <path id="Path_533" data-name="Path 533" d="M307.774,306.72a200.613,200.613,0,0,1,42.246,3.571c.112-1.192.18-2.4.18-3.619a38.189,38.189,0,1,0-76.378,0c0,1.279.068,2.549.19,3.8A203.293,203.293,0,0,1,307.774,306.72Z" transform="translate(96.674 397.962)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                    </g>
                                                  </svg>
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
                                <div class="pricing-group">
                                    <div class="price-junior junior pad-vert-small pad-horz-small">
                                        <div class="grid-row-space-small grid-align-center">
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 73.974 84">
                                                    <g id="Group_98" data-name="Group 98" transform="translate(-958.004 -237.021)">
                                                      <path id="Rectangle_215" data-name="Rectangle 215" d="M5,0h8.046a5,5,0,0,1,5,5V20.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z" transform="translate(985.494 297.846)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
                                                      <path id="Path_556" data-name="Path 556" d="M1007.445,248.048h11.813a10.72,10.72,0,0,1,10.719,10.719v6H960v-6a10.717,10.717,0,0,1,10.716-10.719h11.208" transform="translate(0 17.867)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
                                                      <rect id="Rectangle_216" data-name="Rectangle 216" width="60.742" height="36.091" transform="translate(964.203 282.93)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
                                                      <g id="Group_97" data-name="Group 97" transform="translate(968.122 239.021)">
                                                        <path id="Path_557" data-name="Path 557" d="M976.69,260.492c.116-.122.224-.235.322-.343a4.705,4.705,0,0,0,.849-1.335q1.953-4.54,4.1-9.23,2.082-4.54,4.168-8.816" transform="translate(-935.097 -235.561)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_558" data-name="Path 558" d="M976,249.308a24.848,24.848,0,0,0,2.059-1.919" transform="translate(-936.464 -222.459)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_559" data-name="Path 559" d="M967.183,247.984c.11.092.221.185.334.277" transform="translate(-953.913 -221.281)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_560" data-name="Path 560" d="M963.261,240.784q2.078,4.366,4.156,8.771,2.145,4.545,4.26,9.072a4.722,4.722,0,0,0,.739,1.141,25.146,25.146,0,0,0,2.529,2.467" transform="translate(-961.676 -235.532)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_561" data-name="Path 561" d="M980.753,256.029q-3.673-3.307-7.4-6.614-5.014-4.447-9.98-8.762" transform="translate(-961.462 -235.791)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_562" data-name="Path 562" d="M973.926,245.719" transform="translate(-940.567 -225.764)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_563" data-name="Path 563" d="M973.926,255.754q3.669-3.133,7.362-6.334,5.059-4.388,10-8.771" transform="translate(-940.567 -235.799)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_564" data-name="Path 564" d="M969.2,257.628q3.356-8.893,6.715-17.783" transform="translate(-949.913 -237.39)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_565" data-name="Path 565" d="M971.751,239.85q3.24,8.741,6.48,17.485" transform="translate(-944.872 -237.38)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_566" data-name="Path 566" d="M964.314,242.371a.885.885,0,0,1-.548.2,1.326,1.326,0,1,1,1.04-1.3,1.545,1.545,0,0,1-.17.706" transform="translate(-962.729 -237.119)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_567" data-name="Path 567" d="M972.723,241.491a1.334,1.334,0,0,0,.611-1.177,1.062,1.062,0,1,0-2.073,0,1.338,1.338,0,0,0,.59,1.162" transform="translate(-945.844 -239.021)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                        <path id="Path_568" data-name="Path 568" d="M980.194,242.362a.9.9,0,0,0,.536.191,1.326,1.326,0,1,0-1.04-1.3,1.526,1.526,0,0,0,.194.748" transform="translate(-929.159 -237.155)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                                                      </g>
                                                    </g>
                                                  </svg>

                                              </div>
                                              <div class="display-inline-block float-right right white">
                                                <div class="h1 super-strong small-gap">JUNIOR</div>
                                                <div class="h3 super-strong">Rp 75000</div>
                                                <div class="near-text">per bulan</div>
                                              </div>
                                          </div>
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <svg class="junior-price" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="480" viewBox="0 0 27 471">
                                                    <defs>
                                                      <clipPath id="clip-path">
                                                        <rect id="Rectangle_213" data-name="Rectangle 213" width="254" height="519" transform="translate(781 498)" fill="#fff" stroke="#707070" stroke-width="1"/>
                                                      </clipPath>
                                                    </defs>
                                                    <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-781 -498)" clip-path="url(#clip-path)">
                                                      <g id="Group_90" data-name="Group 90" transform="translate(197.93 406.684)">
                                                        <path id="Path_534" data-name="Path 534" d="M818.181,497.3c23.193-35.667-29.864-111.6-68.524-149.117-20.54-19.938-83.089-73.745-167.585-71.8-147.466,3.393-262.209,174.314-234.983,221.454,16.55,28.667,75.358-6.156,242.953-1.5C734.443,500.349,797.46,529.163,818.181,497.3Z" transform="translate(0 34.452)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <g id="Group_89" data-name="Group 89" transform="translate(459.57 306.952)">
                                                          <path id="Path_535" data-name="Path 535" d="M398.272,275.526" transform="translate(-251.337 -275.526)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                          <circle id="Ellipse_187" data-name="Ellipse 187" cx="21.958" cy="21.958" r="21.958" transform="translate(0 73.14)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                          <circle id="Ellipse_188" data-name="Ellipse 188" cx="21.958" cy="21.958" r="21.958" transform="translate(208.552 73.14)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                          <line id="Line_104" data-name="Line 104" transform="translate(187.377 124.743)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                          <line id="Line_105" data-name="Line 105" x1="127.882" transform="translate(59.495 124.743)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                          <path id="Path_536" data-name="Path 536" d="M379.264,300.129" transform="translate(-323.039 -182.719)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                        </g>
                                                        <path id="Path_537" data-name="Path 537" d="M379.309,300.906a3.524,3.524,0,0,1,0,6.982" transform="translate(136.701 127.165)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                        <path id="Path_538" data-name="Path 538" d="M409.784,300.906a3.525,3.525,0,0,0,0,6.982" transform="translate(240.201 127.165)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                        <path id="Path_539" data-name="Path 539" d="M508.925,310.832c42.348-.973,79.185,12.059,107.98,27.812l41.251-71.449h-295.7l42.563,73.716C436.382,323.307,471.6,311.691,508.925,310.832Z" transform="translate(73.146 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
                                                        <line id="Line_106" data-name="Line 106" x2="17.409" y2="29.083" transform="translate(477.372 284.869)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                        <line id="Line_107" data-name="Line 107" x1="17.409" y2="29.083" transform="translate(672.671 284.869)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                        <path id="Path_540" data-name="Path 540" d="M376.3,280.138a479.671,479.671,0,0,1,165.805-2.529" transform="translate(125.361 16.611)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                                                      </g>
                                                    </g>
                                                  </svg>

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
                                <div class="pricing-group">
                                    <div class="price-senior senior pad-vert-small pad-horz-small">
                                        <div class="grid-row-space-small grid-align-center">
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 67.161 71">
                                                    <g id="Group_99" data-name="Group 99" transform="translate(-907.149 -235.077)">
                                                      <path id="Rectangle_217" data-name="Rectangle 217" d="M5,0h.915a5,5,0,0,1,5,5V17.1a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z" transform="translate(921.574 287.481)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <line id="Line_116" data-name="Line 116" y2="17" transform="translate(920.645 253.077)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                      <line id="Line_117" data-name="Line 117" y2="17" transform="translate(960.532 253.077)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                      <path id="Rectangle_218" data-name="Rectangle 218" d="M2.512,0h0A2.512,2.512,0,0,1,5.025,2.512V4.506a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.512A2.512,2.512,0,0,1,2.512,0Z" transform="translate(917.883 236.577)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <path id="Rectangle_219" data-name="Rectangle 219" d="M2.512,0h0A2.512,2.512,0,0,1,5.025,2.512V4.506a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.512A2.512,2.512,0,0,1,2.512,0Z" transform="translate(958.019 236.577)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <rect id="Rectangle_220" data-name="Rectangle 220" width="64.146" height="11.641" transform="translate(908.649 241.084)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <path id="Rectangle_221" data-name="Rectangle 221" d="M0,0H64.146a0,0,0,0,1,0,0V4.5a5.612,5.612,0,0,1-5.612,5.612H5.612A5.612,5.612,0,0,1,0,4.5V0A0,0,0,0,1,0,0Z" transform="translate(972.811 280.562) rotate(180)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <rect id="Rectangle_222" data-name="Rectangle 222" width="56.382" height="21.829" transform="translate(912.448 282.748)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <rect id="Rectangle_223" data-name="Rectangle 223" width="14.144" height="8.217" transform="translate(943.482 291.02)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                      <path id="Rectangle_224" data-name="Rectangle 224" d="M.3,0H16.911a.3.3,0,0,1,.3.3v.886a.809.809,0,0,1-.809.809H.809A.809.809,0,0,1,0,1.182V.3A.3.3,0,0,1,.3,0Z" transform="translate(941.951 286.192)" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                                                    </g>
                                                  </svg>
                                              </div>
                                              <div class="display-inline-block float-right right white">
                                                <div class="h1 super-strong small-gap">SENIOR</div>
                                                <div class="h3 super-strong">Rp 150000</div>
                                                <div class="near-text">per bulan</div>
                                              </div>
                                          </div>
                                          <div class="column">
                                              <div class="display-inline-block float-left left">
                                                  <div class="senior-price"></div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Service Solution Area =================-->
        <section class="feature-comparison p_100">
            <div class="content">
                <div class="grid-space-medium grid-space-large-at-medium">
                    <div class="column">
                        <div class="h1 super-strong table-heading">PERBANDINGAN</div>
                        <div class="pricing-table">
                            <div class="table-flex">
                                <div class="table-flex-tr">
                                    <div class="table-flex-th">Fitur-Fitur</div>
                                    <div class="table-flex-th">Entry</div>
                                    <div class="table-flex-th">Junior</div>
                                    <div class="table-flex-th">Senior</div>
                                </div>
                                <div class="table-flex-wrap">
                                    <div class="table-flex-tr title">
                                        <div class="table-flex-td">Bisnis</div>
                                        <div class="table-flex-td"></div>
                                        <div class="table-flex-td"></div>
                                        <div class="table-flex-td"></div>
                                    </div>
                                    <div class="table-flex-tr">
                                        <div class="table-flex-td">Lokasi</div>
                                        <div class="table-flex-td">1</div>
                                        <div class="table-flex-td">5</div>
                                        <div class="table-flex-td">∞</div>
                                    </div>
                                    <div class="table-flex-tr">
                                        <div class="table-flex-td">Paket Produk</div>
                                        <div class="table-flex-td">-</div>
                                        <div class="table-flex-td">5</div>
                                        <div class="table-flex-td">∞</div>
                                    </div>
                                    <div class="table-flex-tr">
                                        <div class="table-flex-td">Kategori Produk</div>
                                        <div class="table-flex-td">2</div>
                                        <div class="table-flex-td">10</div>
                                        <div class="table-flex-td">∞</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================Footer Area =================-->

            <div class="footr_wrapper">
                <div class="container">
                <footer class="footr_area">
                <div class="footer_koni">
                    <div class="footer_copyright">
                        <div class="left footer_dropdown">
                            <ul class="lang-title footer_dropdown">
                                <li>
                                    <a href="<?php echo base_url(). 'en/pricing' ?>">
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
                                    <a href="<?php echo base_url(). 'id/pricing' ?>">
                                        <svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>Bahasa Indonesia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <ul class="footer_copyright_socmed">
                            <li><a href="https://www.facebook.com/K%C3%B6nigeld-2232360990160033/"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/konigeldd"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.instagram.com/konigeld/"><i class="fa fa-twitter"></i></a></li>
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
