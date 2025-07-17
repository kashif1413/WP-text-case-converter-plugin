<?php
/*
Plugin Name: ToolsMenia's Case Converter Tool
Description: A simple case converter tool with shortcode.
Version: 1.0
Author: Kashif Ajmal
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
