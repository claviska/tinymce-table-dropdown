/*
 *
 * Table Dropdown Plugin for TinyMCE
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. — www.abeautifulsite.net
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
(function() {
	
	tinymce.create('tinymce.plugins.TableDropdown', {
		
	    createControl: function(n, cm) {
	    	
	        switch( n ) {
				
	            case 'tableDropdown':
	            	
	                var c = cm.createSplitButton('tableDropdown', {
	                    title : 'Table Options',
	                    'class': 'mce_table',
	                    onclick: function() {
	                        tinymce.activeEditor.execCommand('mceInsertTable');
	                    }
	                });
					
	                c.onRenderMenu.add(function(c, m) {
	                    
						m.add({
							title: 'table.desc', 
							'class': 'mce-insert-table', 
							icon: 'table', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceInsertTable');
							}
						});
						
						m.add({
							title: 'table.del',
							icon: 'delete_table',
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableDelete');
							}
						}).setDisabled(1);
						
						m.addSeparator();
						
						m.add({
							title: 'table.row_desc', 
							icon: 'row_props', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableRowProps');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.cell_desc', 
							icon: 'cell_props', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableCellProps');
							}
						}).setDisabled(1);
						
						m.addSeparator();
						
						m.add({
							title: 'table.row_before_desc', 
							icon: 'row_before', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableInsertRowBefore');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.row_after_desc', 
							icon: 'row_after', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableInsertRowAfter');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.delete_row_desc', 
							icon: 'delete_row', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableDeleteRow');
							}
						}).setDisabled(1);
						
						m.addSeparator();
						
						m.add({
							title: 'table.col_before_desc', 
							icon: 'col_before', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableInsertColBefore');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.col_after_desc', 
							icon: 'col_after', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableInsertColAfter');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.delete_col_desc', 
							icon: 'delete_col', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableDeleteCol');
							}
						}).setDisabled(1);
						
						m.addSeparator();
						
						m.add({
							title: 'table.merge_cells_desc', 
							icon: 'merge_cells', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableMergeCells');
							}
						}).setDisabled(1);
						
						m.add({
							title: 'table.split_cells_desc', 
							icon: 'split_cells', 
							onclick: function() {
								tinymce.activeEditor.execCommand('mceTableSplitCells');
							}
						}).setDisabled(1);
						
						// Enable/disable menu items on node change
						c.editor.onNodeChange.add( function(ed, cm, n, co) {
							var items = items = ed.controlManager.controls[ed.id + '_tableDropdown'].menu.items,
								p = ed.dom.getParent(ed.selection.getStart(), 'td,th,caption');
							if( p && p.nodeName === 'CAPTION' ) p = 0;
							tinymce.each(items, function(t) {
								if( t.settings.icon === 'table' ) return;
								t.setDisabled(!p);
							});
						});
						
					});
	                
	                return c;
	        }
	
	        return null;
	        
	    }
	});
	
	// Register plugin
	tinymce.PluginManager.add('tableDropdown', tinymce.plugins.TableDropdown);
	
})();