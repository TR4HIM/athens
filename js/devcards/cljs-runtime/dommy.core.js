goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__41173 = arguments.length;
switch (G__41173) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__41175 = arguments.length;
switch (G__41175) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__41178 = arguments.length;
switch (G__41178) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41176_SHARP_){
return (!((p1__41176_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41618 = arguments.length;
var i__4790__auto___41619 = (0);
while(true){
if((i__4790__auto___41619 < len__4789__auto___41618)){
args__4795__auto__.push((arguments[i__4790__auto___41619]));

var G__41620 = (i__4790__auto___41619 + (1));
i__4790__auto___41619 = G__41620;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__41183_41621 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41184_41622 = null;
var count__41185_41623 = (0);
var i__41186_41624 = (0);
while(true){
if((i__41186_41624 < count__41185_41623)){
var vec__41193_41625 = chunk__41184_41622.cljs$core$IIndexed$_nth$arity$2(null,i__41186_41624);
var k_41626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41625,(0),null);
var v_41627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41625,(1),null);
style.setProperty(dommy.utils.as_str(k_41626),v_41627);


var G__41629 = seq__41183_41621;
var G__41630 = chunk__41184_41622;
var G__41631 = count__41185_41623;
var G__41632 = (i__41186_41624 + (1));
seq__41183_41621 = G__41629;
chunk__41184_41622 = G__41630;
count__41185_41623 = G__41631;
i__41186_41624 = G__41632;
continue;
} else {
var temp__5735__auto___41633 = cljs.core.seq(seq__41183_41621);
if(temp__5735__auto___41633){
var seq__41183_41634__$1 = temp__5735__auto___41633;
if(cljs.core.chunked_seq_QMARK_(seq__41183_41634__$1)){
var c__4609__auto___41635 = cljs.core.chunk_first(seq__41183_41634__$1);
var G__41636 = cljs.core.chunk_rest(seq__41183_41634__$1);
var G__41637 = c__4609__auto___41635;
var G__41638 = cljs.core.count(c__4609__auto___41635);
var G__41639 = (0);
seq__41183_41621 = G__41636;
chunk__41184_41622 = G__41637;
count__41185_41623 = G__41638;
i__41186_41624 = G__41639;
continue;
} else {
var vec__41196_41640 = cljs.core.first(seq__41183_41634__$1);
var k_41641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41640,(0),null);
var v_41642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41640,(1),null);
style.setProperty(dommy.utils.as_str(k_41641),v_41642);


var G__41644 = cljs.core.next(seq__41183_41634__$1);
var G__41645 = null;
var G__41646 = (0);
var G__41647 = (0);
seq__41183_41621 = G__41644;
chunk__41184_41622 = G__41645;
count__41185_41623 = G__41646;
i__41186_41624 = G__41647;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41181){
var G__41182 = cljs.core.first(seq41181);
var seq41181__$1 = cljs.core.next(seq41181);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41182,seq41181__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41648 = arguments.length;
var i__4790__auto___41649 = (0);
while(true){
if((i__4790__auto___41649 < len__4789__auto___41648)){
args__4795__auto__.push((arguments[i__4790__auto___41649]));

var G__41650 = (i__4790__auto___41649 + (1));
i__4790__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__41201_41651 = cljs.core.seq(keywords);
var chunk__41202_41652 = null;
var count__41203_41653 = (0);
var i__41204_41654 = (0);
while(true){
if((i__41204_41654 < count__41203_41653)){
var kw_41655 = chunk__41202_41652.cljs$core$IIndexed$_nth$arity$2(null,i__41204_41654);
style.removeProperty(dommy.utils.as_str(kw_41655));


var G__41656 = seq__41201_41651;
var G__41657 = chunk__41202_41652;
var G__41658 = count__41203_41653;
var G__41659 = (i__41204_41654 + (1));
seq__41201_41651 = G__41656;
chunk__41202_41652 = G__41657;
count__41203_41653 = G__41658;
i__41204_41654 = G__41659;
continue;
} else {
var temp__5735__auto___41660 = cljs.core.seq(seq__41201_41651);
if(temp__5735__auto___41660){
var seq__41201_41661__$1 = temp__5735__auto___41660;
if(cljs.core.chunked_seq_QMARK_(seq__41201_41661__$1)){
var c__4609__auto___41662 = cljs.core.chunk_first(seq__41201_41661__$1);
var G__41663 = cljs.core.chunk_rest(seq__41201_41661__$1);
var G__41664 = c__4609__auto___41662;
var G__41665 = cljs.core.count(c__4609__auto___41662);
var G__41666 = (0);
seq__41201_41651 = G__41663;
chunk__41202_41652 = G__41664;
count__41203_41653 = G__41665;
i__41204_41654 = G__41666;
continue;
} else {
var kw_41667 = cljs.core.first(seq__41201_41661__$1);
style.removeProperty(dommy.utils.as_str(kw_41667));


var G__41668 = cljs.core.next(seq__41201_41661__$1);
var G__41669 = null;
var G__41670 = (0);
var G__41671 = (0);
seq__41201_41651 = G__41668;
chunk__41202_41652 = G__41669;
count__41203_41653 = G__41670;
i__41204_41654 = G__41671;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41199){
var G__41200 = cljs.core.first(seq41199);
var seq41199__$1 = cljs.core.next(seq41199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41200,seq41199__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41672 = arguments.length;
var i__4790__auto___41673 = (0);
while(true){
if((i__4790__auto___41673 < len__4789__auto___41672)){
args__4795__auto__.push((arguments[i__4790__auto___41673]));

var G__41674 = (i__4790__auto___41673 + (1));
i__4790__auto___41673 = G__41674;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41208_41675 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41209_41676 = null;
var count__41210_41677 = (0);
var i__41211_41678 = (0);
while(true){
if((i__41211_41678 < count__41210_41677)){
var vec__41218_41679 = chunk__41209_41676.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41678);
var k_41680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41679,(0),null);
var v_41681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41679,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41680,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41681),"px"].join('')], 0));


var G__41682 = seq__41208_41675;
var G__41683 = chunk__41209_41676;
var G__41684 = count__41210_41677;
var G__41685 = (i__41211_41678 + (1));
seq__41208_41675 = G__41682;
chunk__41209_41676 = G__41683;
count__41210_41677 = G__41684;
i__41211_41678 = G__41685;
continue;
} else {
var temp__5735__auto___41686 = cljs.core.seq(seq__41208_41675);
if(temp__5735__auto___41686){
var seq__41208_41687__$1 = temp__5735__auto___41686;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41687__$1)){
var c__4609__auto___41688 = cljs.core.chunk_first(seq__41208_41687__$1);
var G__41689 = cljs.core.chunk_rest(seq__41208_41687__$1);
var G__41690 = c__4609__auto___41688;
var G__41691 = cljs.core.count(c__4609__auto___41688);
var G__41692 = (0);
seq__41208_41675 = G__41689;
chunk__41209_41676 = G__41690;
count__41210_41677 = G__41691;
i__41211_41678 = G__41692;
continue;
} else {
var vec__41221_41693 = cljs.core.first(seq__41208_41687__$1);
var k_41694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41693,(0),null);
var v_41695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41693,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41694,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41695),"px"].join('')], 0));


var G__41696 = cljs.core.next(seq__41208_41687__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__41208_41675 = G__41696;
chunk__41209_41676 = G__41697;
count__41210_41677 = G__41698;
i__41211_41678 = G__41699;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__41229 = arguments.length;
switch (G__41229) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41701 = arguments.length;
var i__4790__auto___41702 = (0);
while(true){
if((i__4790__auto___41702 < len__4789__auto___41701)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41702]));

var G__41703 = (i__4790__auto___41702 + (1));
i__4790__auto___41702 = G__41703;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__41230 = elem;
(G__41230[k__$1] = v);

return G__41230;
} else {
var G__41231 = elem;
G__41231.setAttribute(k__$1,v);

return G__41231;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41232_41704 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41233_41705 = null;
var count__41234_41706 = (0);
var i__41235_41707 = (0);
while(true){
if((i__41235_41707 < count__41234_41706)){
var vec__41242_41708 = chunk__41233_41705.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41707);
var k_41709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(0),null);
var v_41710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41709__$1,v_41710__$1);


var G__41711 = seq__41232_41704;
var G__41712 = chunk__41233_41705;
var G__41713 = count__41234_41706;
var G__41714 = (i__41235_41707 + (1));
seq__41232_41704 = G__41711;
chunk__41233_41705 = G__41712;
count__41234_41706 = G__41713;
i__41235_41707 = G__41714;
continue;
} else {
var temp__5735__auto___41715 = cljs.core.seq(seq__41232_41704);
if(temp__5735__auto___41715){
var seq__41232_41716__$1 = temp__5735__auto___41715;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41716__$1)){
var c__4609__auto___41717 = cljs.core.chunk_first(seq__41232_41716__$1);
var G__41718 = cljs.core.chunk_rest(seq__41232_41716__$1);
var G__41719 = c__4609__auto___41717;
var G__41720 = cljs.core.count(c__4609__auto___41717);
var G__41721 = (0);
seq__41232_41704 = G__41718;
chunk__41233_41705 = G__41719;
count__41234_41706 = G__41720;
i__41235_41707 = G__41721;
continue;
} else {
var vec__41245_41722 = cljs.core.first(seq__41232_41716__$1);
var k_41723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(0),null);
var v_41724__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41723__$1,v_41724__$1);


var G__41725 = cljs.core.next(seq__41232_41716__$1);
var G__41726 = null;
var G__41727 = (0);
var G__41728 = (0);
seq__41232_41704 = G__41725;
chunk__41233_41705 = G__41726;
count__41234_41706 = G__41727;
i__41235_41707 = G__41728;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first(seq41225);
var seq41225__$1 = cljs.core.next(seq41225);
var G__41227 = cljs.core.first(seq41225__$1);
var seq41225__$2 = cljs.core.next(seq41225__$1);
var G__41228 = cljs.core.first(seq41225__$2);
var seq41225__$3 = cljs.core.next(seq41225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41730 = arguments.length;
var i__4790__auto___41731 = (0);
while(true){
if((i__4790__auto___41731 < len__4789__auto___41730)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41731]));

var G__41732 = (i__4790__auto___41731 + (1));
i__4790__auto___41731 = G__41732;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41733__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41253.cljs$core$IFn$_invoke$arity$1 ? fexpr__41253.cljs$core$IFn$_invoke$arity$1(k_41733__$1) : fexpr__41253.call(null,k_41733__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41733__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41254_41734 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41255_41735 = null;
var count__41256_41736 = (0);
var i__41257_41737 = (0);
while(true){
if((i__41257_41737 < count__41256_41736)){
var k_41738__$1 = chunk__41255_41735.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41737);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41738__$1);


var G__41739 = seq__41254_41734;
var G__41740 = chunk__41255_41735;
var G__41741 = count__41256_41736;
var G__41742 = (i__41257_41737 + (1));
seq__41254_41734 = G__41739;
chunk__41255_41735 = G__41740;
count__41256_41736 = G__41741;
i__41257_41737 = G__41742;
continue;
} else {
var temp__5735__auto___41743 = cljs.core.seq(seq__41254_41734);
if(temp__5735__auto___41743){
var seq__41254_41744__$1 = temp__5735__auto___41743;
if(cljs.core.chunked_seq_QMARK_(seq__41254_41744__$1)){
var c__4609__auto___41745 = cljs.core.chunk_first(seq__41254_41744__$1);
var G__41746 = cljs.core.chunk_rest(seq__41254_41744__$1);
var G__41747 = c__4609__auto___41745;
var G__41748 = cljs.core.count(c__4609__auto___41745);
var G__41749 = (0);
seq__41254_41734 = G__41746;
chunk__41255_41735 = G__41747;
count__41256_41736 = G__41748;
i__41257_41737 = G__41749;
continue;
} else {
var k_41750__$1 = cljs.core.first(seq__41254_41744__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41750__$1);


var G__41751 = cljs.core.next(seq__41254_41744__$1);
var G__41752 = null;
var G__41753 = (0);
var G__41754 = (0);
seq__41254_41734 = G__41751;
chunk__41255_41735 = G__41752;
count__41256_41736 = G__41753;
i__41257_41737 = G__41754;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,seq41249__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41757 = arguments.length;
var i__4790__auto___41758 = (0);
while(true){
if((i__4790__auto___41758 < len__4789__auto___41757)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41758]));

var G__41759 = (i__4790__auto___41758 + (1));
i__4790__auto___41758 = G__41759;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___41760 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41760)){
var class_list_41761 = temp__5733__auto___41760;
var seq__41265_41762 = cljs.core.seq(classes__$1);
var chunk__41266_41763 = null;
var count__41267_41764 = (0);
var i__41268_41765 = (0);
while(true){
if((i__41268_41765 < count__41267_41764)){
var c_41766 = chunk__41266_41763.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41765);
class_list_41761.add(c_41766);


var G__41767 = seq__41265_41762;
var G__41768 = chunk__41266_41763;
var G__41769 = count__41267_41764;
var G__41770 = (i__41268_41765 + (1));
seq__41265_41762 = G__41767;
chunk__41266_41763 = G__41768;
count__41267_41764 = G__41769;
i__41268_41765 = G__41770;
continue;
} else {
var temp__5735__auto___41771 = cljs.core.seq(seq__41265_41762);
if(temp__5735__auto___41771){
var seq__41265_41772__$1 = temp__5735__auto___41771;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41772__$1)){
var c__4609__auto___41773 = cljs.core.chunk_first(seq__41265_41772__$1);
var G__41774 = cljs.core.chunk_rest(seq__41265_41772__$1);
var G__41775 = c__4609__auto___41773;
var G__41776 = cljs.core.count(c__4609__auto___41773);
var G__41777 = (0);
seq__41265_41762 = G__41774;
chunk__41266_41763 = G__41775;
count__41267_41764 = G__41776;
i__41268_41765 = G__41777;
continue;
} else {
var c_41778 = cljs.core.first(seq__41265_41772__$1);
class_list_41761.add(c_41778);


var G__41779 = cljs.core.next(seq__41265_41772__$1);
var G__41780 = null;
var G__41781 = (0);
var G__41782 = (0);
seq__41265_41762 = G__41779;
chunk__41266_41763 = G__41780;
count__41267_41764 = G__41781;
i__41268_41765 = G__41782;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41269_41783 = cljs.core.seq(classes__$1);
var chunk__41270_41784 = null;
var count__41271_41785 = (0);
var i__41272_41786 = (0);
while(true){
if((i__41272_41786 < count__41271_41785)){
var c_41787 = chunk__41270_41784.cljs$core$IIndexed$_nth$arity$2(null,i__41272_41786);
var class_name_41788 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41788,c_41787))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41788 === ""))?c_41787:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41788)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41787)].join('')));
}


