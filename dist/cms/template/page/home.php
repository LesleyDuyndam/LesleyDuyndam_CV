<section id="container">
    <article id="intro">
        <img src="images/LesleyDuyndam_white.svg" id='intro-img' alt="Logo Lesley Duyndam" class="to-middle"/>
    </article>

    <article id="portfolio">

        <div id="belle_vue" style="background-image: url('images/belleVue/belle_vue_background.jpg')">
            <div class="item">
                <header id="belle_vue_item">
                    <img src="images/belleVue/belle_vue_logo.svg" alt="Belle Vue Logo Vector"/>
                </header>
                <div class="content_box">
                    <div class="item_content closed">
                        <h2>Belle Vue Festival</h2>
                        <p>
                            Het <a href="https://nl-nl.facebook.com/festivalBelleVue">Belle Vue Festival</a> wordt tweemaal per jaar in Zundert georganiseerd. Beide edities duren 2 dagen, waarvan de eerste editie zich afspeelt tijdens de <a href="#">Aardbeienfeesten</a> en de tweede tijdens <a href="#">Corso Zundert</a>.
                        </p>
                        <img src="images/belleVue/belle_vue_collors.svg" alt="Belle Vue color palette"/>
                        <h2>Huisstijl</h2>
                        <p>
                            Festival Belle Vue was op zoek naar een unieke, herkenbare huisstijl welke gemakkelijk doorgevoerd kon worden naar zowel online en offline media. Het gebruik van een fris kleurenpallet, een groot contrast en uitgesproken kleuren draagt dan ook sterk bij aan de herkenbaarheid.
                        </p>
                        <img class="dubble" src="images/belleVue/belle_vue_logo_presentation-02.png" alt="Belle Vue Floorplan sketch"/><img class="dubble" src="images/belleVue/belle_vue_logo_presentation-01.png" alt="Belle Vue Floorplan"/>

                        <h2>Media</h2>
                        <p>
                            Naast het verspreiden van posters, wordt met name Facebook ingezet om de doelgroep te bereiken. Drukwerk moet dus zowel op een poster als op een klein smartphonescherm goed tot zijn recht komen.
                        </p>
                        <img src="images/belleVue/belle_vue_plattegrond.png" alt="Belle Vue Floor plan"/>
                    </div>
                </div>
            </div>
            <button class="portfolio_button">
                <img class="button_node" src="images/icons/read_icon.svg" alt="Read more icon"/>
                <span class="button_node">Read more</span>
            </button>
        </div>

    </article>
    <?php if ($user == 'admin' || $content->labs) {?>

        <article id="lab">
            <h1>Lab</h1>
            <ul class="item-list">
                <li class="item">
                    <iframe height='500' scrolling='no' src='//codepen.io/MangoJuice/embed/BFznK/?height=500&theme-id=21163&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MangoJuice/pen/BFznK/'>BFznK</a> by MangoJuice (<a href='http://codepen.io/MangoJuice'>@MangoJuice</a>) on <a href='http://codepen.io'>CodePen</a>.
                    </iframe>
                </li>
            </ul>
        </article>
    <?php }?>


    <article id="skills" data-type="skills">
        <?php $this->get('module', 'cms_edit_button');?>
        <h1>Skills</h1>
        <div id="chart-wrapper">
            <?php foreach($this->getVar('skills') as $skill) { ?>
                <div class="wrapper <?php echo $skill['name']; ?>" data-name="<?php echo $skill['name']; ?>" data-value="<?php echo $skill['value']; ?>"></div>
            <?php }; ?>
        </div>
    </article>


    <article id="about-me">
        <h1>About me</h1>
        <table class="table" itemscope itemtype="http://schema.org/Person">
            <tr>
                <td>Name</td>
                <td><span itemprop="givenName">Lesley</span><span itemprop="additionalName"></span> Christian <span itemprop="familyName">Duyndam</span></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><address itemprop="address">Professor Verbernelaan 112-06</address></td>
            </tr>
            <tr>
                <td>Zip code</td>
                <td><address>5037AK</address></td>
            </tr>
            <tr>
                <td>City</td>
                <td><address>Tilburg</address></td>
            </tr>
            <tr>
                <td>Date of birth</td>
                <td itemprop="birthDate">10-03-1989</td>
            </tr>
            <tr>
                <td>Birthplace</td>
                <td itemprop="birthPlace">Rotterdam, The Netherlands</td>
            </tr>
            <tr>
                <td>Mobile Phone</td>
                <td itemprop="telephone">+316 4546 0121</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>
                    <a href="mailto:lesleyduyndam@gmail.com" rel="author" itemprop="email">lesleyduyndam@gmail.com</a>
                </td>
            </tr>
            <tr>
                <td>Facebook</td>
                <td>
                    <a href="https://www.facebook.com/lesley.duyndam">facebook.com/lesley.duyndam</a>
                </td>
            </tr>
        </table>

        <a class="github" target="_blank" title="Open @LesleyDuyndam on Github on a new tab" href="https://www.github.com/LesleyDuyndam">
            <img src="images/icons/github.svg" alt=""/>
            <span>Go to @LesleyDuyndam</span>
        </a>

    </article>

    <!--<article id="education">-->
    <!--<h1>Education</h1>-->
    <!--<table class="extended">-->
    <!--<tr>-->
    <!--<td>2001 - 2005</td>-->
    <!--<td>-->
    <!--<h1>Mencia Sandrode</h1>-->
    <!--<h2>Zundert</h2>-->
    <!--<span>VMBO</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2005-2009</td>-->
    <!--<td>-->
    <!--<h1>De Rooi Pannen</h1>-->
    <!--<h2>Breda</h2>-->
    <!--<span>MBO | Hotel ondernemer/manager</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2009 - now</td>-->
    <!--<td>-->
    <!--<h1>Fontys ACI</h1>-->
    <!--<h2>Tilburg</h2>-->
    <!--<span>HBO | CO-IEMES</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->
    <!--</article>-->

    <!--<article id="work">-->
    <!--<h1>Work</h1>-->
    <!--<table class="extended">-->
    <!--<tr>-->
    <!--<td>2005 - 2008</td>-->
    <!--<td>-->
    <!--<h1><a href="http://www.kirroyal.nl">Restaurant Kir Royal </a></h1>-->
    <!--<h2>Schijf</h2>-->
    <!--<span>Service</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2008 - now</td>-->
    <!--<td>-->
    <!--<h1><a href="https://www.facebook.com/cafedenbels">Cafe Den Bels</a></h1>-->
    <!--<h2>Zundert</h2>-->
    <!--<span>Service & Promotions</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2013 | Project based</td>-->
    <!--<td>-->
    <!--<h1><a href="http://www.aboutplants.nl">About Plants B.V.</a></h1>-->
    <!--<h2>Wernhout</h2>-->
    <!--<span>Webdesign & Promotions</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->

    <!--<h1 class="internships">Internships</h1>-->
    <!--<table class="extended">-->
    <!--<tr>-->
    <!--<td>2008</td>-->
    <!--<td>-->
    <!--<h1><a href="http://www.amathuslimassol.com/">Amathus Beach Hotel</a></h1>-->
    <!--<h2>Limassol, Cyprus</h2>-->
    <!--<span>Service</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2009</td>-->
    <!--<td>-->
    <!--<h1><a href="http://www.wtcrotterdam.nl/">WTC Rotterdam</a></h1>-->
    <!--<h2>Rotterdam</h2>-->
    <!--<span>Service</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>2013</td>-->
    <!--<td>-->
    <!--<h1><a href="http://www.donckhuys.nl">Stichting Donckhuys</a></h1>-->
    <!--<h2>Dongen</h2>-->
    <!--<span>Communication</span>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->

    <!--</article>-->


</section>