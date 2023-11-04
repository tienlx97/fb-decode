var g = !1,
	h: any,
	i: any,
	j: any,
	k: any,
	l: any,
	m: any,
	n: any,
	o: any,
	p: any,
	q: any,
	r: any,
	s: any,
	t: any,
	u: any,
	v: any,
	w: any

function x() {
	if (g) return
	g = !0
	var a = navigator.userAgent,
		b =
			/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
				a
			),
		c = /(Mac OS X)|(Windows)|(Linux)/.exec(a)
	s = /\b(iPhone|iP[ao]d)/.exec(a)
	t = /\b(iP[ao]d)/.exec(a)
	q = /Android/i.exec(a)
	u = /FBAN\/\w+;/i.exec(a)
	v = /FBAN\/mLite;/i.exec(a)
	w = /Mobile/i.exec(a)
	r = !!/Win64/.exec(a)
	if (b) {
		h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN
		h && document && document.documentMode && (h = document.documentMode)
		var d = /(?:Trident\/(\d+.\d+))/.exec(a)
		m = d ? parseFloat(d[1]) + 4 : h
		i = b[2] ? parseFloat(b[2]) : NaN
		j = b[3] ? parseFloat(b[3]) : NaN
		k = b[4] ? parseFloat(b[4]) : NaN
		k
			? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
			  (l = b && b[1] ? parseFloat(b[1]) : NaN))
			: (l = NaN)
	} else h = i = j = l = k = NaN
	if (c) {
		if (c[1]) {
			d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a)
			n = d ? parseFloat(d[1].replace("_", ".")) : !0
		} else n = !1
		o = !!c[2]
		p = !!c[3]
	} else n = o = p = !1
}
function y() {
	return x() || h
}
function a() {
	return x() || m > h
}
function b() {
	return y() && r
}
function c() {
	return x() || i
}
function d() {
	return x() || j
}
function z() {
	return x() || k
}
function e() {
	return z()
}
function A() {
	return x() || l
}
function B() {
	return x() || o
}
function C() {
	return x() || n
}
function D() {
	return x() || p
}
function E() {
	return x() || s
}
function F() {
	return x() || s || t || q || w
}
function G() {
	return x() || v != null ? null : u
}
function H() {
	return x() || q
}
function I() {
	return x() || t
}
f.ie = y
f.ieCompatibilityMode = a
f.ie64 = b
f.firefox = c
f.opera = d
f.webkit = z
f.safari = e
f.chrome = A
f.windows = B
f.osx = C
f.linux = D
f.iphone = E
f.mobile = F
f.nativeApp = G
f.android = H
f.ipad = I
