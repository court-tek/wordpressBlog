<?php
/*
   =====================================================
   Include scripts
   =====================================================
*/
function autodidact_script_enqueue() {
  wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/auto.css', array(), '1.0.0', 'all');
  wp_enqueue_script('customjs', get_template_directory_uri() . '/js/auto.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'autodidact_script_enqueue');
/*
   =====================================================
   Activate menus
   =====================================================
*/
function autodidact_theme_setup() {

}
