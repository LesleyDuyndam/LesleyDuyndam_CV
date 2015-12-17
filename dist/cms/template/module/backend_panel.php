<?php if ( !$this->admin) return false; ?>
<nav class="backend-panel">
    <ul class="cms-menu">
        <li><button data-item="posts">posts</button></li>
        <li><button data-item="labs">labs</button></li>
        <li><button data-item="skills">skills</button></li>
    </ul>
    <ul class="cms-menu user">
        <li><a href="/logout">Logout</a></li>
    </ul>
</nav>