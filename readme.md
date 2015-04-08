Table Dropdown plugin for TinyMCE 3.x
=====================================

_Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)_

_Licensed under the MIT license: http://opensource.org/licenses/MIT_

## Overview

This plugin creates a single split-button with all available table options in a
dropdown.  If you need to have access to all of TinyMCE's table controls but
don't want to clutter your toolbar, this is the plugin you've been searching for.

__Note: this plugin is for TinyMCE 3.x, not TinyMCE 4.x!__


## Screenshot and More Info

	http://www.abeautifulsite.net/blog/2011/12/tinymce-table-dropdown-plugin/


## Usage

1. Copy the /tableDropdown/ plugin folder to tinymce/jscripts/tiny_mce/plugins/
2. Add tableDropdown to your TinyMCE init:
	tinyMCE.init({
		[...]
	    plugins: 'paste, fullscreen, [...], table, tableDropdown',
		theme_advanced_buttons1: "undo, redo, [...], tableDropdown",
		[...]
	});
3. Enjoy your new table dropdown!