var G__41789 = seq__41269_41783;
var G__41790 = chunk__41270_41784;
var G__41791 = count__41271_41785;
var G__41792 = (i__41272_41786 + (1));
seq__41269_41783 = G__41789;
chunk__41270_41784 = G__41790;
count__41271_41785 = G__41791;
i__41272_41786 = G__41792;
continue;
} else {
var temp__5735__auto___41793 = cljs.core.seq(seq__41269_41783);
if(temp__5735__auto___41793){
var seq__41269_41794__$1 = temp__5735__auto___41793;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41794__$1)){
var c__4609__auto___41795 = cljs.core.chunk_first(seq__41269_41794__$1);
var G__41796 = cljs.core.chunk_rest(seq__41269_41794__$1);
var G__41797 = c__4609__auto___41795;
var G__41798 = cljs.core.count(c__4609__auto___41795);
var G__41799 = (0);
seq__41269_41783 = G__41796;
chunk__41270_41784 = G__41797;
count__41271_41785 = G__41798;
i__41272_41786 = G__41799;
continue;
} else {
var c_41801 = cljs.core.first(seq__41269_41794__$1);
var class_name_41802 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41802,c_41801))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41802 === ""))?c_41801:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41802)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41801)].join('')));
}


var G__41804 = cljs.core.next(seq__41269_41794__$1);
var G__41805 = null;
var G__41806 = (0);
var G__41807 = (0);
seq__41269_41783 = G__41804;
chunk__41270_41784 = G__41805;
count__41271_41785 = G__41806;
i__41272_41786 = G__41807;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__41273_41808 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41274_41809 = null;
var count__41275_41810 = (0);
var i__41276_41811 = (0);
while(true){
if((i__41276_41811 < count__41275_41810)){
var c_41812 = chunk__41274_41809.cljs$core$IIndexed$_nth$arity$2(null,i__41276_41811);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41812);


var G__41813 = seq__41273_41808;
var G__41814 = chunk__41274_41809;
var G__41815 = count__41275_41810;
var G__41816 = (i__41276_41811 + (1));
seq__41273_41808 = G__41813;
chunk__41274_41809 = G__41814;
count__41275_41810 = G__41815;
i__41276_41811 = G__41816;
continue;
} else {
var temp__5735__auto___41817 = cljs.core.seq(seq__41273_41808);
if(temp__5735__auto___41817){
var seq__41273_41818__$1 = temp__5735__auto___41817;
if(cljs.core.chunked_seq_QMARK_(seq__41273_41818__$1)){
var c__4609__auto___41819 = cljs.core.chunk_first(seq__41273_41818__$1);
var G__41820 = cljs.core.chunk_rest(seq__41273_41818__$1);
var G__41821 = c__4609__auto___41819;
var G__41822 = cljs.core.count(c__4609__auto___41819);
var G__41823 = (0);
seq__41273_41808 = G__41820;
chunk__41274_41809 = G__41821;
count__41275_41810 = G__41822;
i__41276_41811 = G__41823;
continue;
} else {
var c_41824 = cljs.core.first(seq__41273_41818__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41824);


var G__41825 = cljs.core.next(seq__41273_41818__$1);
var G__41826 = null;
var G__41827 = (0);
var G__41828 = (0);
seq__41273_41808 = G__41825;
chunk__41274_41809 = G__41826;
count__41275_41810 = G__41827;
i__41276_41811 = G__41828;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41263 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41263,seq41261__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41281 = arguments.length;
switch (G__41281) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41830 = arguments.length;
var i__4790__auto___41831 = (0);
while(true){
if((i__4790__auto___41831 < len__4789__auto___41830)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41831]));

var G__41832 = (i__4790__auto___41831 + (1));
i__4790__auto___41831 = G__41832;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41833 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41833)){
var class_list_41834 = temp__5733__auto___41833;
class_list_41834.remove(c__$1);
} else {
var class_name_41835 = dommy.core.class$(elem);
var new_class_name_41836 = dommy.utils.remove_class_str(class_name_41835,c__$1);
if((class_name_41835 === new_class_name_41836)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41836);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41282 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41283 = null;
var count__41284 = (0);
var i__41285 = (0);
while(true){
if((i__41285 < count__41284)){
var c = chunk__41283.cljs$core$IIndexed$_nth$arity$2(null,i__41285);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41839 = seq__41282;
var G__41840 = chunk__41283;
var G__41841 = count__41284;
var G__41842 = (i__41285 + (1));
seq__41282 = G__41839;
chunk__41283 = G__41840;
count__41284 = G__41841;
i__41285 = G__41842;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41282);
if(temp__5735__auto__){
var seq__41282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41282__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41282__$1);
var G__41843 = cljs.core.chunk_rest(seq__41282__$1);
var G__41844 = c__4609__auto__;
var G__41845 = cljs.core.count(c__4609__auto__);
var G__41846 = (0);
seq__41282 = G__41843;
chunk__41283 = G__41844;
count__41284 = G__41845;
i__41285 = G__41846;
continue;
} else {
var c = cljs.core.first(seq__41282__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41847 = cljs.core.next(seq__41282__$1);
var G__41848 = null;
var G__41849 = (0);
var G__41850 = (0);
seq__41282 = G__41847;
chunk__41283 = G__41848;
count__41284 = G__41849;
i__41285 = G__41850;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41278){
var G__41279 = cljs.core.first(seq41278);
var seq41278__$1 = cljs.core.next(seq41278);
var G__41280 = cljs.core.first(seq41278__$1);
var seq41278__$2 = cljs.core.next(seq41278__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41279,G__41280,seq41278__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41287 = arguments.length;
switch (G__41287) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41854 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41854)){
var class_list_41855 = temp__5733__auto___41854;
class_list_41855.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__41289 = arguments.length;
switch (G__41289) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__41292 = arguments.length;
switch (G__41292) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__41299 = arguments.length;
switch (G__41299) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41859 = arguments.length;
var i__4790__auto___41860 = (0);
while(true){
if((i__4790__auto___41860 < len__4789__auto___41859)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41860]));

var G__41861 = (i__4790__auto___41860 + (1));
i__4790__auto___41860 = G__41861;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41300 = parent;
G__41300.appendChild(child);

return G__41300;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41301_41862 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41302_41863 = null;
var count__41303_41864 = (0);
var i__41304_41865 = (0);
while(true){
if((i__41304_41865 < count__41303_41864)){
var c_41866 = chunk__41302_41863.cljs$core$IIndexed$_nth$arity$2(null,i__41304_41865);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41866);


var G__41867 = seq__41301_41862;
var G__41868 = chunk__41302_41863;
var G__41869 = count__41303_41864;
var G__41870 = (i__41304_41865 + (1));
seq__41301_41862 = G__41867;
chunk__41302_41863 = G__41868;
count__41303_41864 = G__41869;
i__41304_41865 = G__41870;
continue;
} else {
var temp__5735__auto___41871 = cljs.core.seq(seq__41301_41862);
if(temp__5735__auto___41871){
var seq__41301_41872__$1 = temp__5735__auto___41871;
if(cljs.core.chunked_seq_QMARK_(seq__41301_41872__$1)){
var c__4609__auto___41873 = cljs.core.chunk_first(seq__41301_41872__$1);
var G__41874 = cljs.core.chunk_rest(seq__41301_41872__$1);
var G__41875 = c__4609__auto___41873;
var G__41876 = cljs.core.count(c__4609__auto___41873);
var G__41877 = (0);
seq__41301_41862 = G__41874;
chunk__41302_41863 = G__41875;
count__41303_41864 = G__41876;
i__41304_41865 = G__41877;
continue;
} else {
var c_41878 = cljs.core.first(seq__41301_41872__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41878);


var G__41879 = cljs.core.next(seq__41301_41872__$1);
var G__41880 = null;
var G__41881 = (0);
var G__41882 = (0);
seq__41301_41862 = G__41879;
chunk__41302_41863 = G__41880;
count__41303_41864 = G__41881;
i__41304_41865 = G__41882;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41296){
var G__41297 = cljs.core.first(seq41296);
var seq41296__$1 = cljs.core.next(seq41296);
var G__41298 = cljs.core.first(seq41296__$1);
var seq41296__$2 = cljs.core.next(seq41296__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41297,G__41298,seq41296__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41309 = arguments.length;
switch (G__41309) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41884 = arguments.length;
var i__4790__auto___41885 = (0);
while(true){
if((i__4790__auto___41885 < len__4789__auto___41884)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41885]));

var G__41886 = (i__4790__auto___41885 + (1));
i__4790__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41310 = parent;
G__41310.insertBefore(child,parent.firstChild);

return G__41310;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41311_41887 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41312_41888 = null;
var count__41313_41889 = (0);
var i__41314_41890 = (0);
while(true){
if((i__41314_41890 < count__41313_41889)){
var c_41891 = chunk__41312_41888.cljs$core$IIndexed$_nth$arity$2(null,i__41314_41890);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41891);


var G__41892 = seq__41311_41887;
var G__41893 = chunk__41312_41888;
var G__41894 = count__41313_41889;
var G__41895 = (i__41314_41890 + (1));
seq__41311_41887 = G__41892;
chunk__41312_41888 = G__41893;
count__41313_41889 = G__41894;
i__41314_41890 = G__41895;
continue;
} else {
var temp__5735__auto___41896 = cljs.core.seq(seq__41311_41887);
if(temp__5735__auto___41896){
var seq__41311_41897__$1 = temp__5735__auto___41896;
if(cljs.core.chunked_seq_QMARK_(seq__41311_41897__$1)){
var c__4609__auto___41898 = cljs.core.chunk_first(seq__41311_41897__$1);
var G__41899 = cljs.core.chunk_rest(seq__41311_41897__$1);
var G__41900 = c__4609__auto___41898;
var G__41901 = cljs.core.count(c__4609__auto___41898);
var G__41902 = (0);
seq__41311_41887 = G__41899;
chunk__41312_41888 = G__41900;
count__41313_41889 = G__41901;
i__41314_41890 = G__41902;
continue;
} else {
var c_41903 = cljs.core.first(seq__41311_41897__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41903);


var G__41904 = cljs.core.next(seq__41311_41897__$1);
var G__41905 = null;
var G__41906 = (0);
var G__41907 = (0);
seq__41311_41887 = G__41904;
chunk__41312_41888 = G__41905;
count__41313_41889 = G__41906;
i__41314_41890 = G__41907;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41306){
var G__41307 = cljs.core.first(seq41306);
var seq41306__$1 = cljs.core.next(seq41306);
var G__41308 = cljs.core.first(seq41306__$1);
var seq41306__$2 = cljs.core.next(seq41306__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41307,G__41308,seq41306__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___41908 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41908)){
var next_41909 = temp__5733__auto___41908;
dommy.core.insert_before_BANG_(elem,next_41909);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__41316 = arguments.length;
switch (G__41316) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__41317 = p;
G__41317.removeChild(elem);

return G__41317;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41318){
var vec__41319 = p__41318;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41911 = arguments.length;
var i__4790__auto___41912 = (0);
while(true){
if((i__4790__auto___41912 < len__4789__auto___41911)){
args__4795__auto__.push((arguments[i__4790__auto___41912]));

var G__41913 = (i__4790__auto___41912 + (1));
i__4790__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41322){
var G__41323 = cljs.core.first(seq41322);
var seq41322__$1 = cljs.core.next(seq41322);
var G__41324 = cljs.core.first(seq41322__$1);
var seq41322__$2 = cljs.core.next(seq41322__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41323,G__41324,seq41322__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41325 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41325.cljs$core$IFn$_invoke$arity$1 ? fexpr__41325.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41325.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41916 = arguments.length;
var i__4790__auto___41917 = (0);
while(true){
if((i__4790__auto___41917 < len__4789__auto___41916)){
args__4795__auto__.push((arguments[i__4790__auto___41917]));

var G__41918 = (i__4790__auto___41917 + (1));
i__4790__auto___41917 = G__41918;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41328_41919 = dommy.core.elem_and_selector(elem_sel);
var elem_41920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41328_41919,(0),null);
var selector_41921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41328_41919,(1),null);
var seq__41331_41922 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41338_41923 = null;
var count__41339_41924 = (0);
var i__41340_41925 = (0);
while(true){
if((i__41340_41925 < count__41339_41924)){
var vec__41396_41926 = chunk__41338_41923.cljs$core$IIndexed$_nth$arity$2(null,i__41340_41925);
var orig_type_41927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396_41926,(0),null);
var f_41928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396_41926,(1),null);
var seq__41341_41929 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41927,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41927,cljs.core.identity])));
var chunk__41343_41930 = null;
var count__41344_41931 = (0);
var i__41345_41932 = (0);
while(true){
if((i__41345_41932 < count__41344_41931)){
var vec__41412_41933 = chunk__41343_41930.cljs$core$IIndexed$_nth$arity$2(null,i__41345_41932);
var actual_type_41934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41412_41933,(0),null);
var factory_41935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41412_41933,(1),null);
var canonical_f_41937 = (function (){var G__41416 = (factory_41935.cljs$core$IFn$_invoke$arity$1 ? factory_41935.cljs$core$IFn$_invoke$arity$1(f_41928) : factory_41935.call(null,f_41928));
var fexpr__41415 = (cljs.core.truth_(selector_41921)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41920,selector_41921):cljs.core.identity);
return (fexpr__41415.cljs$core$IFn$_invoke$arity$1 ? fexpr__41415.cljs$core$IFn$_invoke$arity$1(G__41416) : fexpr__41415.call(null,G__41416));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41920,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41921,actual_type_41934,f_41928], null),canonical_f_41937], 0));

if(cljs.core.truth_(elem_41920.addEventListener)){
elem_41920.addEventListener(cljs.core.name(actual_type_41934),canonical_f_41937);
} else {
elem_41920.attachEvent(cljs.core.name(actual_type_41934),canonical_f_41937);
}


var G__41940 = seq__41341_41929;
var G__41941 = chunk__41343_41930;
var G__41942 = count__41344_41931;
var G__41943 = (i__41345_41932 + (1));
seq__41341_41929 = G__41940;
chunk__41343_41930 = G__41941;
count__41344_41931 = G__41942;
i__41345_41932 = G__41943;
continue;
} else {
var temp__5735__auto___41945 = cljs.core.seq(seq__41341_41929);
if(temp__5735__auto___41945){
var seq__41341_41946__$1 = temp__5735__auto___41945;
if(cljs.core.chunked_seq_QMARK_(seq__41341_41946__$1)){
var c__4609__auto___41947 = cljs.core.chunk_first(seq__41341_41946__$1);
var G__41948 = cljs.core.chunk_rest(seq__41341_41946__$1);
var G__41949 = c__4609__auto___41947;
var G__41950 = cljs.core.count(c__4609__auto___41947);
var G__41951 = (0);
seq__41341_41929 = G__41948;
chunk__41343_41930 = G__41949;
count__41344_41931 = G__41950;
i__41345_41932 = G__41951;
continue;
} else {
var vec__41417_41952 = cljs.core.first(seq__41341_41946__$1);
var actual_type_41953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417_41952,(0),null);
var factory_41954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417_41952,(1),null);
var canonical_f_41955 = (function (){var G__41421 = (factory_41954.cljs$core$IFn$_invoke$arity$1 ? factory_41954.cljs$core$IFn$_invoke$arity$1(f_41928) : factory_41954.call(null,f_41928));
var fexpr__41420 = (cljs.core.truth_(selector_41921)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41920,selector_41921):cljs.core.identity);
return (fexpr__41420.cljs$core$IFn$_invoke$arity$1 ? fexpr__41420.cljs$core$IFn$_invoke$arity$1(G__41421) : fexpr__41420.call(null,G__41421));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41920,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41921,actual_type_41953,f_41928], null),canonical_f_41955], 0));

