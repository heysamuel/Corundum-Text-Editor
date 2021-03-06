// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require codemirror
//= require codemirror/modes/xml
//= require codemirror/modes/htmlmixed
//= require codemirror/modes/javascript
//= require codemirror/modes/ruby
//= require codemirror/modes/haml
//
var editor;
//method steven wrote to handle uploaded files slightly edited
function openFile(event) {
  var reader = new FileReader();
  var cm = $('.CodeMirror')[0].CodeMirror;
  reader.readAsText(event.target.files[0]);
  reader.onload = function(){ cm.setValue(reader.result); }
};

//function to change the language used for highlighting
function ChangeHighlighting(){
  var e = document.getElementById('highlight');
  var mode = e.options[e.selectedIndex].value;
  editor.setOption("mode", mode);
  //CodeMirror.autoLoadMode(editor, "javascript");
}
//basically the onload function
$( document ).on('turbolinks:load', function() {
  $("textarea").each(function() {
      editor = CodeMirror.fromTextArea($(this).get(0), {
        lineNumbers: true,
        mode: "htmlmixed"
      });
    });

});
