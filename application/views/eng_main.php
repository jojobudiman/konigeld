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
                <a class="navbar-brand" href="<?php echo base_url(). 'english_home'?>"><img src="<?php echo base_url(); ?>assets/img/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active"><a class="nav-link" href="<?php echo base_url(). 'en/home' ?>">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'en/about' ?>">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'en/features' ?>">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'en/pricing' ?>">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'en/login' ?>">Login</a></li>
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
                                    <a class="nav-link active" href="<?php echo base_url(). 'id/home' ?>"><svg height="10pt" viewBox="0 72 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m512 176.550781v158.898438c-.027344 9.738281-7.914062 17.625-17.65625 17.65625h-476.6875c-9.742188-.03125-17.6289062-7.917969-17.65625-17.65625v-158.898438zm0 0" fill="#e6e7e8"></path><path d="m512 17.65625v158.894531h-512v-158.894531c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0" fill="#c03a2b"></path></svg>IND</a>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="<?php echo base_url(). 'en/home' ?> "><svg version="1.1" id="Layer_1" height="10pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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


        <!--================Slider Area =================-->
        <section class="new_area">
                    <div class="content">
                        <h1 class="balance-text" style="">Königeld Point of Sale<br data-owner="balance-text">the new way to be jack of sales.</h1>
                    <div class="small-btn">
                        <div class="col-md-auto">
                            <a class="more_btn" href="<?php echo base_url(). 'signup' ?> ">Try for free</a></div>
                        </div>
                    </div>
        </section>
        <section class="section-screenshot bg-theme-to-konig">
            <div class="content">
                <div class="konipos-entry position-relative">
                    <div class="frame frame-tablet">
                        <div class="frame-chrome">
                            <div class="frame-ui frame-home"></div>
                            <div class="frame-ui frame-camera"></div>
                            <div class="frame-image">
                                <picture id="uid-4pMiibKOs8MoOUEa2uwc8S-509d604d2b90d4fe68ab3e10457450c87a48b447fa01247315477f6e0d5f832b" class="apropos">
                                    <source media="(min-width: 1292px)" srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=823&amp;h=617&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=1646&amp;h=1234&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x">
                                    <source media="(min-width: 1024px)" srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=703&amp;h=527&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=1406&amp;h=1054&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x">
                                    <source media="(min-width: 718px)" srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=551&amp;h=413&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=1102&amp;h=826&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x">
                                    <source media="(min-width: 480px)" srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=343&amp;h=257&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=686&amp;h=514&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x">
                                    <source media="(min-width: 374px)" srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=262&amp;h=197&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=524&amp;h=394&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x">
                                    <img srcset="//images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=224&amp;h=168&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4pMiibKOs8MoOUEa2uwc8S/1833425239575fd88e8d44f53e737f90/PD00387_-_Retail_Apparel_POS_Tablet_Hero.png?w=448&amp;h=336&amp;fm=jpg&amp;q=90&amp;bg=rgb%3Aeceef1&amp;fit=thumb&amp;fl=progressive 2x" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="></picture>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <!--================End Slider Area =================-->

        <!--================Video Area =================-->
        <section class="video_area auto-layout flex-valign-middle">
            <div class="content">
                <div class="intro">
                    <div class="font-size-large align-center">
                        <h2 class="balance-text h2" style="">Built for simplicity, and trusted by more<br data-owner="balance-text">than 1000 businesses globally.</h2><p>Set up your Königeld Point of Sale system with ease. The intuitive order and payment flow makes POS transactions a snap and let you effortlessly manage employees and your entire business.</p>
                        <div class="grid grid-space-base">
                            <div class="column">
                                <a class="video-player-link display-inline-block" data-entry-id="7GvbB2VTk4GKcAqUsQkSs" href="https://www.youtube.com/watch?v=NfCFAsJsNp8&amp;feature=youtu.be">
                                    <div class="grid-auto grid-space-base grid-valign-middle">
                                        <div class="column">
                                            <div class="icon-play icon-play-small"></div>
                                        </div>
                                        <div class="column">Watch the video</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--================End Video Area =================-->

        <!--================Feature Area =================-->
        <section class="feature_area">
            <div class="container">
                <div class="c_title">
                    <img src="<?php echo base_url(); ?>assets/img/icon/title-icon2.png" alt="">
                    <h6>Why Königeld?</h6>
                    <h2>With Königeld, it’s easy to get work:</h2>
                </div>
                <div class="row feature_inner">
                    <div class="col-lg-4 col-sm-6">
                        <div class="feature_item">
                            <div class="f_icon">
                                <img src="<?php echo base_url(); ?>assets/img/icon/f-icon-1.png" alt="">
                            </div>
                            <h4>Future Payment Network</h4>
                            <p>Easy to use, very light, fast, and reliable point of sale.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="feature_item">
                            <div class="f_icon">
                                <img src="<?php echo base_url(); ?>assets/img/icon/f-icon-2.png" alt="">
                            </div>
                            <h4>User Friendly Design</h4>
                            <p>Königeld is very practical and easy to use by your cashier staff. The initial setup process is fast, in just a few minutes you can sell and use Königeld as a cash register.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="feature_item">
                            <div class="f_icon">
                                <img src="<?php echo base_url(); ?>assets/img/icon/f-icon-3.png" alt="">
                            </div>
                            <h4>Complete Sales Report</h4>
                            <p>You can access all real-time sales reports from smartphones, and computers. Anytime and anywhere!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Feature Area =================-->

        <!--================The benefits Area =================-->
        <section class="benefits_area auto-layout flex-valign-middle">
            <div class="content">
                <div class="grid-space-medium grid-space-large-at-medium">
                    <div class="column">
                        <div class="grid-2-at-medium grid-valign-middle">
                            <div class="column">
                                <div class="position-relative">
                                  <picture id="feature" class="apropos">
                                    <img src="<?php echo base_url(); ?>assets/img/inventorymanagement@2x.png" alt="">
                                  </picture>
                                </div>
                            </div>
                            <div class="column align-left content-cell-padding-left">
                                <div class="general-1">
                                    <h3 class="general-text">Manage your products</h3>
                                    <p>Adjust your owned products by add different features such as product IDs, and stocks dynamically.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="grid-2-at-medium grid-valign-middle grid-reverse">
                            <div class="column">
                                <div class="position-relative">
                                    <picture id="feature" class="apropos">
                                        <img src="<?php echo base_url(); ?>assets/img/monitoringrealtime@2x.png" alt="">
                                    </picture>
                                </div>
                            </div>
                            <div class="column align-left content-cell-padding-right">
                                <div class="general-2">
                                    <h3 class="general-text">Excellent for business basics</h3>
                                    <p>Through your Königeld account, you could learn various unique features inside and very user-friendly interface for new users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="grid-2-at-medium grid-valign-middle">
                            <div class="column">
                                <div class="position-relative">
                                  <picture id="feature" class="apropos">
                                    <img src="<?php echo base_url(); ?>assets/img/analyzingsales@2x.png" alt="">
                                  </picture>
                                </div>
                            </div>
                            <div class="column align-left content-cell-padding-left">
                                <div class="general-1">
                                    <h3 class="general-text">Do it all with Deustch style </h3>
                                    <p>Sign in anytime, anywhere from any device and compare results day over day, or year over year, to see what's working best.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="grid-2-at-medium grid-valign-middle grid-reverse">
                            <div class="column">
                                <div class="position-relative">
                                    <picture id="feature" class="apropos">
                                        <img src="<?php echo base_url(); ?>assets/img/beaking@2x.png" alt="">
                                    </picture>
                                </div>
                            </div>
                            <div class="column align-left content-cell-padding-right">
                                <div class="general-2">
                                    <h3 class="general-text">Be a jack of all sales</h3>
                                    <p>Königeld gives you more informed decisions and analytics for your entire business. Through this process, you could be a king of transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!--================End Benefits Area =================-->

        <!--================More Features Area =================-->
        <section class="section-one-column bg-accent auto-layout flex-valign-middle">
            <div class="content">
                <div class="intro">
                    <div class="font-size-large align-center white">
                        <h2 class="bold">Bargeld ist König</h2>
                        <p>For a better online transaction processing, take a look how Königeld is valuable for you.</p>
                    </div>
                    <div class="grid grid-space-base">
                        <div class="column">
                            <div class="display-inline-block">
                                <a class="button gap-none" href="<?php echo base_url(). 'english_features' ?> ">SHOW ME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--<section class="team_people_area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="team_people_text">
                            <div class="l_title">
                                <img src="<?php echo base_url(); ?>assets/img/icon/titlee-icon.png" alt="">
                                <h6>Discover the features</h6>
                                <h2>We build a strong team of great people</h2>
                            </div>
                            <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra.</p>
                            <ul>
                                <li><a href="#">Nunc nec maximus dui, </a></li>
                                <li><a href="#">Aenean pellentesque elit vitae</a></li>
                                <li><a href="#">Aenean pellentesque elit vitae</a></li>
                                <li><a href="#">Ex mauris, ornare eget pretium </a></li>
                                <li><a href="#">Cras ex mauris, ornare eget preti</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="team_img_inner">
                            <div class="row">
                                <div class="col-lg-6 col-6">
                                    <div class="team_img_item">
                                        <img src="<?php echo base_url(); ?>assets/img/team/people/people-1.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <div class="team_img_item">
                                        <img src="<?php echo base_url(); ?>assets/img/team/people/people-2.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <div class="team_img_item">
                                        <img src="<?php echo base_url(); ?>assets/img/team/people/people-3.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <div class="team_img_item">
                                        <img src="<?php echo base_url(); ?>assets/img/team/people/people-4.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
        <!--================End More Features Area =================-->

        <!--================Contact Area =================-->
        <section class="get_in_touch_area">
            <div class="container">
                <div class="row get_touch_inner">
                    <div class="col-lg-6">
                        <form class="contact_us_form row" action="<?php echo base_url(). 'contactus' ?>" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
                            <div class="form-group col-lg-12">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Your Email">
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="text" class="form-control" id="subject" name="csubject" placeholder="Subject*">
                            </div>
                            <div class="form-group col-lg-12">
                                <textarea class="form-control" id="message" name="cmessage" rows="1" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group col-lg-12">
                                <button type="submit" value="submit" class="konibutton submit_btn form-control">SEND</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6">
                        <div class="touch_details">
                            <div class="l_title">
                                <img src="<?php echo base_url(); ?>assets/img/icon/title-icon3.png" alt="">
                                <h6>Get in touch</h6>
                                <h2>Contact Us</h2>
                            </div>
                            <p>Have any questions? We will support your request as soon as possible!</p>
                            <a href="#"><h5>Contact us now</h5></a>
                            <a href="#"><h4>konigeld@gmail.com</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Contact Area =================-->

        <!--================Map Area =================-->
        <section class="world_map_area p_100">
            <div class="container">
                <div class="world_map_inner">
                    <img class="img-fluid" src="<?php echo base_url(); ?>assets/img/world-map.png" alt="">
                    <div class="bd-callout">
                        <h3>Double Jo's</h3>
                        <p>Ruko Golden 8 Extension Blok G No. 8<br> Jalan Ki Hajar Dewantara, Serpong<br> Tangerang, Banten, Indonesia</p>
                        <h4><a href="#">+62 xxxx xxxx xxxx</a> <a href="mailto:konigeld@gmail.com">hello@doublejos.com</a></h4>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Map Area =================-->

        <!--================Footer Area =================-->

            <div class="footr_wrapper">
                <div class="container">
                <footer class="footr_area">
                <div class="footer_koni">
                    <div class="footer_copyright">
                        <div class="left footer_dropdown">
                            <ul class="lang-title footer_dropdown">
                                <li>
                                    <a href="<?php echo base_url(). 'en/home' ?>">
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
                                    <a href="<?php echo base_url(). 'id/home'?>">
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