if(cljs.core.truth_(elem_41920.addEventListener)){
elem_41920.addEventListener(cljs.core.name(actual_type_41953),canonical_f_41955);
} else {
elem_41920.attachEvent(cljs.core.name(actual_type_41953),canonical_f_41955);
}


var G__41961 = cljs.core.next(seq__41341_41946__$1);
var G__41962 = null;
var G__41963 = (0);
var G__41964 = (0);
seq__41341_41929 = G__41961;
chunk__41343_41930 = G__41962;
count__41344_41931 = G__41963;
i__41345_41932 = G__41964;
continue;
}
} else {
}
}
break;
}

var G__41965 = seq__41331_41922;
var G__41966 = chunk__41338_41923;
var G__41967 = count__41339_41924;
var G__41968 = (i__41340_41925 + (1));
seq__41331_41922 = G__41965;
chunk__41338_41923 = G__41966;
count__41339_41924 = G__41967;
i__41340_41925 = G__41968;
continue;
} else {
var temp__5735__auto___41969 = cljs.core.seq(seq__41331_41922);
if(temp__5735__auto___41969){
var seq__41331_41970__$1 = temp__5735__auto___41969;
if(cljs.core.chunked_seq_QMARK_(seq__41331_41970__$1)){
var c__4609__auto___41971 = cljs.core.chunk_first(seq__41331_41970__$1);
var G__41972 = cljs.core.chunk_rest(seq__41331_41970__$1);
var G__41973 = c__4609__auto___41971;
var G__41974 = cljs.core.count(c__4609__auto___41971);
var G__41975 = (0);
seq__41331_41922 = G__41972;
chunk__41338_41923 = G__41973;
count__41339_41924 = G__41974;
i__41340_41925 = G__41975;
continue;
} else {
var vec__41422_41977 = cljs.core.first(seq__41331_41970__$1);
var orig_type_41978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41422_41977,(0),null);
var f_41979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41422_41977,(1),null);
var seq__41332_41981 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41978,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41978,cljs.core.identity])));
var chunk__41334_41982 = null;
var count__41335_41983 = (0);
var i__41336_41984 = (0);
while(true){
if((i__41336_41984 < count__41335_41983)){
var vec__41435_41985 = chunk__41334_41982.cljs$core$IIndexed$_nth$arity$2(null,i__41336_41984);
var actual_type_41986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41435_41985,(0),null);
var factory_41987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41435_41985,(1),null);
var canonical_f_41988 = (function (){var G__41439 = (factory_41987.cljs$core$IFn$_invoke$arity$1 ? factory_41987.cljs$core$IFn$_invoke$arity$1(f_41979) : factory_41987.call(null,f_41979));
var fexpr__41438 = (cljs.core.truth_(selector_41921)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41920,selector_41921):cljs.core.identity);
return (fexpr__41438.cljs$core$IFn$_invoke$arity$1 ? fexpr__41438.cljs$core$IFn$_invoke$arity$1(G__41439) : fexpr__41438.call(null,G__41439));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41920,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41921,actual_type_41986,f_41979], null),canonical_f_41988], 0));

