/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'social\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-socialtwitter' : '&#xe000;',
			'icon-socialwindow' : '&#xe001;',
			'icon-socialmail' : '&#xe002;',
			'icon-socialtwitter-2' : '&#xe003;',
			'icon-socialbrowser' : '&#xe004;',
			'icon-socialcode' : '&#xe006;',
			'icon-socialmail-2' : '&#xe007;',
			'icon-socialcode-2' : '&#xe008;',
			'icon-socialcode-3' : '&#xe009;',
			'icon-socialsearch' : '&#xe00a;',
			'icon-sociallink' : '&#xe00b;',
			'icon-socialuser-add' : '&#xe00c;',
			'icon-socialinstagram' : '&#xe00d;',
			'icon-socialuser' : '&#xe005;',
			'icon-socialarrow-down' : '&#xe00e;',
			'icon-socialdribbble' : '&#xe00f;',
			'icon-socialdribbble-2' : '&#xe010;',
			'icon-socialcontract' : '&#xe011;',
			'icon-socialfacebook' : '&#xe012;',
			'icon-socialfacebook-2' : '&#xe013;',
			'icon-socialtwitter-3' : '&#xe014;',
			'icon-socialfacebook-3' : '&#xe015;',
			'icon-socialmobile' : '&#xe016;',
			'icon-socialhash' : '&#xe017;',
			'icon-socialfacebook-4' : '&#xe018;',
			'icon-socialarrow-left' : '&#xe019;',
			'icon-socialuntitled' : '&#xe01a;',
			'icon-socialarrow-right' : '&#xe01b;',
			'icon-socialarrow-left-2' : '&#xe01c;',
			'icon-socialarrow-left-3' : '&#xe01d;',
			'icon-socialarrow-right-2' : '&#xe01e;',
			'icon-socialfeather' : '&#xe01f;',
			'icon-socialpencil' : '&#xe020;',
			'icon-socialmouse' : '&#xe021;',
			'icon-socialmobile-2' : '&#xe022;',
			'icon-sociallocation' : '&#xe023;',
			'icon-sociallocation-2' : '&#xe024;',
			'icon-socialpalette' : '&#xe025;',
			'icon-socialtag' : '&#xe026;',
			'icon-socialeye' : '&#xe027;',
			'icon-socialnewspaper' : '&#xe028;',
			'icon-socialtools' : '&#xe029;',
			'icon-socialtrophy' : '&#xe02a;',
			'icon-socialhourglass' : '&#xe02b;',
			'icon-socialrocket' : '&#xe02c;',
			'icon-socialbrush' : '&#xe02d;',
			'icon-socialinfinity' : '&#xe02e;',
			'icon-socialkeyboard' : '&#xe02f;',
			'icon-socialbookmark' : '&#xe030;',
			'icon-socialupload' : '&#xe031;',
			'icon-socialpublish' : '&#xe032;',
			'icon-socialvoicemail' : '&#xe033;',
			'icon-socialnew' : '&#xe034;',
			'icon-socialflag' : '&#xe035;',
			'icon-socialmegaphone' : '&#xe036;',
			'icon-socialdrawer' : '&#xe037;',
			'icon-socialcoffee' : '&#xe038;',
			'icon-socialhamburger' : '&#xe039;',
			'icon-socialdrink' : '&#xe03a;',
			'icon-socialmug' : '&#xe03b;',
			'icon-socialcup' : '&#xe03c;',
			'icon-socialdrink-2' : '&#xe03d;',
			'icon-socialmug-2' : '&#xe03e;',
			'icon-socialmug-3' : '&#xe03f;',
			'icon-socialdrink-3' : '&#xe040;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-social[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};