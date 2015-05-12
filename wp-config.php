<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ofertaquequieres');

/** MySQL database username */
define('DB_USER', 'oferta');

/** MySQL database password */
define('DB_PASSWORD', '6yhn7ujm');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hwNOsKb+aa)tJE5+eI_ync+D_,&m.:5@F35B+k2 N^hDN|*>%kW->QLMPmKJ[@ws');
define('SECURE_AUTH_KEY',  'm&u@_#2As[F5; st1x%-aB3[:oC&`D7&Q{<-S;5ON8aaF=7Ui4q<$-UtJH?<?%wq');
define('LOGGED_IN_KEY',    '<L!R0XR.+HyaxKP6+R|t}Tk[6tO_so M`CM{T-!+0:bUY<?Y>hRiZ`sqzsiTwl1M');
define('NONCE_KEY',        ']Y&K;Z`x5vO~P*^Jr!Z3&w-5|xiRDnst4tIg]6`9@wf(WC{pDf&/9WVxT=NnX9g`');
define('AUTH_SALT',        '7_(YPsiz,RYtHKc*FeuY[ur)ICwA8MT9#zt%,~Bt[gE#GL!,jn %hi%@utO:?rUN');
define('SECURE_AUTH_SALT', '88awb UGb*IE63z6ssH?d,n8p_@wm]g?Tb82SY|-{X0m[xk(eEkHts-.)8&!5s;+');
define('LOGGED_IN_SALT',   'dLo{D;9I9AYQO[$[I{_70aWhqM#|p*I-I8NTcg]?J1*gwAnR35b61Ug*k3HoL|PL');
define('NONCE_SALT',       'xn3QlU.5Y$/:Tw?ESNF4Yk =6MU#kgX1Qn[.`N/1~(c{O+F(+-<b3R7Ne]7,]TJL');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