if(cljs.core.truth_(elem_41920.addEventListener)){
elem_41920.addEventListener(cljs.core.name(actual_type_41986),canonical_f_41988);
} else {
elem_41920.attachEvent(cljs.core.name(actual_type_41986),canonical_f_41988);
}


var G__41992 = seq__41332_41981;
var G__41993 = chunk__41334_41982;
var G__41994 = count__41335_41983;
var G__41995 = (i__41336_41984 + (1));
seq__41332_41981 = G__41992;
chunk__41334_41982 = G__41993;
count__41335_41983 = G__41994;
i__41336_41984 = G__41995;
continue;
} else {
var temp__5735__auto___41997__$1 = cljs.core.seq(seq__41332_41981);
if(temp__5735__auto___41997__$1){
var seq__41332_41998__$1 = temp__5735__auto___41997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41332_41998__$1)){
var c__4609__auto___41999 = cljs.core.chunk_first(seq__41332_41998__$1);
var G__42000 = cljs.core.chunk_rest(seq__41332_41998__$1);
var G__42001 = c__4609__auto___41999;
var G__42002 = cljs.core.count(c__4609__auto___41999);
var G__42003 = (0);
seq__41332_41981 = G__42000;
chunk__41334_41982 = G__42001;
count__41335_41983 = G__42002;
i__41336_41984 = G__42003;
continue;
} else {
var vec__41440_42004 = cljs.core.first(seq__41332_41998__$1);
var actual_type_42005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41440_42004,(0),null);
var factory_42006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41440_42004,(1),null);
var canonical_f_42007 = (function (){var G__41444 = (factory_42006.cljs$core$IFn$_invoke$arity$1 ? factory_42006.cljs$core$IFn$_invoke$arity$1(f_41979) : factory_42006.call(null,f_41979));
var fexpr__41443 = (cljs.core.truth_(selector_41921)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41920,selector_41921):cljs.core.identity);
return (fexpr__41443.cljs$core$IFn$_invoke$arity$1 ? fexpr__41443.cljs$core$IFn$_invoke$arity$1(G__41444) : fexpr__41443.call(null,G__41444));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41920,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41921,actual_type_42005,f_41979], null),canonical_f_42007], 0));

