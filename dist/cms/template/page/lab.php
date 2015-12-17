<section id="container">
        <article id="lab">
            <h1>Lab</h1>
            <ul class="item-list">
                <?php
                $lab_items = $this->getVar('lab_items');
                foreach($lab_items as $item){
                    $slug = $item['slug'];
                    $name = $item['name'];
                    echo "<li class=\"item\"><a href=\"/lab/$slug\">$name</a></li>";
                } ?>
            </ul>
            <div class="lab-item">
                <iframe height='500' scrolling='no' src='//codepen.io/MangoJuice/embed/BFznK/?height=500&theme-id=21163&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MangoJuice/pen/BFznK/'>BFznK</a> by MangoJuice (<a href='http://codepen.io/MangoJuice'>@MangoJuice</a>) on <a href='http://codepen.io'>CodePen</a>.
                </iframe>
            </div>
        </article>
</section>