<?php 

/**
 * ACF Option Page
 */

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Sidebar Settings',
		'menu_title'	=> 'Sidebar',
		'parent_slug'	=> 'theme-general-settings',
    ));
    
    acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme About Settings',
		'menu_title'	=> 'About Me',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Resume Settings',
		'menu_title'	=> 'Resume',
		'parent_slug'	=> 'theme-general-settings',
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Services Settings',
		'menu_title'	=> 'Services',
		'parent_slug'	=> 'theme-general-settings',
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Portfolio Settings',
		'menu_title'	=> 'Portfolio',
		'parent_slug'	=> 'theme-general-settings',
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Contact Settings',
		'menu_title'	=> 'Contact',
		'parent_slug'	=> 'theme-general-settings',
	));
	
}

/*--- Custom Endpoints ---*/
function resumxPwaEndpoints(){
    $bodyTopBg = get_field('bodyTopBg', 'option') ? get_field('bodyTopBg', 'option') : '';
    $bodyBottomBg = get_field('bodyBottomBg', 'option') ? get_field('bodyBottomBg', 'option') : '';
    $mobileMenuImg = get_field('mobileMenuImg', 'option') ? get_field('mobileMenuImg', 'option') : '';

    $userName = get_field('userName', 'option') ? get_field('userName', 'option') : '';
	$designation = get_field('designation', 'option') ? get_field('designation', 'option') : '';
	$profilePicter = get_field('profilePicture', 'option') ? get_field('profilePicture', 'option') : ''  ;
	$socialLinks = get_field('socialLinks', 'option') ? get_field('socialLinks', 'option') : '';
    $sidebarBtnOne = get_field('sidebarBtnOne', 'option') ? get_field('sidebarBtnOne', 'option') : '';
    $sidebarBtnTwo = get_field('sidebarBtnTwo', 'option') ? get_field('sidebarBtnTwo', 'option') : '';

    $aboutHeading = get_field('aboutHeading', 'option') ? get_field('aboutHeading', 'option') : '';
    $aboutDesc = get_field('aboutDesc', 'option') ? get_field('aboutDesc', 'option') : '';
    $testimonialHeading = get_field('testimonialHeading', 'option') ? get_field('testimonialHeading', 'option') : '';
    $testimonials = get_field('testimonials', 'option') ? get_field('testimonials', 'option') : '';
    $skills = get_field('skills', 'option') ? get_field('skills', 'option') : '';

    $resumeHeading = get_field('resumeHeading', 'option') ? get_field('resumeHeading', 'option') : '';
	$resumeSections = get_field('resumeSections', 'option') ? get_field('resumeSections', 'option') : '';
	
    $servicesHeading = get_field('servicesHeading', 'option') ? get_field('servicesHeading', 'option') : '';
    $servicesItems = get_field('servicesItems', 'option') ? get_field('servicesItems', 'option') : '';
	
	$portfolioHeading = get_field('portfolioHeading', 'option') ? get_field('portfolioHeading', 'option') : '';
	$portfolioItems = get_field('portfolios', 'option') ? get_field('portfolios', 'option') : '';

	$contactHeadding = get_field('contactHeadding', 'option') ? get_field('contactHeadding', 'option') : '';
	$contactInfos = get_field('contactInfos', 'option') ? get_field('contactInfos', 'option') : '';
    
	$pwaData = [
        'general' => [
			'bodyTopBg'     => $bodyTopBg,
			'bodyBottomBg'  => $bodyBottomBg,
			'mobileMenuImg' => $mobileMenuImg
		],
		'sidebar' => [
			'name'           => $userName,
			'designation'    => $designation,
			'profilePicture' => $profilePicter,
			'socialLinks'    => $socialLinks,
			'sidebarBtnOne'  => $sidebarBtnOne,
			'sidebarBtnTwo'  => $sidebarBtnTwo
        ],
        'aboutMe' => [
            'aboutHeading'       => $aboutHeading,
            'aboutDesc'          => $aboutDesc,
            'testimonialHeading' => $testimonialHeading,
            'testimonials'       => $testimonials,
            'skills'             => $skills,
        ],
        'resume' => [
            'resumeHeading'  => $resumeHeading,
            'resumeSections' => $resumeSections
        ],
        'service' => [
            'servicesHeading' => $servicesHeading,
            'ServiceItems'    => $servicesItems
        ],
        'portfolio' => [
            'portfolioHeading' => $portfolioHeading,
            'portfolioItems'   => $portfolioItems
		],
        'contact' => [
            'contactHeadding' => $contactHeadding,
            'contactInfos'    => $contactInfos,
        ]
	
	];
	return $pwaData;
}

add_action('rest_api_init', function(){
	register_rest_route('pwa/v1', 'data', [
		'methods'  => 'GET',
		'callback' => 'resumxPwaEndpoints'
	]);
});