if(cljs.core.truth_(elem_41920.addEventListener)){
elem_41920.addEventListener(cljs.core.name(actual_type_42005),canonical_f_42007);
} else {
elem_41920.attachEvent(cljs.core.name(actual_type_42005),canonical_f_42007);
}


var G__42013 = cljs.core.next(seq__41332_41998__$1);
var G__42014 = null;
var G__42015 = (0);
var G__42016 = (0);
seq__41332_41981 = G__42013;
chunk__41334_41982 = G__42014;
count__41335_41983 = G__42015;
i__41336_41984 = G__42016;
continue;
}
} else {
}
}
break;
}

var G__42017 = cljs.core.next(seq__41331_41970__$1);
var G__42018 = null;
var G__42019 = (0);
var G__42020 = (0);
seq__41331_41922 = G__42017;
chunk__41338_41923 = G__42018;
count__41339_41924 = G__42019;
i__41340_41925 = G__42020;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41326){
var G__41327 = cljs.core.first(seq41326);
var seq41326__$1 = cljs.core.next(seq41326);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41327,seq41326__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42026 = arguments.length;
var i__4790__auto___42027 = (0);
while(true){
if((i__4790__auto___42027 < len__4789__auto___42026)){
args__4795__auto__.push((arguments[i__4790__auto___42027]));

var G__42028 = (i__4790__auto___42027 + (1));
i__4790__auto___42027 = G__42028;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41447_42029 = dommy.core.elem_and_selector(elem_sel);
var elem_42030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42029,(0),null);
var selector_42031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42029,(1),null);
var seq__41450_42032 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41457_42033 = null;
var count__41458_42034 = (0);
var i__41459_42035 = (0);
while(true){
if((i__41459_42035 < count__41458_42034)){
var vec__41507_42036 = chunk__41457_42033.cljs$core$IIndexed$_nth$arity$2(null,i__41459_42035);
var orig_type_42037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41507_42036,(0),null);
var f_42038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41507_42036,(1),null);
var seq__41460_42039 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42037,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42037,cljs.core.identity])));
var chunk__41462_42040 = null;
var count__41463_42041 = (0);
var i__41464_42042 = (0);
while(true){
if((i__41464_42042 < count__41463_42041)){
var vec__41516_42043 = chunk__41462_42040.cljs$core$IIndexed$_nth$arity$2(null,i__41464_42042);
var actual_type_42044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516_42043,(0),null);
var __42045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516_42043,(1),null);
var keys_42046 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42044,f_42038], null);
var canonical_f_42047 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42046);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42046], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42044),canonical_f_42047);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42044),canonical_f_42047);
}


