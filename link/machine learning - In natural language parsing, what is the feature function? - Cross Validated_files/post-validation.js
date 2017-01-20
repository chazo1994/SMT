StackExchange.postValidation=function(){function e(e,t,n,r){var i=e.find('input[type="submit"]:visible'),a=i.length&&i.is(":enabled");a&&i.attr("disabled",!0),o(e,r),s(e,t,n,r),u(e),l(e),d(e);var p=function(){1!=t||e.find(E).length?(c(e,r),a&&i.attr("disabled",!1)):setTimeout(p,250)};p()}function t(t,r,o,s,c){e(t,r,s,o);var u,l=function(e){if(e.success)if(c)c(e);else{var n=window.location.href.split("#")[0],i=e.redirectTo.split("#")[0];0==i.indexOf("/")&&(i=window.location.protocol+"//"+window.location.hostname+i),u=!0,window.location=e.redirectTo,n.toLowerCase()==i.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?e.nocaptcha?StackExchange.nocaptcha.init(e.captchaHtml,l):StackExchange.captcha.init(e.captchaHtml,l):e.errors?(t.find("input[name=priorAttemptCount]").val(function(e,t){return(+t+1||0).toString()}),h(e.errors,t,r,o,e.warnings)):t.find('input[type="submit"]:visible').parent().showErrorMessage(e.message)};t.submit(function(){if(t.find("#answer-from-ask").is(":checked"))return!0;var e=t.find(S);if("[Edit removed during grace period]"==$.trim(e.val()))return m(e,["Comment reserved for system use. Please use an appropriate comment."],p()),!1;a(),StackExchange.navPrevention&&StackExchange.navPrevention.stop();var r=t.find('input[type="submit"]:visible');if(r.parent().addSpinner(),StackExchange.helpers.disableSubmitButton(t),StackExchange.options.site.enableNewTagCreationWarning){var s=t.find(E).parent().find("input#tagnames"),c=s.prop("defaultValue");if(s.val()!==c)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":s.val()},"success":function(e){e.showWarning?r.loadPopup({"html":e.html,"dontShow":!0,"prepend":!0,"loaded":function(e){n(e,t,u,o,l)}}):i(t,o,u,l)}}),!1}return setTimeout(function(){i(t,o,u,l)},0),!1})}function n(e,t,n,a,o){e.bind("popupClose",function(){r(t,n)}),e.find(".submit-post").click(function(r){return StackExchange.helpers.closePopups(e),i(t,a,n,o),r.preventDefault(),!1}),e.show()}function r(e,t){StackExchange.helpers.removeSpinner(),t||StackExchange.helpers.enableSubmitButton(e)}function i(e,t,n,i){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":i,"error":function(){var n;switch(t){case"question":n="An error occurred submitting the question.";break;case"answer":n="An error occurred submitting the answer.";break;case"edit":n="An error occurred submitting the edit.";break;case"tags":n="An error occurred submitting the tags.";break;case"post":default:n="An error occurred submitting the post."}e.find('input[type="submit"]:visible').parent().showErrorMessage(n)},"complete":function(){r(e,n)}})}function a(){for(var e=0;e<_.length;e++)clearTimeout(_[e]);_=[]}function o(e,t){var n=e.find(y);n.length&&n.blur(function(){_.push(setTimeout(function(){var r=n.val(),i=$.trim(r);if(0==i.length)return w(e,n),void 0;var a=n.data("min-length");if(a&&i.length<a)return m(n,[function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":a})],p()),void 0;var o=n.data("max-length");return o&&i.length>o?(m(n,[function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})],p()),void 0):($.ajax({"type":"POST","url":"/posts/validate-title","data":{"title":r},"success":function(r){r.success?w(e,n):m(n,r.errors.Title,p()),"edit"!=t&&g(e,n,r.warnings.Title)},"error":function(){w(e,n)}}),void 0)},q))})}function s(e,t,n,r){var i=e.find(C);i.length&&i.blur(function(){_.push(setTimeout(function(){var a=i.val(),o=$.trim(a);if(0==o.length)return w(e,i),void 0;if(5==t){var s=i.data("min-length");return s&&o.length<s?m(i,[function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":o.length})],p()):w(e,i),void 0}(1==t||2==t)&&$.ajax({"type":"POST","url":"/posts/validate-body","data":{"body":a,"oldBody":i.prop("defaultValue"),"isQuestion":1==t,"isSuggestedEdit":n},"success":function(t){t.success?w(e,i):m(i,t.errors.Body,p()),"edit"!=r&&g(e,i,t.warnings.Body)},"error":function(){w(e,i)}})},q))})}function c(e,t){var n=e.find(E);if(n.length){var r=n.parent().find("input#tagnames");r.blur(function(){_.push(setTimeout(function(){var i=r.val(),a=$.trim(i);return 0==a.length?(w(e,n),void 0):($.ajax({"type":"POST","url":"/posts/validate-tags","data":{"tags":i,"oldTags":r.prop("defaultValue")},"success":function(r){if(r.success?w(e,n):m(n,r.errors.Tags,p()),"edit"!=t&&(g(e,n,r.warnings.Tags),r.source&&r.source.Tags&&r.source.Tags.length)){var i=$("#post-form input[name='warntags']");i&&StackExchange.using("gps",function(){var e=i.val()||"";$.each(r.source.Tags,function(t,n){n&&!i.data("tag-"+n)&&(i.data("tag-"+n,n),e=e.length?e+" "+n:n,StackExchange.gps.track("tag_warning.show",{"tag":n},!0))}),i.val(e),StackExchange.gps.sendPending()})}},"error":function(){w(e,n)}}),void 0)},q))})}}function u(e){var t=e.find(S);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),r=$.trim(n);if(0==r.length)return w(e,t),void 0;var i=t.data("min-length");if(i&&r.length<i)return m(t,[function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":i})],p()),void 0;var a=t.data("max-length");return a&&r.length>a?(m(t,[function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":a})],p()),void 0):(w(e,t),void 0)},q))})}function l(e){var t=e.find(T);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),r=$.trim(n);if(0==r.length)return w(e,t),void 0;var i=t.data("min-length");if(i&&r.length<i)return m(t,[function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":i,"actual":r.length})],p()),void 0;var a=t.data("max-length");return a&&r.length>a?(m(t,[function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":a,"actual":r.length})],p()),void 0):(w(e,t),void 0)},q))})}function d(e){var t=e.find(A);t.length&&t.blur(function(){_.push(setTimeout(function(){var n=t.val(),r=$.trim(n);return 0==r.length?(w(e,t),void 0):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(n)?(w(e,t),void 0):(m(t,["This email does not appear to be valid."],f()),void 0)},q))})}function p(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"max-width":e,"min-width":e},"closeOthers":!1}}function f(){var e=$("#sidebar, .sidebar").first().width()||270;return{"position":{"my":"left top","at":"right center"},"css":{"min-width":e},"closeOthers":!1}}function h(e,t,n,r,i){if(e){var a=function(){var n=0,a=t.find(E),o=t.find(y),s=t.find(C);m(o,e.Title,p())?n++:w(t,o),i&&g(t,o,i.Title),m(s,e.Body,p())?n++:w(t,s),i&&g(t,s,i.Body),m(a,e.Tags,p())?n++:w(t,a),i&&g(t,a,i.Tags),m(t.find(S),e.EditComment,p())?n++:w(t,t.find(S)),m(t.find(T),e.Excerpt,p())?n++:w(t,t.find(T)),m(t.find(A),e.Email,f())?n++:w(t,t.find(A));var c=t.find(".general-error"),u=e.General&&e.General.length>0;if(u||n>0){if(!c.length){var l=t.find('input[type="submit"]:visible');l.before('<div class="general-error-container"><div class="general-error"></div><br class="cbt" /></div>'),c=t.find(".general-error")}if(u)m(c,e.General,{"position":"inline","css":{"float":"left","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1});else{w(t,c);var d;switch(r){case"question":d=function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"answer":d=function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"edit":d=function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"tags":d=function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":n});break;case"post":default:d=function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":n})}c.text(d)}}else t.find(".general-error-container").remove();var h;x()&&($("#sidebar").animate({"opacity":.4},500),h=setInterval(function(){x()||($("#sidebar").animate({"opacity":1},500),clearInterval(h))},500));var v;t.find(".validation-error").each(function(){var e=$(this).offset().top;(!v||v>e)&&(v=e)});var b=function(){for(var e=0;3>e;e++)t.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(v){var k=$(".review-bar").length;v=Math.max(0,v-(k?125:30)),$("html, body").animate({"scrollTop":v},b)}else b()},o=function(){1!=n||t.find(E).length?a():setTimeout(o,250)};o()}}function g(e,t,n){var r=p();if(r.type="warning",!n||0==n.length)return b(e,t),!1;var i=t.data("error-popup"),a=0;return i&&(a=i.height()+5),v(t,n,r,a)}function m(e,t,n){return n.type="error",v(e,t,n)}function v(e,t,n,r){var i,o=n.type;if(!(t&&0!=t.length&&e.length&&$("html").has(e).length))return!1;if(i=1==t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",i&&i.length>0){var s=e.data(o+"-popup");if(s&&s.is(":visible")){var c=e.data(o+"-message");if(c==i)return s.animateOffsetTop&&s.animateOffsetTop(r||0),!0;s.fadeOutAndRemove()}r>0&&(n.position.offsetTop=r);var u=StackExchange.helpers.showMessage(e,i,n);return u.find("a").attr("target","_blank"),u.click(a),e.addClass("validation-"+o).data(o+"-popup",u).data(o+"-message",i),!0}return!1}function b(e,t){k("warning",e,t)}function w(e,t){k("error",e,t)}function k(e,t,n){if(!n||0==n.length)return!1;var r=n.data(e+"-popup");return r&&r.is(":visible")&&r.fadeOutAndRemove(),n.removeClass("validation-"+e),n.removeData(e+"-popup"),n.removeData(e+"-message"),t.find(".validation-"+e).length||t.find(".general-"+e+"-container").remove(),!0}function x(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var y="input#title",C="textarea.wmd-input:first",E=".tag-editor",S="input[id^=edit-comment]",T="textarea#excerpt",A="input#m-address",_=[],q=250;return{"initOnBlur":e,"initOnBlurAndSubmit":t,"showErrorsAfterSubmission":h,"getSidebarPopupOptions":p}}();