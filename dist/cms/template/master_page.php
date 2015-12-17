<!DOCTYPE html>
<html lang="en">
    <?php $template->get('module', 'head'); ?>
    <body class="<?= $user->getRole(); ?>">
        <?php $template->get('module', 'navigation'); ?>
        <?php $template->get('page', $template->getVar('page')); ?>
        <?php $template->get('module', 'footer'); ?>
        <?php $template->get('module', 'backend_view'); ?>

    </body>
</html>