var G__42048 = seq__41460_42039;
var G__42049 = chunk__41462_42040;
var G__42050 = count__41463_42041;
var G__42051 = (i__41464_42042 + (1));
seq__41460_42039 = G__42048;
chunk__41462_42040 = G__42049;
count__41463_42041 = G__42050;
i__41464_42042 = G__42051;
continue;
} else {
var temp__5735__auto___42052 = cljs.core.seq(seq__41460_42039);
if(temp__5735__auto___42052){
var seq__41460_42053__$1 = temp__5735__auto___42052;
if(cljs.core.chunked_seq_QMARK_(seq__41460_42053__$1)){
var c__4609__auto___42054 = cljs.core.chunk_first(seq__41460_42053__$1);
var G__42055 = cljs.core.chunk_rest(seq__41460_42053__$1);
var G__42056 = c__4609__auto___42054;
var G__42057 = cljs.core.count(c__4609__auto___42054);
var G__42058 = (0);
seq__41460_42039 = G__42055;
chunk__41462_42040 = G__42056;
count__41463_42041 = G__42057;
i__41464_42042 = G__42058;
continue;
} else {
var vec__41520_42059 = cljs.core.first(seq__41460_42053__$1);
var actual_type_42060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_42059,(0),null);
var __42061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_42059,(1),null);
var keys_42062 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42060,f_42038], null);
var canonical_f_42063 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42062);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42062], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42060),canonical_f_42063);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42060),canonical_f_42063);
}


