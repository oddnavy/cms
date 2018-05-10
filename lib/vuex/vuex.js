!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";var t=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},e="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o(t,e){if(!t)throw new Error("[vuex] "+e)}var r=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},i={namespaced:{configurable:!0}};i.namespaced.get=function(){return!!this._rawModule.namespaced},r.prototype.addChild=function(t,e){this._children[t]=e},r.prototype.removeChild=function(t){delete this._children[t]},r.prototype.getChild=function(t){return this._children[t]},r.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},r.prototype.forEachChild=function(t){n(this._children,t)},r.prototype.forEachGetter=function(t){this._rawModule.getters&&n(this._rawModule.getters,t)},r.prototype.forEachAction=function(t){this._rawModule.actions&&n(this._rawModule.actions,t)},r.prototype.forEachMutation=function(t){this._rawModule.mutations&&n(this._rawModule.mutations,t)},Object.defineProperties(r.prototype,i);var s=function(t){this.register([],t,!1)};s.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},s.prototype.update=function(t){!function t(e,n,o){f(e,o);n.update(o);if(o.modules)for(var r in o.modules){if(!n.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");t(e.concat(r),n.getChild(r),o.modules[r])}}([],this.root,t)},s.prototype.register=function(t,e,o){var i=this;void 0===o&&(o=!0),f(t,e);var s=new r(e,o);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);e.modules&&n(e.modules,function(e,n){i.register(t.concat(n),e,o)})},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var a,u={assert:function(t){return"function"==typeof t},expected:"function"},c={getters:u,mutations:u,actions:{assert:function(t){return"function"==typeof t||"object"==typeof t&&"function"==typeof t.handler},expected:'function or object with "handler" function'}};function f(t,e){Object.keys(c).forEach(function(r){if(e[r]){var i=c[r];n(e[r],function(e,n){o(i.assert(e),function(t,e,n,o,r){var i=e+" should be "+r+' but "'+e+"."+n+'"';t.length>0&&(i+=' in module "'+t.join(".")+'"');return i+=" is "+JSON.stringify(o)+"."}(t,r,n,e,i.expected))})}})}var l=function t(n){var r=this;void 0===n&&(n={}),!a&&"undefined"!=typeof window&&window.Vue&&_(window.Vue),o(a,"must call Vue.use(Vuex) before creating a store instance."),o("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser."),o(this instanceof t,"Store must be called with the new operator.");var i=n.plugins;void 0===i&&(i=[]);var u=n.strict;void 0===u&&(u=!1);var c=n.state;void 0===c&&(c={}),"function"==typeof c&&(c=c()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(n),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new a;var f,l=this,p=this.dispatch,h=this.commit;this.dispatch=function(t,e){return p.call(l,t,e)},this.commit=function(t,e,n){return h.call(l,t,e,n)},this.strict=u,v(this,c,[],this._modules.root),m(this,c),i.forEach(function(t){return t(r)}),a.config.devtools&&(f=this,e&&(f._devtoolHook=e,e.emit("vuex:init",f),e.on("vuex:travel-to-state",function(t){f.replaceState(t)}),f.subscribe(function(t,n){e.emit("vuex:mutation",t,n)})))},p={state:{configurable:!0}};function h(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,r){var i=t._vm;t.getters={};var s={};n(t._wrappedGetters,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var u,c=a.config.silent;a.config.silent=!0,t._vm=new a({data:{$$state:e},computed:s}),a.config.silent=c,t.strict&&(u=t)._vm.$watch(function(){return this._data.$$state},function(){o(u._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0}),i&&(r&&t._withCommit(function(){i._data.$$state=null}),a.nextTick(function(){return i.$destroy()}))}function v(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var u=y(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a.set(u,c,o.state)})}var f,l,p,h,d,m=o.context=(f=t,p=n,d={dispatch:(h=""===(l=s))?f.dispatch:function(t,e,n){var o=g(t,e,n),r=o.payload,i=o.options,s=o.type;if(i&&i.root||(s=l+s,f._actions[s]))return f.dispatch(s,r);console.error("[vuex] unknown local action type: "+o.type+", global type: "+s)},commit:h?f.commit:function(t,e,n){var o=g(t,e,n),r=o.payload,i=o.options,s=o.type;i&&i.root||(s=l+s,f._mutations[s])?f.commit(s,r,i):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+s)}},Object.defineProperties(d,{getters:{get:h?function(){return f.getters}:function(){return t=f,n={},o=(e=l).length,Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n;var t,e,n,o}},state:{get:function(){return y(f.state,p)}}}),d);o.forEachMutation(function(e,n){var o,r,i,a;r=s+n,i=e,a=m,((o=t)._mutations[r]||(o._mutations[r]=[])).push(function(t){i.call(o,a.state,t)})}),o.forEachAction(function(e,n){var o,r,i,a,u=e.root?n:s+n,c=e.handler||e;r=u,i=c,a=m,((o=t)._actions[r]||(o._actions[r]=[])).push(function(t,e){var n,r=i.call(o,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:o.getters,rootState:o.state},t,e);return(n=r)&&"function"==typeof n.then||(r=Promise.resolve(r)),o._devtoolHook?r.catch(function(t){throw o._devtoolHook.emit("vuex:error",t),t}):r})}),o.forEachGetter(function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,s+n,e,m)}),o.forEachChild(function(o,i){v(t,e,n.concat(i),o,r)})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),o("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function _(e){a&&e===a?console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):t(a=e)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){o(!1,"Use store.replaceState() to explicit replace store state.")},l.prototype.commit=function(t,e,n){var o=this,r=g(t,e,n),i=r.type,s=r.payload,a=r.options,u={type:i,payload:s},c=this._mutations[i];c?(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},l.prototype.dispatch=function(t,e){var n=this,o=g(t,e),r=o.type,i=o.payload,s={type:r,payload:i},a=this._actions[r];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(i)})):a[0](i);console.error("[vuex] unknown action type: "+r)},l.prototype.subscribe=function(t){return h(t,this._subscribers)},l.prototype.subscribeAction=function(t){return h(t,this._actionSubscribers)},l.prototype.watch=function(t,e,n){var r=this;return o("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},l.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},l.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),o(Array.isArray(t),"module path must be a string or an Array."),o(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),o(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));a.delete(n,t[t.length-1])}),d(this)},l.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,p);var b=O(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=j(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),w=O(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=j(this.$store,"mapMutations",t);if(!i)return;o=i.context.commit}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n}),x=O(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||j(this.$store,"mapGetters",t)){if(r in this.$store.getters)return this.$store.getters[r];console.error("[vuex] unknown getter: "+r)}},n[o].vuex=!0}),n}),$=O(function(t,e){var n={};return M(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=j(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n});function M(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function O(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}return{Store:l,install:_,version:"2.5.0",mapState:b,mapMutations:w,mapGetters:x,mapActions:$,createNamespacedHelpers:function(t){return{mapState:b.bind(null,t),mapGetters:x.bind(null,t),mapMutations:w.bind(null,t),mapActions:$.bind(null,t)}}}});
//# sourceMappingURL=vuex.js.map