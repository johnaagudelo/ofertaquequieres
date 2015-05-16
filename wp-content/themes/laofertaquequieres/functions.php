<?php

/******************************/
/* Define Constant*/
/**********************/
define('THEMEROOT', get_stylesheet_directory_uri());
define('IMAGES', THEMEROOT . '/images');
define('JS', THEMEROOT . '/js');
add_theme_support( 'post-thumbnails' );
// Registramos un nuevo tipo de post los slider
    add_action('init', 'register_dd', 1);
    function register_dd() {
        $labels = array(
            'name' => _x('slider', 'slider'),
            'singular_name' => _x('slider', 'slider'),
            'add_new' => _x('Añadir nuevo', 'slider'),
            'add_new_item' => __('Añadir nuevo slider'),
            'edit_item' => __('Editar slider'),
            'new_item' => __('Nuevo slider'),
            'view_item' => __('Ver slider'),
            'search_items' => __('Buscar discos slider'),
            'not_found' =>  __('No se ha encontrado nada'),
            'not_found_in_trash' => __('No se ha encontrado nada en la papelera'),
        );
        $args = array(
            'labels' => $labels,
            'public' => true,
            'hierarchical' => false,
            'menu_position' => 5,
            'has_archive' => true,
            'query_var' => true,
            'supports' => array('title','editor','thumbnail'),
            'rewrite' => array('slug' => 'slider'),
        );

        register_post_type( 'slider', $args );
    }
?>