var G__42064 = cljs.core.next(seq__41460_42053__$1);
var G__42065 = null;
var G__42066 = (0);
var G__42067 = (0);
seq__41460_42039 = G__42064;
chunk__41462_42040 = G__42065;
count__41463_42041 = G__42066;
i__41464_42042 = G__42067;
continue;
}
} else {
}
}
break;
}

var G__42068 = seq__41450_42032;
var G__42069 = chunk__41457_42033;
var G__42070 = count__41458_42034;
var G__42071 = (i__41459_42035 + (1));
seq__41450_42032 = G__42068;
chunk__41457_42033 = G__42069;
count__41458_42034 = G__42070;
i__41459_42035 = G__42071;
continue;
} else {
var temp__5735__auto___42072 = cljs.core.seq(seq__41450_42032);
if(temp__5735__auto___42072){
var seq__41450_42073__$1 = temp__5735__auto___42072;
if(cljs.core.chunked_seq_QMARK_(seq__41450_42073__$1)){
var c__4609__auto___42074 = cljs.core.chunk_first(seq__41450_42073__$1);
var G__42075 = cljs.core.chunk_rest(seq__41450_42073__$1);
var G__42076 = c__4609__auto___42074;
var G__42077 = cljs.core.count(c__4609__auto___42074);
var G__42078 = (0);
seq__41450_42032 = G__42075;
chunk__41457_42033 = G__42076;
count__41458_42034 = G__42077;
i__41459_42035 = G__42078;
continue;
} else {
var vec__41525_42079 = cljs.core.first(seq__41450_42073__$1);
var orig_type_42080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_42079,(0),null);
var f_42081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_42079,(1),null);
var seq__41451_42082 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42080,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42080,cljs.core.identity])));
var chunk__41453_42083 = null;
var count__41454_42084 = (0);
var i__41455_42085 = (0);
while(true){
if((i__41455_42085 < count__41454_42084)){
var vec__41536_42086 = chunk__41453_42083.cljs$core$IIndexed$_nth$arity$2(null,i__41455_42085);
var actual_type_42087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41536_42086,(0),null);
var __42088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41536_42086,(1),null);
var keys_42089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42087,f_42081], null);
var canonical_f_42090 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42089);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42089], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42087),canonical_f_42090);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42087),canonical_f_42090);
}


