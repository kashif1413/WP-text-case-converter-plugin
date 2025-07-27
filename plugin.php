<?php
/*
Plugin Name: Case Converter Tool
Plugin URI:  https://github.com/kashif1413/WP-text-case-converter-plugin
Description: A simple case converter tool.
Version: 1.4
Date : 07/21/2025
Author: Kashif Ajmal
Author URI: https://github.com/kashif1413
GitHub Plugin URI: kashif1413/WP-text-case-converter-plugin
Primary Branch: main
*/


function cc_tool_shortcode() {
    ob_start(); ?>
    <!-- Include your tool HTML/CSS/JS -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">

    <?php include plugin_dir_path(__FILE__) . 'text-case-converter-tool.html'; ?>
    <?php
    return ob_get_clean();
}
add_shortcode('case_converter', 'cc_tool_shortcode');
