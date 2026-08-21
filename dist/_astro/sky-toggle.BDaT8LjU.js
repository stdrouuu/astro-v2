import{n as e,r as t,t as n}from"./react.OrosJ8bI.js";var r=`-ms-`,i=`-moz-`,a=`-webkit-`,o=`comm`,s=`rule`,c=`decl`,l=`@import`,u=`@namespace`,d=`@keyframes`,f=`@layer`,p=Math.abs,m=String.fromCharCode,h=Object.assign;function g(e,t){return x(e,0)^45?(((t<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}function _(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function x(e,t){return e.charCodeAt(t)|0}function S(e,t,n){return e.slice(t,n)}function C(e){return e.length}function w(e){return e.length}function T(e,t){return t.push(e),e}function E(e,t){return e.map(t).join(``)}function D(e,t){return e.filter(function(e){return!v(e,t)})}var O=1,k=1,A=0,j=0,M=0,N=``;function P(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:O,column:k,length:o,return:``,siblings:s}}function F(e,t){return h(P(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function I(e){for(;e.root;)e=F(e.root,{children:[e]});T(e,e.siblings)}function ee(){return M}function te(){return M=j>0?x(N,--j):0,k--,M===10&&(k=1,O--),M}function L(){return M=j<A?x(N,j++):0,k++,M===10&&(k=1,O++),M}function R(){return x(N,j)}function ne(){return j}function re(e,t){return S(N,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ie(e){return O=k=1,A=C(N=e),j=0,[]}function ae(e){return N=``,e}function oe(e){return _(re(j-1,le(e===91?e+2:e===40?e+1:e)))}function se(e){for(;(M=R())&&M<33;)L();return z(e)>2||z(M)>3?``:` `}function ce(e,t){for(;--t&&L()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return re(e,ne()+(t<6&&R()==32&&L()==32))}function le(e){for(;L();)switch(M){case e:return j;case 34:case 39:e!==34&&e!==39&&le(M);break;case 40:e===41&&le(e);break;case 92:L();break}return j}function ue(e,t){for(;L()&&e+M!==57&&(e+M!==84||R()!==47););return`/*`+re(t,j-1)+`*`+m(e===47?e:L())}function de(e){for(;!z(R());)L();return re(e,j)}function fe(e){return ae(pe(``,null,null,null,[``],e=ie(e),0,[0],e))}function pe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,h=0,g=0,_=1,v=1,w=1,E=0,D=``,O=i,k=a,A=r,j=D;v;)switch(g=E,E=L()){case 40:if(g!=108&&x(j,d-1)==58){b(j+=y(oe(E),`&`,`&\f`),`&\f`,p(l?s[l-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:j+=oe(E);break;case 9:case 10:case 13:case 32:j+=se(g);break;case 92:j+=ce(ne()-1,7);continue;case 47:switch(R()){case 42:case 47:T(he(ue(L(),ne()),t,n,c),c),(z(g||1)==5||z(R()||1)==5)&&C(j)&&S(j,-1,void 0)!==` `&&(j+=` `);break;default:j+=`/`}break;case 123*_:s[l++]=C(j)*w;case 125*_:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:w==-1&&(j=y(j,/\f/g,``)),h>0&&(C(j)-d||_===0&&g===47)&&T(h>32?ge(j+`;`,r,n,d-1,c):ge(y(j,` `,``)+`;`,r,n,d-2,c),c);break;case 59:j+=`;`;default:if(T(A=me(j,t,n,l,u,i,s,D,O=[],k=[],d,a),a),E===123){if(u===0)pe(j,t,A,A,O,a,d,s,k);else{switch(f){case 99:if(x(j,3)===110)break;case 108:if(x(j,2)===97)break;default:u=0;case 100:case 109:case 115:}u?pe(e,A,A,r&&T(me(e,A,A,0,0,i,s,D,i,O=[],d,k),k),i,k,d,s,r?O:k):pe(j,A,A,A,[``],k,0,s,k)}}}l=u=h=0,_=w=1,D=j=``,d=o;break;case 58:d=1+C(j),h=g;default:if(_<1){if(E==123)--_;else if(E==125&&_++==0&&te()==125)continue}switch(j+=m(E),E*_){case 38:w=u>0?1:(j+=`\f`,-1);break;case 44:s[l++]=(C(j)-1)*w,w=1;break;case 64:R()===45&&(j+=oe(L())),f=R(),u=d=C(D=j+=de(ne())),E++;break;case 45:g===45&&C(j)==2&&(_=0)}}return a}function me(e,t,n,r,i,a,o,c,l,u,d,f){for(var m=i-1,h=i===0?a:[``],g=w(h),v=0,b=0,x=0;v<r;++v)for(var C=0,T=S(e,m+1,m=p(b=o[v])),E=e;C<g;++C)(E=_(b>0?h[C]+` `+T:y(T,/&\f/g,h[C])))&&(l[x++]=E);return P(e,t,n,i===0?s:c,l,u,d,f)}function he(e,t,n,r){return P(e,t,n,o,m(ee()),S(e,2,-2),0,r)}function ge(e,t,n,r,i){return P(e,t,n,c,S(e,0,r),S(e,r+1,-1),r,i)}function _e(e,t,n){switch(g(e,t)){case 5103:return a+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return a+e+e;case 4855:return a+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a+e+i+e+r+e+e;case 5936:switch(x(e,t+11)){case 114:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return a+e+r+e+e;case 6165:return a+e+r+`flex-`+e+e;case 5187:return a+e+y(e,/(\w+).+(:[^]+)/,a+`box-$1$2`+r+`flex-$1$2`)+e;case 5443:return a+e+r+`flex-item-`+y(e,/flex-|-self/g,``)+(v(e,/flex-|baseline/)?``:r+`grid-row-`+y(e,/flex-|-self/g,``))+e;case 4675:return a+e+r+`flex-line-pack`+y(e,/align-content|flex-|-self/g,``)+e;case 5548:return a+e+r+y(e,`shrink`,`negative`)+e;case 5292:return a+e+r+y(e,`basis`,`preferred-size`)+e;case 6060:return a+`box-`+y(e,`-grow`,``)+a+e+r+y(e,`grow`,`positive`)+e;case 4554:return a+y(e,/([^-])(transform)/g,`$1`+a+`$2`)+e;case 6187:return y(y(y(e,/(zoom-|grab)/,a+`$1`),/(image-set)/,a+`$1`),e,``)+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,a+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,a+`box-pack:$3`+r+`flex-pack:$3`),/space-between/,`justify`)+a+e+e;case 4200:if(!v(e,/flex-|baseline/))return r+`grid-column-align`+S(e,t)+e;break;case 2592:case 3360:return r+y(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,v(e.props,/grid-\w+-end/)})?~b(e+(n=n[t].value),`span`,0)?e:r+y(e,`-start`,``)+e+r+`grid-row-span:`+(~b(n,`span`,0)?v(n,/\d+/):v(n,/\d+/)-+v(e,/\d+/))+`;`:r+y(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return v(e.props,/grid-\w+-start/)})?e:r+y(y(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,a+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(e)-1-t>6)switch(x(e,t+1)){case 109:if(x(e,t+4)!==45)break;case 102:return y(e,/(.+:)(.+)-([^]+)/,`$1`+a+`$2-$3$1`+i+(x(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~b(e,`stretch`,0)?_e(y(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,i,a,o,s,c){return r+n+`:`+i+c+(a?r+n+`-span:`+(o?s:s-+i)+c:``)+e});case 4949:if(x(e,t+6)===121)return y(e,`:`,`:`+a)+e;break;case 6444:switch(x(e,x(e,14)===45?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+a+(x(e,14)===45?`inline-`:``)+`box$3$1`+a+`$2$3$1`+r+`$2box$3`)+e;case 100:return y(e,`:`,`:`+r)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,`scroll-`,`scroll-snap-`)+e}return e}function ve(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function ye(e,t,n,r){switch(e.type){case f:if(e.children.length)break;case l:case u:case c:return e.return=e.return||e.value;case o:return``;case d:return e.return=e.value+`{`+ve(e.children,r)+`}`;case s:if(!C(e.value=e.props.join(`,`)))return``}return C(n=ve(e.children,r))?e.return=e.value+`{`+n+`}`:``}function be(e){var t=w(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function xe(e){return function(t){t.root||(t=t.return)&&e(t)}}function Se(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case c:e.return=_e(e.value,e.length,n);return;case d:return ve([F(e,{value:y(e.value,`@`,`@`+a)})],o);case s:if(e.length)return E(n=e.props,function(t){switch(v(t,o=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:I(F(e,{props:[y(t,/:(read-\w+)/,`:`+i+`$1`)]})),I(F(e,{props:[t]})),h(e,{props:D(n,o)});break;case`::placeholder`:I(F(e,{props:[y(t,/:(plac\w+)/,`:`+a+`input-$1`)]})),I(F(e,{props:[y(t,/:(plac\w+)/,`:`+i+`$1`)]})),I(F(e,{props:[y(t,/:(plac\w+)/,r+`input-$1`)]})),I(F(e,{props:[t]})),h(e,{props:D(n,o)})}return``})}}var B=t(n()),V=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ce=`active`,we=`data-styled-version`,Te=`6.5.3`,Ee=`/*!sc*/
`,H=typeof window<`u`&&typeof document<`u`;function De(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Oe=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:De(`REACT_APP_SC_DISABLE_SPEEDY`)??De(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),ke=`sc-keyframes-`;function U(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var W=new Map,Ae=new Map,je=1,Me=e=>{if(W.has(e))return W.get(e);for(;Ae.has(je);)je++;let t=je++;return W.set(e,t),Ae.set(t,e),t},Ne=e=>Ae.get(e),Pe=(e,t)=>{je=t+1,W.set(e,t),Ae.set(t,e)},Fe=Object.freeze([]),G=Object.freeze({});function Ie(e,t,n=G){return e.theme!==n.theme&&e.theme||t||n.theme}var Le=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function ze(e){return e.replace(Le,`-`).replace(Re,``)}var Be=/(a)(d)/gi,Ve=e=>String.fromCharCode(e+(e>25?39:97));function He(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Ve(t%52)+n;return(Ve(t%52)+n).replace(Be,`$1-$2`)}var Ue=5381,K=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},We=e=>K(Ue,e);function Ge(e){return He(We(e)>>>0)}function Ke(e){return e.displayName||e.name||`Component`}function qe(e){return typeof e==`string`&&!0}function Je(e){return qe(e)?`styled.${e}`:`Styled(${Ke(e)})`}var Ye=Symbol.for(`react.memo`),Xe=Symbol.for(`react.forward_ref`),Ze={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Qe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},et={[Xe]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ye]:$e};function tt(e){return(`type`in(t=e)&&t.type.$$typeof)===Ye?$e:`$$typeof`in e?et[e.$$typeof]:Ze;var t}var nt=Object.defineProperty,rt=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,at=Object.getOwnPropertyDescriptor,ot=Object.getPrototypeOf,st=Object.prototype;function ct(e,t,n){if(typeof t!=`string`){let r=ot(t);r&&r!==st&&ct(e,r,n);let i=rt(t).concat(it(t)),a=tt(e),o=tt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Qe||n&&n[s]||o&&s in o||a&&s in a)){let n=at(t,s);try{nt(e,s,n)}catch{}}}}return e}function lt(e){return typeof e==`function`}var ut=Symbol.for(`react.forward_ref`);function dt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===ut&&`styledComponentId`in e}function q(e,t){return e&&t?e+` `+t:e||t||``}function ft(e,t){return e.join(t||``)}function J(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function pt(e,t,n=!1){if(!n&&!J(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=pt(e[n],t[n]);else if(J(t))for(let n in t)e[n]=pt(e[n],t[n]);return e}function mt(e,t){Object.defineProperty(e,"toString",{value:t})}var ht=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw U(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ee;return t}},gt=`style[${V}][${we}="${Te}"]`,_t=RegExp(`^${V}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),vt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,yt=e=>{if(!e)return document;if(vt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(vt(t))return t}return document},bt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},xt=(e,t)=>{let n=(t.textContent??``).split(Ee),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(_t);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Pe(n,t),bt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},St=e=>{let t=yt(e.options.target).querySelectorAll(gt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(V)!==Ce&&(xt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Y=!1;function Ct(){if(!1!==Y)return Y;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Y=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Y=t.getAttribute(`content`)||void 0}return Y=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var wt=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${V}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(V,Ce),i.setAttribute(we,Te);let s=t||Ct();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Tt=class{constructor(e,t){this.element=wt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw U(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Et=class{constructor(e,t){this.element=wt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Dt=H,Ot={isServer:!H,useCSSOMInjection:!Oe},kt=class e{static registerId(e){return Me(e)}constructor(e=G,t={},n){this.options=Object.assign(Object.assign({},Ot),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&H&&Dt&&(Dt=!1,St(this)),mt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ne(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=V+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&H&&St(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&H&&t.target!==this.options.target&&yt(this.options.target)!==yt(t.target)&&St(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Tt(t,n):new Et(t,n))(this.options),new ht(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Me(e),e.startsWith(ke)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Me(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Me(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},At=new WeakSet,jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in jt||e.startsWith(`--`)?String(t).trim():t+`px`}var X=47;function Nt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Pt=Symbol.for(`sc-keyframes`);function Ft(e){return typeof e==`object`&&!!e&&Pt in e}function It(e){return lt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Lt=e=>e==null||!1===e||e===``,Rt=Symbol.for(`react.client.reference`);function zt(e){return e.$$typeof===Rt}function Bt(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Lt(r)&&(Array.isArray(r)&&At.has(r)||lt(r)?t.push(Nt(n)+`:`,r,`;`):J(r)?(t.push(n+` {`),Bt(r,t),t.push(`}`)):t.push(Nt(n)+`: `+Mt(n,r)+`;`))}}function Z(e,t,n,r,i=[]){if(Lt(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return zt(e)?i:It(e)&&t?Z(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Z(e[a],t,n,r,i);return i}return dt(e)?(i.push(`.${e.styledComponentId}`),i):Ft(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):zt(e)?i:J(e)&&e.toString===Object.prototype.toString?(Bt(e,i),i):(i.push(e.toString()),i)}var Vt=We(Te),Ht=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=K(Vt,t),this.baseStyle=n,kt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(It(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=ft(Z(r,e,t,n)))}else i+=ft(Z(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=He(K(K(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=q(r,a)}}return r}},Ut=/&/g;function Wt(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Gt(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==X||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===X&&(o=!1,c++);else if(l!==34&&l!==39||Wt(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Kt(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Kt(a.children,t)}return e}function qt({options:e=G,plugins:t=Fe}=G){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Ut,r).replace(i,a))}),e.prefix&&o.push(Se),o.push(ye);let s=[],c=be(o.concat(xe(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Gt(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Wt(e,o)){if(s===0){if(t===X&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==X);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===X)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===X&&o+1<r&&e.charCodeAt(o+1)===X){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Gt(i)):l===0?e:Gt(e)}(t),d=fe(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Kt(d,e.namespace)),s=[],ve(d,c),s},u=e,d=Ue;for(let e=0;e<t.length;e++)t[e].name||U(15),d=K(d,t[e].name);return u!=null&&u.namespace&&(d=K(d,u.namespace)),u!=null&&u.prefix&&(d=K(d,`p`)),l.hash=d===Ue?``:d.toString(),l}var Jt=new kt,Yt=qt(),Xt=B.createContext({shouldForwardProp:void 0,styleSheet:Jt,stylis:Yt,stylisPlugins:void 0});Xt.Consumer;function Zt(){return B.useContext(Xt)}var Qt=B.createContext(void 0);Qt.Consumer;var $t=Object.prototype.hasOwnProperty,en={};function tn(e,t){let n=typeof e==`string`?ze(e):`sc`;en[n]=(en[n]||0)+1;let r=n+`-`+Ge(Te+n+en[n]);return t?t+`-`+r:r}function nn(e,t,n){let r=dt(e),i=e,a=!qe(e),{attrs:o=Fe,componentId:s=tn(t.displayName,t.parentComponentId),displayName:c=Je(e)}=t,l=t.displayName&&t.componentId?ze(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Ht(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=B.useContext(Qt),u=Zt(),d=e.shouldForwardProp||u.shouldForwardProp,f=Ie(t,l,a)||G,p,m;{let e=B.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if($t.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=lt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=q(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=q(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)$t.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=q(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[qe(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,B.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=B.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?q(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)pt(e,n,!0);return e}({},i.defaultProps,e):e}}),mt(m,()=>`.${m.styledComponentId}`),a&&ct(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var rn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function an(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var on=e=>(At.add(e),e);function sn(e,...t){if(lt(e)||J(e))return on(Z(an(Fe,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Z(n):on(Z(an(n,t)))}function cn(e,t,n=G){if(!t)throw U(1,t);let r=(r,...i)=>e(t,n,sn(r,...i));return r.attrs=r=>cn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>cn(e,t,Object.assign(Object.assign({},n),r)),r}var ln=e=>cn(nn,e),Q=ln;rn.forEach(e=>{Q[e]=ln(e)}),`${V}`,`${V}`,`${V}`;var un=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),$=e(((e,t)=>{t.exports=un()}))(),dn=typeof Q==`function`?Q:Q?.default||Q,fn=({checked:e,onChange:t,size:n,className:r})=>{let[i,a]=(0,B.useState)(!1);return(0,B.useEffect)(()=>{if(typeof window<`u`){let e=document.documentElement.classList.contains(`dark`);a(e);let t=new MutationObserver(()=>{a(document.documentElement.classList.contains(`dark`))});return t.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),()=>t.disconnect()}},[]),(0,$.jsx)(pn,{style:n?{"--custom-size":n}:void 0,className:r,children:(0,$.jsxs)(`label`,{className:`theme-switch`,children:[(0,$.jsx)(`input`,{type:`checkbox`,className:`theme-switch__checkbox`,checked:e===void 0?i:e,onChange:e=>{let n=e.target.checked;if(a(n),typeof window<`u`){let e=n?`dark`:`light`;n?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`),localStorage.setItem(`theme`,e)}t&&t(n)},"aria-label":`Toggle theme`}),(0,$.jsxs)(`div`,{className:`theme-switch__container`,children:[(0,$.jsx)(`div`,{className:`theme-switch__clouds`}),(0,$.jsx)(`div`,{className:`theme-switch__stars-container`,children:(0,$.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 144 55`,fill:`none`,children:(0,$.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C138.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z`,fill:`currentColor`})})}),(0,$.jsx)(`div`,{className:`theme-switch__circle-container`,children:(0,$.jsx)(`div`,{className:`theme-switch__sun-moon-container`,children:(0,$.jsxs)(`div`,{className:`theme-switch__moon`,children:[(0,$.jsx)(`div`,{className:`theme-switch__spot`}),(0,$.jsx)(`div`,{className:`theme-switch__spot`}),(0,$.jsx)(`div`,{className:`theme-switch__spot`})]})})})]})]})})},pn=dn.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .theme-switch {
    --toggle-size: var(--custom-size, 30px);
    /* the size is adjusted using font-size,
       this is not transform scale,
       so you can choose any size */
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 6.25em;
    /* radius 0 - minecraft mode :) */
    --container-light-bg: #3D7EAE;
    --container-night-bg: #1D1F2C;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ECCA2F;
    --moon-bg: #C4C9D1;
    --spot-color: #959DB1;
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    --stars-color: #fff;
    --clouds-color: #F3FDFF;
    --back-clouds-color: #AACADF;
    --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);
    cursor: pointer;
    display: inline-block;
  }

  .theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    -webkit-box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__container::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    -webkit-box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    border-radius: var(--container-radius)
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: var(--circle-container-offset);
    border-radius: var(--container-radius);
    -webkit-box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: var(--circle-transition);
    -o-transition: var(--circle-transition);
    transition: var(--circle-transition);
    pointer-events: none;
  }

  .theme-switch__sun-moon-container {
    pointer-events: auto;
    position: relative;
    z-index: 2;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: var(--container-radius);
    background-color: var(--sun-bg);
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    overflow: hidden;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  .theme-switch__moon {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: var(--moon-bg);
    border-radius: inherit;
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__spot {
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
    -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  }

  .theme-switch__spot:nth-of-type(2) {
    width: 0.375em;
    height: 0.375em;
    top: 0.937em;
    left: 1.375em;
  }

  .theme-switch__spot:nth-last-of-type(3) {
    width: 0.25em;
    height: 0.25em;
    top: 0.312em;
    left: 0.812em;
  }

  .theme-switch__clouds {
    width: 1.25em;
    height: 1.25em;
    background-color: var(--clouds-color);
    border-radius: var(--container-radius);
    position: absolute;
    bottom: -0.625em;
    left: 0.312em;
    -webkit-box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  }

  .theme-switch__stars-container {
    position: absolute;
    color: var(--stars-color);
    top: -100%;
    left: 0.312em;
    width: 2.75em;
    height: auto;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  /* actions */

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em);
  }

  .theme-switch__circle-container:hover {
    left: calc(var(--circle-container-offset) + 0.187em);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
    bottom: -4.062em;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;export{fn as Switch,fn as default};