var G__42091 = seq__41451_42082;
var G__42092 = chunk__41453_42083;
var G__42093 = count__41454_42084;
var G__42094 = (i__41455_42085 + (1));
seq__41451_42082 = G__42091;
chunk__41453_42083 = G__42092;
count__41454_42084 = G__42093;
i__41455_42085 = G__42094;
continue;
} else {
var temp__5735__auto___42095__$1 = cljs.core.seq(seq__41451_42082);
if(temp__5735__auto___42095__$1){
var seq__41451_42096__$1 = temp__5735__auto___42095__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41451_42096__$1)){
var c__4609__auto___42097 = cljs.core.chunk_first(seq__41451_42096__$1);
var G__42098 = cljs.core.chunk_rest(seq__41451_42096__$1);
var G__42099 = c__4609__auto___42097;
var G__42100 = cljs.core.count(c__4609__auto___42097);
var G__42101 = (0);
seq__41451_42082 = G__42098;
chunk__41453_42083 = G__42099;
count__41454_42084 = G__42100;
i__41455_42085 = G__42101;
continue;
} else {
var vec__41539_42102 = cljs.core.first(seq__41451_42096__$1);
var actual_type_42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539_42102,(0),null);
var __42104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539_42102,(1),null);
var keys_42105 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42031,actual_type_42103,f_42081], null);
var canonical_f_42106 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42030),keys_42105);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42030,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42105], 0));

if(cljs.core.truth_(elem_42030.removeEventListener)){
elem_42030.removeEventListener(cljs.core.name(actual_type_42103),canonical_f_42106);
} else {
elem_42030.detachEvent(cljs.core.name(actual_type_42103),canonical_f_42106);
}


var G__42107 = cljs.core.next(seq__41451_42096__$1);
var G__42108 = null;
var G__42109 = (0);
var G__42110 = (0);
seq__41451_42082 = G__42107;
chunk__41453_42083 = G__42108;
count__41454_42084 = G__42109;
i__41455_42085 = G__42110;
continue;
}
} else {
}
}
break;
}

var G__42111 = cljs.core.next(seq__41450_42073__$1);
var G__42112 = null;
var G__42113 = (0);
var G__42114 = (0);
seq__41450_42032 = G__42111;
chunk__41457_42033 = G__42112;
count__41458_42034 = G__42113;
i__41459_42035 = G__42114;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41445){
var G__41446 = cljs.core.first(seq41445);
var seq41445__$1 = cljs.core.next(seq41445);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41446,seq41445__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42115 = arguments.length;
var i__4790__auto___42116 = (0);
while(true){
if((i__4790__auto___42116 < len__4789__auto___42115)){
args__4795__auto__.push((arguments[i__4790__auto___42116]));

var G__42117 = (i__4790__auto___42116 + (1));
i__4790__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41548_42118 = dommy.core.elem_and_selector(elem_sel);
var elem_42119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548_42118,(0),null);
var selector_42120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548_42118,(1),null);
var seq__41551_42121 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41552_42122 = null;
var count__41553_42123 = (0);
var i__41554_42124 = (0);
while(true){
if((i__41554_42124 < count__41553_42123)){
var vec__41573_42125 = chunk__41552_42122.cljs$core$IIndexed$_nth$arity$2(null,i__41554_42124);
var type_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41573_42125,(0),null);
var f_42127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41573_42125,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42126,((function (seq__41551_42121,chunk__41552_42122,count__41553_42123,i__41554_42124,vec__41573_42125,type_42126,f_42127,vec__41548_42118,elem_42119,selector_42120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42126,dommy$core$this_fn], 0));

return (f_42127.cljs$core$IFn$_invoke$arity$1 ? f_42127.cljs$core$IFn$_invoke$arity$1(e) : f_42127.call(null,e));
});})(seq__41551_42121,chunk__41552_42122,count__41553_42123,i__41554_42124,vec__41573_42125,type_42126,f_42127,vec__41548_42118,elem_42119,selector_42120))
], 0));


var G__42128 = seq__41551_42121;
var G__42129 = chunk__41552_42122;
var G__42130 = count__41553_42123;
var G__42131 = (i__41554_42124 + (1));
seq__41551_42121 = G__42128;
chunk__41552_42122 = G__42129;
count__41553_42123 = G__42130;
i__41554_42124 = G__42131;
continue;
} else {
var temp__5735__auto___42132 = cljs.core.seq(seq__41551_42121);
if(temp__5735__auto___42132){
var seq__41551_42133__$1 = temp__5735__auto___42132;
if(cljs.core.chunked_seq_QMARK_(seq__41551_42133__$1)){
var c__4609__auto___42134 = cljs.core.chunk_first(seq__41551_42133__$1);
var G__42135 = cljs.core.chunk_rest(seq__41551_42133__$1);
var G__42136 = c__4609__auto___42134;
var G__42137 = cljs.core.count(c__4609__auto___42134);
var G__42138 = (0);
seq__41551_42121 = G__42135;
chunk__41552_42122 = G__42136;
count__41553_42123 = G__42137;
i__41554_42124 = G__42138;
continue;
} else {
var vec__41587_42139 = cljs.core.first(seq__41551_42133__$1);
var type_42140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587_42139,(0),null);
var f_42141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587_42139,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42140,((function (seq__41551_42121,chunk__41552_42122,count__41553_42123,i__41554_42124,vec__41587_42139,type_42140,f_42141,seq__41551_42133__$1,temp__5735__auto___42132,vec__41548_42118,elem_42119,selector_42120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42140,dommy$core$this_fn], 0));

return (f_42141.cljs$core$IFn$_invoke$arity$1 ? f_42141.cljs$core$IFn$_invoke$arity$1(e) : f_42141.call(null,e));
});})(seq__41551_42121,chunk__41552_42122,count__41553_42123,i__41554_42124,vec__41587_42139,type_42140,f_42141,seq__41551_42133__$1,temp__5735__auto___42132,vec__41548_42118,elem_42119,selector_42120))
], 0));


var G__42142 = cljs.core.next(seq__41551_42133__$1);
var G__42143 = null;
var G__42144 = (0);
var G__42145 = (0);
seq__41551_42121 = G__42142;
chunk__41552_42122 = G__42143;
count__41553_42123 = G__42144;
i__41554_42124 = G__42145;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41542){
var G__41543 = cljs.core.first(seq41542);
var seq41542__$1 = cljs.core.next(seq41542);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41543,seq41542__$1);
}));


//# sourceMappingURL=dommy.core.js.map
