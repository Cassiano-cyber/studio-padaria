"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4358],{35002:function(e,t,r){r.d(t,{Bt:function(){return a_},EK:function(){return K},IO:function(){return sJ},JU:function(){return sh},PL:function(){return al},QT:function(){return aa},Xo:function(){return s3},ad:function(){return sp},ar:function(){return s0},b9:function(){return s9},cf:function(){return ac},hJ:function(){return su},i3:function(){return aw},nP:function(){return aT},pl:function(){return au},qs:function(){return aI},r7:function(){return ah},vr:function(){return aE}});var n,i,s,a,o=r(99279),l=r(42680),u=r(19053),h=r(29504),c=r(76552),d=r(4575);r(20357);var f=r(9109).lW;let m="@firebase/firestore",g="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="11.9.0",v=new u.Yd("@firebase/firestore");function w(){return v.logLevel}function _(e,...t){if(v.logLevel<=u.in.DEBUG){let r=t.map(I);v.debug(`Firestore (${y}): ${e}`,...r)}}function E(e,...t){if(v.logLevel<=u.in.ERROR){let r=t.map(I);v.error(`Firestore (${y}): ${e}`,...r)}}function T(e,...t){if(v.logLevel<=u.in.WARN){let r=t.map(I);v.warn(`Firestore (${y}): ${e}`,...r)}}function I(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,S(e,n,r)}function S(e,t,r){let n=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw E(n),Error(n)}function N(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||S(t,i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V{constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){N(void 0===this.o,42304);let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new k;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new k,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new k)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(N("string"==typeof t.accessToken,31837,{l:t}),new D(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return N(null===e||"string"==typeof e,2055,{h:e}),new p(e)}}class L{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=p.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class M{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new L(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){N(void 0===this.o,3512);let r=e=>{null!=e.error&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.m;return this.m=e.token,_("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?n(e):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(N("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function q(e,t){return e<t?-1:e>t?1:0}function B(e,t){let r=0;for(;r<e.length&&r<t.length;){let n=e.codePointAt(r),i=t.codePointAt(r);if(n!==i){if(n<128&&i<128)return q(n,i);{let s=P(),a=function(e,t){for(let r=0;r<e.length&&r<t.length;++r)if(e[r]!==t[r])return q(e[r],t[r]);return q(e.length,t.length)}(s.encode(z(e,r)),s.encode(z(t,r)));return 0!==a?a:q(n,i)}}r+=n>65535?2:1}return q(e.length,t.length)}function z(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function $(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class K{static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new K(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new K(0,0))}static max(){return new Q(new K(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G="__name__";class j{constructor(e,t,r){void 0===t?t=0:t>e.length&&C(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&C(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=j.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return q(e.length,t.length)}static compareSegments(e,t){let r=j.isNumericId(e),n=j.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?j.extractNumericId(e).compare(j.extractNumericId(t)):B(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.z8.fromString(e.substring(4,e.length-2))}}class H extends j{construct(e,t,r){return new H(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new b(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}let W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends j{construct(e,t,r){return new Y(e,t,r)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===G}static keyField(){return new Y([G])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new b(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new b(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new b(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(H.fromString(e))}static fromName(e){return new X(H.fromString(e).popFirst(5))}static empty(){return new X(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new H(e.slice()))}}class J{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}J.UNKNOWN_ID=-1;class Z{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Z(Q.min(),X.empty(),-1)}static max(){return new Z(Q.max(),X.empty(),-1)}}class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e){if(e.code!==A.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new er((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof er?t:er.resolve(t)}catch(e){return er.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):er.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):er.reject(t)}static resolve(e){return new er((t,r)=>{t(e)})}static reject(e){return new er((t,r)=>{r(e)})}static waitFor(e){return new er((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=er.resolve(!1);for(let r of e)t=t.next(e=>e?er.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new er((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new er((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function en(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ue(e),this.ce=e=>t.writeSequenceNumber(e))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ce&&this.ce(e),e}}function es(e){return null==e}function ea(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function el(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function eu(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}ei.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this.comparator=e,this.root=t||ed.EMPTY}insert(e,t){return new eh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ed.BLACK,null,null))}remove(e){return new eh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ed.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ed{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:ed.RED,this.left=null!=n?n:ed.EMPTY,this.right=null!=i?i:ed.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new ed(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return ed.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ed.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ed.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ed.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw C(27949);return e+(this.isRed()?0:1)}}ed.EMPTY=null,ed.RED=!0,ed.BLACK=!1,ed.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(e,t,r,n,i){return this}insert(e,t,r){return new ed(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.comparator=e,this.data=new eh(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new em(this.data.getIterator())}getIteratorFrom(e){return new em(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ef)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ef(this.comparator);return t.data=e,t}}class em{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new eg([])}unionWith(e){let t=new ef(Y.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new eg(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.binaryString=e}static fromBase64String(e){return new ey(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ep("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ey(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ey.EMPTY_BYTE_STRING=new ey("");let ev=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ew(e){if(N(!!e,39018),"string"==typeof e){let t=0,r=ev.exec(e);if(N(!!r,46558,{timestamp:e}),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e_(e.seconds),nanos:e_(e.nanos)}}function e_(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eE(e){return"string"==typeof e?ey.fromBase64String(e):ey.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT="server_timestamp",eI="__type__",eC="__previous_value__",eS="__local_write_time__";function eN(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eI])||void 0===r?void 0:r.stringValue)===eT}function eA(e){let t=e.mapValue.fields[eC];return eN(t)?eA(t):t}function eb(e){let t=ew(e.mapValue.fields[eS].timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,t,r,n,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}let eD="(default)";class ex{constructor(e,t){this.projectId=e,this.database=t||eD}static empty(){return new ex("","")}get isDefaultDatabase(){return this.database===eD}isEqual(e){return e instanceof ex&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eR="__type__",eV="__max__",eL={mapValue:{fields:{__type__:{stringValue:eV}}}},eM="__vector__",eO="value";function eF(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eN(e)?4:eJ(e)?9007199254740991:eY(e)?10:11:C(28295,{value:e})}function eP(e,t){if(e===t)return!0;let r=eF(e);if(r!==eF(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eb(e).isEqual(eb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ew(e.timestampValue),n=ew(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eE(e.bytesValue).isEqual(eE(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e_(e.geoPointValue.latitude)===e_(t.geoPointValue.latitude)&&e_(e.geoPointValue.longitude)===e_(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e_(e.integerValue)===e_(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=e_(e.doubleValue),n=e_(t.doubleValue);return r===n?ea(r)===ea(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return $(e.arrayValue.values||[],t.arrayValue.values||[],eP);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(eo(r)!==eo(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eP(r[e],n[e])))return!1;return!0}(e,t);default:return C(52216,{left:e})}}function eU(e,t){return void 0!==(e.values||[]).find(e=>eP(e,t))}function eq(e,t){if(e===t)return 0;let r=eF(e),n=eF(t);if(r!==n)return q(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=e_(e.integerValue||e.doubleValue),n=e_(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eB(e.timestampValue,t.timestampValue);case 4:return eB(eb(e),eb(t));case 5:return B(e.stringValue,t.stringValue);case 6:return function(e,t){let r=eE(e),n=eE(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=q(r[e],n[e]);if(0!==t)return t}return q(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=q(e_(e.latitude),e_(t.latitude));return 0!==r?r:q(e_(e.longitude),e_(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ez(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let a=e.fields||{},o=t.fields||{},l=null===(r=a[eO])||void 0===r?void 0:r.arrayValue,u=null===(n=o[eO])||void 0===n?void 0:n.arrayValue,h=q((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:ez(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eL.mapValue&&t===eL.mapValue)return 0;if(e===eL.mapValue)return 1;if(t===eL.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=B(n[e],s[e]);if(0!==t)return t;let a=eq(r[n[e]],i[s[e]]);if(0!==a)return a}return q(n.length,s.length)}(e.mapValue,t.mapValue);default:throw C(23264,{Pe:r})}}function eB(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);let r=ew(e),n=ew(t),i=q(r.seconds,n.seconds);return 0!==i?i:q(r.nanos,n.nanos)}function ez(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=eq(r[e],n[e]);if(t)return t}return q(r.length,n.length)}function e$(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ew(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eE(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,X.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=e$(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${e$(e.fields[i])}`;return r+"}"}(e.mapValue):C(61005,{value:e})}function eK(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eQ(e){return!!e&&"integerValue"in e}function eG(e){return!!e&&"arrayValue"in e}function ej(e){return!!e&&"nullValue"in e}function eH(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eW(e){return!!e&&"mapValue"in e}function eY(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eR])||void 0===r?void 0:r.stringValue)===eM}function eX(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return el(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eX(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eX(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eJ(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e){this.value=e}static empty(){return new eZ({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eW(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eX(t)}setAll(e){let t=Y.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eX(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());eW(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eP(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eW(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(el(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eZ(eX(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new e0(e,0,Q.min(),Q.min(),Q.min(),eZ.empty(),0)}static newFoundDocument(e,t,r,n){return new e0(e,1,t,Q.min(),r,n,0)}static newNoDocument(e,t){return new e0(e,2,t,Q.min(),Q.min(),eZ.empty(),0)}static newUnknownDocument(e,t){return new e0(e,3,t,Q.min(),Q.min(),eZ.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(Q.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eZ.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eZ.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e0&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e0(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t){this.position=e,this.inclusive=t}}function e2(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?X.comparator(X.fromName(a.referenceValue),r.key):eq(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function e3(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eP(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{}class e5 extends e9{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new te(e,t,r):"array-contains"===t?new ti(e,r):"in"===t?new ts(e,r):"not-in"===t?new ta(e,r):"array-contains-any"===t?new to(e,r):new e5(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new tt(e,r):new tr(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(eq(t,this.value)):null!==t&&eF(this.value)===eF(t)&&this.matchesComparison(eq(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e6 extends e9{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new e6(e,t)}matches(e){return e8(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function e8(e){return"and"===e.op}function e7(e){for(let t of e.filters)if(t instanceof e6)return!1;return!0}class te extends e5{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class tt extends e5{constructor(e,t){super(e,"in",t),this.keys=tn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tr extends e5{constructor(e,t){super(e,"not-in",t),this.keys=tn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tn(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>X.fromName(e.referenceValue))}class ti extends e5{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eG(t)&&eU(t.arrayValue,this.value)}}class ts extends e5{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eU(this.value.arrayValue,t)}}class ta extends e5{constructor(e,t){super(e,"not-in",t)}matches(e){if(eU(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eU(this.value.arrayValue,t)}}class to extends e5{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eG(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eU(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.Ie=null}}function tu(e,t=null,r=[],n=[],i=null,s=null,a=null){return new tl(e,t,r,n,i,s,a)}function th(e){if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e5)return t.field.canonicalString()+t.op.toString()+e$(t.value);if(e7(t)&&e8(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),es(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>e$(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>e$(e)).join(",")),e.Ie=t}return e.Ie}function tc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof e5?r instanceof e5&&t.op===r.op&&t.field.isEqual(r.field)&&eP(t.value,r.value):t instanceof e6?r instanceof e6&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void C(19439)}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!e3(e.startAt,t.startAt)&&e3(e.endAt,t.endAt)}function td(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tm(e){return new tf(e)}function tg(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tp(e){return null!==e.collectionGroup}function ty(e){if(null===e.Ee){let t;e.Ee=[];let r=new Set;for(let t of e.explicitOrderBy)e.Ee.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ef(Y.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.Ee.push(new e4(t,n))}),r.has(Y.keyField().canonicalString())||e.Ee.push(new e4(Y.keyField(),n))}return e.Ee}function tv(e){return e.de||(e.de=function(e,t){if("F"===e.limitType)return tu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new e4(e.field,t)});let r=e.endAt?new e1(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new e1(e.startAt.position,e.startAt.inclusive):null;return tu(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,ty(e))),e.de}function tw(e,t){let r=e.filters.concat([t]);return new tf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function t_(e,t,r){return new tf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function tE(e,t){return tc(tv(e),tv(t))&&e.limitType===t.limitType}function tT(e){return`${th(tv(e))}|lt:${e.limitType}`}function tI(e){var t;let r;return`Query(target=${r=(t=tv(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e5?`${t.field.canonicalString()} ${t.op} ${e$(t.value)}`:t instanceof e6?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),es(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>e$(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>e$(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function tC(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):X.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of ty(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=e2(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,ty(e),t))&&(!e.endAt||!!function(e,t,r){let n=e2(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,ty(e),t))}function tS(e){return(t,r)=>{let n=!1;for(let i of ty(e)){let e=function(e,t,r){let n=e.field.isKeyField()?X.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?eq(n,i):C(42886)}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return C(19790,{direction:e.dir})}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){el(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return eu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tA=new eh(X.comparator),tb=new eh(X.comparator);function tk(...e){let t=tb;for(let r of e)t=t.insert(r.key,r);return t}function tD(e){let t=tb;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tx(){return new tN(e=>e.toString(),(e,t)=>e.isEqual(t))}let tR=new eh(X.comparator),tV=new ef(X.comparator);function tL(...e){let t=tV;for(let r of e)t=t.add(r);return t}let tM=new ef(q);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(t)?"-0":t}}function tF(e){return{integerValue:""+e}}function tP(e,t){return"number"==typeof t&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER?tF(t):tO(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(){this._=void 0}}function tq(e,t){return e instanceof tG?eQ(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tB extends tU{}class tz extends tU{constructor(e){super(),this.elements=e}}function t$(e,t){let r=tH(t);for(let t of e.elements)r.some(e=>eP(e,t))||r.push(t);return{arrayValue:{values:r}}}class tK extends tU{constructor(e){super(),this.elements=e}}function tQ(e,t){let r=tH(t);for(let t of e.elements)r=r.filter(e=>!eP(e,t));return{arrayValue:{values:r}}}class tG extends tU{constructor(e,t){super(),this.serializer=e,this.Re=t}}function tj(e){return e_(e.integerValue||e.doubleValue)}function tH(e){return eG(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t){this.field=e,this.transform=t}}class tY{constructor(e,t){this.version=e,this.transformResults=t}}class tX{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tX}static exists(e){return new tX(void 0,e)}static updateTime(e){return new tX(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tJ(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tZ{}function t0(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t8(e.key,tX.none()):new t3(e.key,e.data,tX.none());{let r=e.data,n=eZ.empty(),i=new ef(Y.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new t4(e.key,n,new eg(i.toArray()),tX.none())}}function t1(e,t,r,n){return e instanceof t3?function(e,t,r,n){if(!tJ(e.precondition,t))return r;let i=e.value.clone(),s=t6(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof t4?function(e,t,r,n){if(!tJ(e.precondition,t))return r;let i=t6(e.fieldTransforms,n,t),s=t.data;return(s.setAll(t9(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tJ(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function t2(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&$(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tz&&n instanceof tz||r instanceof tK&&n instanceof tK?$(r.elements,n.elements,eP):r instanceof tG&&n instanceof tG?eP(r.Re,n.Re):r instanceof tB&&n instanceof tB)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class t3 extends tZ{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class t4 extends tZ{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t9(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function t5(e,t,r){let n=new Map;N(e.length===r.length,32656,{Ve:r.length,me:e.length});for(let s=0;s<r.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);n.set(a.field,(i=r[s],o instanceof tz?t$(o,l):o instanceof tK?tQ(o,l):i))}return n}function t6(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tB?function(e,t){let r={fields:{[eI]:{stringValue:eT},[eS]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eN(t)&&(t=eA(t)),t&&(r.fields[eC]=t),{mapValue:r}}(t,s):e instanceof tz?t$(e,s):e instanceof tK?tQ(e,s):function(e,t){let r=tq(e,t),n=tj(r)+tj(e.Re);return eQ(r)&&eQ(e.Re)?tF(n):tO(e.serializer,n)}(e,s))}return n}class t8 extends tZ{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t7 extends tZ{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof t3?function(e,t,r){let n=e.value.clone(),i=t5(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof t4?function(e,t,r){if(!tJ(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=t5(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(t9(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=t1(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=t1(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tx();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=t0(s,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tL())}isEqual(e){return this.batchId===e.batchId&&$(this.mutations,e.mutations,(e,t)=>t2(e,t))&&$(this.baseMutations,e.baseMutations,(e,t)=>t2(e,t))}}class rt{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){N(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let n=tR,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new rt(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.count=e,this.unchangedNames=t}}function ri(e){switch(e){case A.OK:return C(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return C(15467,{code:e})}}function rs(e){if(void 0===e)return E("GRPC error has no .code"),A.UNKNOWN;switch(e){case n.OK:return A.OK;case n.CANCELLED:return A.CANCELLED;case n.UNKNOWN:return A.UNKNOWN;case n.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case n.INTERNAL:return A.INTERNAL;case n.UNAVAILABLE:return A.UNAVAILABLE;case n.UNAUTHENTICATED:return A.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case n.NOT_FOUND:return A.NOT_FOUND;case n.ALREADY_EXISTS:return A.ALREADY_EXISTS;case n.PERMISSION_DENIED:return A.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case n.ABORTED:return A.ABORTED;case n.OUT_OF_RANGE:return A.OUT_OF_RANGE;case n.UNIMPLEMENTED:return A.UNIMPLEMENTED;case n.DATA_LOSS:return A.DATA_LOSS;default:return C(39323,{code:e})}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra=new c.z8([4294967295,4294967295],0);function ro(e){let t=P().encode(e),r=new c.V8;return r.update(t),new Uint8Array(r.digest())}function rl(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([r,n],0),new c.z8([i,s],0)]}class ru{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new rh(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new rh(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new rh(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=c.z8.fromNumber(this.pe)}we(e,t,r){let n=e.add(t.multiply(c.z8.fromNumber(r)));return 1===n.compare(ra)&&(n=new c.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.pe)return!1;let[t,r]=rl(ro(e));for(let e=0;e<this.hashCount;e++){let n=this.we(t,r,e);if(!this.be(n))return!1}return!0}static create(e,t,r){let n=new ru(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.pe)return;let[t,r]=rl(ro(e));for(let e=0;e<this.hashCount;e++){let n=this.we(t,r,e);this.Se(n)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class rh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,rd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new rc(Q.min(),n,new eh(q),tA,tL())}}class rd{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new rd(r,t,tL(),tL(),tL())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,r,n){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=n}}class rm{constructor(e,t){this.targetId=e,this.Ce=t}}class rg{constructor(e,t,r=ey.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class rp{constructor(){this.Fe=0,this.Me=rw(),this.xe=ey.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=tL(),t=tL(),r=tL();return this.Me.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:C(38017,{changeType:i})}}),new rd(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=rw()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,N(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ry{constructor(e){this.ze=e,this.je=new Map,this.He=tA,this.Je=rv(),this.Ye=rv(),this.Ze=new eh(q)}Xe(e){for(let t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(let t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{let r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:C(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((e,r)=>{this.it(r)&&t(r)})}ot(e){let t=e.targetId,r=e.Ce.count,n=this._t(t);if(n){let i=n.target;if(td(i)){if(0===r){let e=new X(i.path);this.tt(t,e,e0.newNoDocument(e,Q.min()))}else N(1===r,20013,{expectedCount:r})}else{let n=this.ut(t);if(n!==r){let r=this.ct(e),i=r?this.lt(r,e,n):1;0!==i&&(this.st(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ct(e){let t,r;let n=e.Ce.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=eE(i).toUint8Array()}catch(e){if(e instanceof ep)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new ru(t,s,a)}catch(e){return T(e instanceof rh?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.pe?null:r}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){let r=this.ze.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ze.Pt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.tt(t,r,null),n++)}),n}It(e){let t=new Map;this.je.forEach((r,n)=>{let i=this._t(n);if(i){if(r.current&&td(i.target)){let t=new X(i.target.path);this.Et(t).has(n)||this.dt(n,t)||this.tt(n,t,e0.newNoDocument(t,e))}r.Le&&(t.set(n,r.qe()),r.Qe())}});let r=tL();this.Ye.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this._t(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.He.forEach((t,r)=>r.setReadTime(e));let n=new rc(e,t,this.Ze,this.He,r);return this.He=tA,this.Je=rv(),this.Ye=rv(),this.Ze=new eh(q),n}et(e,t){if(!this.it(e))return;let r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;let n=this.rt(e);this.dt(e,t)?n.$e(t,1):n.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){let t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new rp,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ef(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ef(q),this.Je=this.Je.insert(e,t)),t}it(e){let t=null!==this._t(e);return t||_("WatchChangeAggregator","Detected inactive target",e),t}_t(e){let t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new rp),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function rv(){return new eh(X.comparator)}function rw(){return new eh(X.comparator)}let r_={asc:"ASCENDING",desc:"DESCENDING"},rE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rT={and:"AND",or:"OR"};class rI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rC(e,t){return e.useProto3Json||es(t)?t:{value:t}}function rS(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rA(e){return N(!!e,49232),Q.fromTimestamp(function(e){let t=ew(e);return new K(t.seconds,t.nanos)}(e))}function rb(e,t){return rk(e,t).canonicalString()}function rk(e,t){let r=new H(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function rD(e){let t=H.fromString(e);return N(rq(t),10190,{key:t.toString()}),t}function rx(e,t){return rb(e.databaseId,t.path)}function rR(e,t){let r=rD(t);if(r.get(1)!==e.databaseId.projectId)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new X(rM(r))}function rV(e,t){return rb(e.databaseId,t)}function rL(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rM(e){return N(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function rO(e,t,r){return{name:rx(e,t),fields:r.value.mapValue.fields}}function rF(e,t){var r;let n;if(t instanceof t3)n={update:rO(e,t.key,t.value)};else if(t instanceof t8)n={delete:rx(e,t.key)};else if(t instanceof t4)n={update:rO(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t7))return C(16599,{ft:t.type});n={verify:rx(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof tB)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof tz)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof tK)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof tG)return{fieldPath:t.field.canonicalString(),increment:r.Re};throw C(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:rS(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:C(27497)),n}function rP(e){return{fieldPath:e.canonicalString()}}function rU(e){return Y.fromServerFormat(e.fieldPath)}function rq(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,r,n,i=Q.min(),s=Q.min(),a=ey.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rB(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rB(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e){this.wt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(e_(e.integerValue));else if("doubleValue"in e){let r=e_(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),ea(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),"string"==typeof r&&(r=ew(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(eE(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?eJ(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):eY(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):C(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){let r=e.fields||{};for(let e of(this.Mt(t,55),Object.keys(r)))this.Nt(e,t),this.Ct(r[e],t)}qt(e,t){var r,n;let i=e.fields||{};this.Mt(t,53);let s=(null===(n=null===(r=i[eO].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Mt(t,15),t.xt(e_(s)),this.Nt(eO,t),this.Ct(i[eO],t)}$t(e,t){let r=e.values||[];for(let e of(this.Mt(t,50),r))this.Ct(e,t)}kt(e,t){this.Mt(t,37),X.fromName(e).path.forEach(e=>{this.Mt(t,60),this.Kt(e,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}r$.Wt=new r$;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(){this.Cn=new rQ}addToCollectionParentIndex(e,t){return this.Cn.add(t),er.resolve()}getCollectionParents(e,t){return er.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return er.resolve()}deleteFieldIndex(e,t){return er.resolve()}deleteAllFieldIndexes(e){return er.resolve()}createTargetIndexes(e,t){return er.resolve()}getDocumentsMatchingTarget(e,t){return er.resolve(null)}getIndexType(e,t){return er.resolve(0)}getFieldIndexes(e,t){return er.resolve([])}getNextCollectionGroupToUpdate(e){return er.resolve(null)}getMinOffset(e,t){return er.resolve(Z.min())}getMinOffsetFromCollectionGroup(e,t){return er.resolve(Z.min())}updateCollectionGroup(e,t,r){return er.resolve()}updateIndexEntries(e,t){return er.resolve()}}class rQ{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new ef(H.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new ef(H.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rG={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rj{static withCacheSize(e){return new rj(e,rj.DEFAULT_COLLECTION_PERCENTILE,rj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rj.DEFAULT_COLLECTION_PERCENTILE=10,rj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rj.DEFAULT=new rj(41943040,rj.DEFAULT_COLLECTION_PERCENTILE,rj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rj.DISABLED=new rj(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new rH(0)}static lr(){return new rH(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rW="LruGarbageCollector";function rY([e,t],[r,n]){let i=q(e,r);return 0===i?q(t,n):i}class rX{constructor(e){this.Er=e,this.buffer=new ef(rY),this.dr=0}Ar(){return++this.dr}Rr(e){let t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>rY(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rJ{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(e){_(rW,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){en(e)?_(rW,"Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.mr(3e5)})}}class rZ{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return er.resolve(ei.le);let r=new rX(t);return this.gr.forEachTarget(e,e=>r.Rr(e.sequenceNumber)).next(()=>this.gr.yr(e,e=>r.Rr(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; disabled"),er.resolve(rG)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rG):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,n,i,s,a,o,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${n} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-h}ms`),er.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.changes=new tN(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e0.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?er.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&t1(r.mutation,e,eg.empty(),K.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tL()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tL()){let n=tx();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=tk();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=tx();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tL()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=tA,s=tx(),a=tx();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof t4)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),t1(a.mutation,t,a.mutation.getFieldMask(),K.now())):s.set(t.key,eg.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new r1(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=tx(),n=new eh((e,t)=>e-t),i=tL();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||eg.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||tL()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=tx();l.forEach(e=>{if(!i.has(e)){let n=t0(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return er.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):er.resolve(tx()),a=-1,o=i;return s.next(t=>er.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?er.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tL())).next(e=>({batchId:a,changes:tD(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=tk();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=tk();return this.indexManager.getCollectionParents(e,i).next(a=>er.forEach(a,a=>{let o=new tf(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,e0.newInvalidDocument(n)))});let r=tk();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&t1(s.mutation,n,eg.empty(),K.now()),tC(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return er.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,{id:t.id,version:t.version,createTime:rA(t.createTime)}),er.resolve()}getNamedQuery(e,t){return er.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=rD(e);return 4===t.length?H.emptyPath():rM(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){N(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rU(e.unaryFilter.field);return e5.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rU(e.unaryFilter.field);return e5.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rU(e.unaryFilter.field);return e5.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rU(e.unaryFilter.field);return e5.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return C(61313);default:return C(60726)}}(t):void 0!==t.fieldFilter?e5.create(rU(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return C(58110);default:return C(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e6.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C(1026)}}(t.compositeFilter.op)):C(30097,{filter:t})}(e);return r instanceof e6&&e7(t=r)&&e8(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new e4(rU(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=es(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new e1(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new e1(e.values||[],t)}(i.endAt)),new tf(n,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t_(t,t.limit,"L"):t}(t.bundledQuery),readTime:rA(t.readTime)}),er.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this.overlays=new eh(X.comparator),this.Qr=new Map}getOverlay(e,t){return er.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tx();return er.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.St(e,t,n)}),er.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Qr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Qr.delete(r)),er.resolve()}getOverlaysForCollection(e,t,r){let n=tx(),i=t.length+1,s=new X(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return er.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new eh((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=tx(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tx(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return er.resolve(a)}St(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Qr.get(n.largestBatchId).delete(r.key);this.Qr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new rr(t,r));let i=this.Qr.get(t);void 0===i&&(i=tL(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(){this.sessionToken=ey.EMPTY_BYTE_STRING}getSessionToken(e){return er.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,er.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(){this.$r=new ef(r6.Ur),this.Kr=new ef(r6.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){let r=new r6(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.zr(new r6(e,t))}jr(e,t){e.forEach(e=>this.removeReference(e,t))}Hr(e){let t=new X(new H([])),r=new r6(t,e),n=new r6(t,e+1),i=[];return this.Kr.forEachInRange([r,n],e=>{this.zr(e),i.push(e.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){let t=new X(new H([])),r=new r6(t,e),n=new r6(t,e+1),i=tL();return this.Kr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new r6(e,0),r=this.$r.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class r6{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return X.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ef(r6.Ur)}checkEmpty(e){return er.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new re(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Xr=this.Xr.add(new r6(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return er.resolve(s)}lookupMutationBatch(e,t){return er.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ti(t+1),n=r<0?0:r;return er.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return er.resolve(0===this.mutationQueue.length?-1:this.nr-1)}getAllMutationBatches(e){return er.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new r6(t,0),n=new r6(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,n],e=>{let t=this.ei(e.Zr);i.push(t)}),er.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ef(q);return t.forEach(e=>{let t=new r6(e,0),n=new r6(e,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([t,n],e=>{r=r.add(e.Zr)})}),er.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;X.isDocumentKey(i)||(i=i.child(""));let s=new r6(new X(i),0),a=new ef(q);return this.Xr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Zr)),!0)},s),er.resolve(this.ni(a))}ni(e){let t=[];return e.forEach(e=>{let r=this.ei(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){N(0===this.ri(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Xr;return er.forEach(t.mutations,n=>{let i=new r6(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){let r=new r6(t,0),n=this.Xr.firstAfterOrEqual(r);return er.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,er.resolve()}ri(e,t){return this.ti(e)}ti(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ei(e){let t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e){this.ii=e,this.docs=new eh(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return er.resolve(r?r.document.mutableCopy():e0.newInvalidDocument(t))}getEntries(e,t){let r=tA;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():e0.newInvalidDocument(e))}),er.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=tA,s=t.path,a=new X(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=X.comparator(e.documentKey,t.documentKey))?r:q(e.largestBatchId,t.largestBatchId)}(new Z(a.readTime,a.key,-1),r)||(n.has(a.key)||tC(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return er.resolve(i)}getAllFromCollectionGroup(e,t,r,n){C(9500)}si(e,t){return er.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ne(this)}getSize(e){return er.resolve(this.size)}}class ne extends r0{constructor(e){super(),this.Br=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Br.addEntry(e,n)):this.Br.removeEntry(r)}),er.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.persistence=e,this.oi=new tN(e=>th(e),tc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this._i=0,this.ai=new r5,this.targetCount=0,this.ui=rH.cr()}forEachTarget(e,t){return this.oi.forEach((e,r)=>t(r)),er.resolve()}getLastRemoteSnapshotVersion(e){return er.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return er.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),er.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),er.resolve()}Tr(e){this.oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ui=new rH(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,er.resolve()}updateTargetData(e,t){return this.Tr(t),er.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,er.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.oi.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),er.waitFor(i).next(()=>n)}getTargetCount(e){return er.resolve(this.targetCount)}getTargetData(e,t){let r=this.oi.get(t)||null;return er.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),er.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),er.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),er.resolve()}getMatchingKeysForTargetId(e,t){let r=this.ai.Yr(t);return er.resolve(r)}containsKey(e,t){return er.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.ci={},this.overlays={},this.li=new ei(0),this.hi=!1,this.hi=!0,this.Pi=new r9,this.referenceDelegate=e(this),this.Ti=new nt(this),this.indexManager=new rK,this.remoteDocumentCache=new r7(e=>this.referenceDelegate.Ii(e)),this.serializer=new rz(t),this.Ei=new r3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new r4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new r8(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);let n=new nn(this.li.next());return this.referenceDelegate.di(),r(n).next(e=>this.referenceDelegate.Ai(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ri(e,t){return er.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class nn extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class ni{constructor(e){this.persistence=e,this.Vi=new r5,this.mi=null}static fi(e){return new ni(e)}get gi(){if(this.mi)return this.mi;throw C(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),er.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),er.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),er.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(e=>this.gi.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.gi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return er.forEach(this.gi,r=>{let n=X.fromPath(r);return this.pi(e,n).next(e=>{e||t.removeEntry(n,Q.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(e=>{e?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return er.or([()=>er.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class ns{constructor(e,t){this.persistence=e,this.yi=new tN(e=>(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new rZ(this,t)}static fi(e,t){return new ns(e,t)}di(){}Ai(e){return er.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){let t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}br(e){let t=0;return this.yr(e,e=>{t++}).next(()=>t)}yr(e,t){return er.forEach(this.yi,(r,n)=>this.Dr(e,r,n).next(e=>e?er.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.si(e,n=>this.Dr(e,n,t).next(e=>{e||(r++,i.removeEntry(n,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),er.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),er.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),er.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),er.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eF(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=eA(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return eE(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,el(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw C(13486,{value:t})}}(e.data.value)),t}Dr(e,t,r){return er.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.yi.get(t);return er.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ds=r,this.As=n}static Rs(e,t){let r=tL(),n=tL();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new na(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.ws(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.bs(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new no;return this.Ss(e,t,r).next(n=>{if(i.result=n,this.fs)return this.Ds(e,t,r,n.size)})}).next(()=>i.result)}Ds(e,t,r,n){return r.documentReadCount<this.gs?(w()<=u.in.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",tI(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),er.resolve()):(w()<=u.in.DEBUG&&_("QueryEngine","Query:",tI(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ps*n?(w()<=u.in.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",tI(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tv(t))):er.resolve())}ws(e,t){if(tg(t))return er.resolve(null);let r=tv(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=tv(t=t_(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=tL(...n);return this.ys.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.vs(t,n);return this.Cs(t,s,i,r.readTime)?this.ws(e,t_(t,null,"F")):this.Fs(e,s,t,r)}))})))}bs(e,t,r,n){return tg(t)||n.isEqual(Q.min())?er.resolve(null):this.ys.getDocuments(e,r).next(i=>{let s=this.vs(t,i);return this.Cs(t,s,r,n)?er.resolve(null):(w()<=u.in.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tI(t)),this.Fs(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new Z(Q.fromTimestamp(1e9===n?new K(r+1,0):new K(r,n)),X.empty(),-1)}(n,0)).next(e=>e))})}vs(e,t){let r=new ef(tS(e));return t.forEach((t,n)=>{tC(e,n)&&(r=r.add(n))}),r}Cs(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Ss(e,t,r){return w()<=u.in.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",tI(t)),this.ys.getDocumentsMatchingQuery(e,t,Z.min(),r)}Fs(e,t,r,n){return this.ys.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu="LocalStore";class nh{constructor(e,t,r,n){this.persistence=e,this.Ms=t,this.serializer=n,this.xs=new eh(q),this.Os=new tN(e=>th(e),tc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r2(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}async function nc(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=tL();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({ks:e,removedBatchIds:i,addedBatchIds:s}))})})}function nd(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}async function nf(e,t,r){let n=e.xs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!en(e))throw e;_(nu,`Failed to update sequence numbers for target ${t}: ${e}`)}e.xs=e.xs.remove(t),e.Os.delete(n.target)}function nm(e,t,r){let n=Q.min(),i=tL();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Os.get(r);return void 0!==n?er.resolve(e.xs.get(n)):e.Ti.getTargetData(t,r)})(e,s,tv(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Ti.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ms.getDocumentsMatchingQuery(s,t,r?n:Q.min(),r?i:tL())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ns.get(n)||Q.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ns.set(n,s),{documents:r,$s:i}}))}class ng{constructor(){this.activeTargetIds=tM}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class np{constructor(){this.xo=new ng,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ng,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nv="ConnectivityMonitor";class nw{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){for(let e of(_(nv,"Network connectivity changed: AVAILABLE"),this.Qo))e(0)}qo(){for(let e of(_(nv,"Network connectivity changed: UNAVAILABLE"),this.Qo))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n_=null;function nE(){return null===n_?n_=268435456+Math.round(2147483648*Math.random()):n_++,"0x"+n_.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nT="RestConnection",nI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${n}`,this.Go=this.databaseId.database===eD?`project_id=${r}`:`project_id=${r}&database_id=${n}`}zo(e,t,r,n,i){let s=nE(),a=this.jo(e,t.toUriEncodedString());_(nT,`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(o,n,i);let{host:l}=new URL(a),u=(0,h.Xx)(l);return this.Jo(e,a,o,r,u).then(t=>(_(nT,`Received RPC '${e}' ${s}: `,t),t),t=>{throw T(nT,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Yo(e,t,r,n,i,s){return this.zo(e,t,r,n,i)}Ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}jo(e,t){let r=nI[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nN="WebChannelConnection";class nA extends nC{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,i){let s=nE();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();_(nN,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:_(nN,`RPC '${e}' ${s} timed out`),a(new b(A.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let r=o.getStatus();if(_(nN,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(t)>=0?t:A.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(A.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(A.UNAVAILABLE,"Connection failed."));break;default:C(9055,{h_:e,streamId:s,P_:o.getLastErrorCode(),T_:o.getLastError()})}}finally{_(nN,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);_(nN,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}I_(e,t,r){let i=nE(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=s.join("");_(nN,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=a.createWebChannel(h,l);this.E_(c);let f=!1,m=!1,g=new nS({Zo:t=>{m?_(nN,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(_(nN,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),_(nN,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Xo:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{m||(_(nN,`RPC '${e}' stream ${i} transport opened.`),g.__())}),p(c,d.ii.EventType.CLOSE,()=>{m||(m=!0,_(nN,`RPC '${e}' stream ${i} transport closed`),g.u_(),this.d_(c))}),p(c,d.ii.EventType.ERROR,t=>{m||(m=!0,T(nN,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),g.u_(new b(A.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var r;if(!m){let s=t.data[0];N(!!s,16349);let a=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){_(nN,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return rs(t)}(t),s=a.message;void 0===r&&(r=A.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.u_(new b(r,s)),c.close()}else _(nN,`RPC '${e}' stream ${i} received:`,s),g.c_(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?_(nN,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&_(nN,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.a_()},0),g}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function nb(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(e){return new rI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,r=1e3,n=1.5,i=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=n,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();let t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),n=Math.max(0,t-r);n>0&&_("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,n,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){null!==this.f_&&(this.f_.skipDelay(),this.f_=null)}cancel(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nx="PersistentStream";class nR{constructor(e,t,r,n,i,s,a,o){this.xi=e,this.S_=r,this.D_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new nD(e,t)}O_(){return 1===this.state||5===this.state||this.N_()}N_(){return 2===this.state||3===this.state}start(){this.M_=0,4!==this.state?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&null===this.C_&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,4!==e?this.x_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(E(t.toString()),E("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===A.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;let e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.v_===t&&this.z_(e,r)},t=>{e(()=>{let e=new b(A.UNKNOWN,"Fetching auth token failed: "+t.message);return this.j_(e)})})}z_(e,t){let r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(e=>{r(()=>this.j_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.M_?this.J_(e):this.onNext(e))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return _(nx,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(_(nx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nV extends nR{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:C(39313,{state:n}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(N(void 0===i||"string"==typeof i,58123),ey.fromBase64String(i||"")):(N(void 0===i||i instanceof f||i instanceof Uint8Array,16193),ey.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new rg(s,a,o,l&&new b(void 0===l.code?A.UNKNOWN:rs(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=rR(e,n.document.name),s=rA(n.document.updateTime),a=n.document.createTime?rA(n.document.createTime):Q.min(),o=new eZ({mapValue:{fields:n.document.fields}}),l=e0.newFoundDocument(i,s,a,o);r=new rf(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=rR(e,n.document),s=n.readTime?rA(n.readTime):Q.min(),a=e0.newNoDocument(i,s);r=new rf([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=rR(e,n.document);r=new rf([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C(11601,{Vt:t});{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new rn(n,i);r=new rm(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return Q.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?Q.min():t.readTime?rA(t.readTime):Q.min()}(e);return this.listener.Y_(t,r)}Z_(e){let t={};t.database=rL(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=td(n)?{documents:{documents:[rV(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=rV(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e5?function(e){if("=="===e.op){if(eH(e.value))return{unaryFilter:{field:rP(e.field),op:"IS_NAN"}};if(ej(e.value))return{unaryFilter:{field:rP(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eH(e.value))return{unaryFilter:{field:rP(e.field),op:"IS_NOT_NAN"}};if(ej(e.value))return{unaryFilter:{field:rP(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rP(e.field),op:rE[e.op],value:e.value}}}(t):t instanceof e6?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:rT[t.op],filters:r}}}(t):C(54877,{filter:t})}(e6.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:rP(e.field),direction:r_[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=rC(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{gt:s,parent:i}}(e,n).gt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=rN(e,t.resumeToken);let n=rC(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(Q.min())>0){r.readTime=rS(e,t.snapshotVersion.toTimestamp());let n=rC(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C(28987,{purpose:e})}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){let t={};t.database=rL(this.serializer),t.removeTarget=e,this.Q_(t)}}class nL extends nR{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return N(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,N(!e.writeResults||0===e.writeResults.length,55816),this.listener.na()}onNext(e){var t,r;N(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(N(void 0!==r,14353),t.map(e=>{let t;return(t=e.updateTime?rA(e.updateTime):rA(r)).isEqual(Q.min())&&(t=rA(r)),new tY(t,e.transformResults||[])})):[]),i=rA(e.commitTime);return this.listener.ra(i,n)}ia(){let e={};e.database=rL(this.serializer),this.Q_(e)}ta(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rF(this.serializer,e))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{}class nO extends nM{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.sa=!1}oa(){if(this.sa)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,n){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.zo(e,rk(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(A.UNKNOWN,e.toString())})}Yo(e,t,r,n,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Yo(e,rk(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(A.UNKNOWN,e.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class nF{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){0===this._a&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){"Online"===this.state?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,"Online"===e&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(E(t),this.ua=!1):_("OnlineStateTracker",t)}Ta(){null!==this.aa&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nP="RemoteStore";class nU{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(e=>{r.enqueueAndForget(async()=>{nH(this)&&(_(nP,"Restarting streams for network reachability change."),await async function(e){e.da.add(4),await nB(e),e.Va.set("Unknown"),e.da.delete(4),await nq(e)}(this))})}),this.Va=new nF(r,n)}}async function nq(e){if(nH(e))for(let t of e.Aa)await t(!0)}async function nB(e){for(let t of e.Aa)await t(!1)}function nz(e,t){e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),nj(e)?nG(e):ie(e).N_()&&nK(e,t))}function n$(e,t){let r=ie(e);e.Ea.delete(t),r.N_()&&nQ(e,t),0===e.Ea.size&&(r.N_()?r.k_():nH(e)&&e.Va.set("Unknown"))}function nK(e,t){if(e.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}ie(e).Z_(t)}function nQ(e,t){e.ma.Ke(t),ie(e).X_(t)}function nG(e){e.ma=new ry({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Ea.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),ie(e).start(),e.Va.ca()}function nj(e){return nH(e)&&!ie(e).O_()&&e.Ea.size>0}function nH(e){return 0===e.da.size}async function nW(e){e.Va.set("Online")}async function nY(e){e.Ea.forEach((t,r)=>{nK(e,t)})}async function nX(e,t){e.ma=void 0,nj(e)?(e.Va.Pa(t),nG(e)):e.Va.set("Unknown")}async function nJ(e,t,r){if(e.Va.set("Online"),t instanceof rg&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Ea.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Ea.delete(n),e.ma.removeTarget(n))}(e,t)}catch(r){_(nP,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await nZ(e,r)}else if(t instanceof rf?e.ma.Xe(t):t instanceof rm?e.ma.ot(t):e.ma.nt(t),!r.isEqual(Q.min()))try{let t=await nd(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.ma.It(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.Ea.get(n);i&&e.Ea.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.Ea.get(t);if(!n)return;e.Ea.set(t,n.withResumeToken(ey.EMPTY_BYTE_STRING,n.snapshotVersion)),nQ(e,t);let i=new rB(n.target,t,r,n.sequenceNumber);nK(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){_(nP,"Failed to raise snapshot:",t),await nZ(e,t)}}async function nZ(e,t,r){if(!en(t))throw t;e.da.add(1),await nB(e),e.Va.set("Offline"),r||(r=()=>nd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_(nP,"Retrying IndexedDB access"),await r(),e.da.delete(1),await nq(e)})}function n0(e,t){return t().catch(r=>nZ(e,r,t))}async function n1(e){let t=it(e),r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:-1;for(;nH(e)&&e.Ia.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.Ia.length&&t.k_();break}r=n.batchId,function(e,t){e.Ia.push(t);let r=it(e);r.N_()&&r.ea&&r.ta(t.mutations)}(e,n)}catch(t){await nZ(e,t)}n2(e)&&n3(e)}function n2(e){return nH(e)&&!it(e).O_()&&e.Ia.length>0}function n3(e){it(e).start()}async function n4(e){it(e).ia()}async function n9(e){let t=it(e);for(let r of e.Ia)t.ta(r.mutations)}async function n5(e,t,r){let n=e.Ia.shift(),i=rt.from(n,t,r);await n0(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await n1(e)}async function n6(e,t){t&&it(e).ea&&await async function(e,t){var r;if(ri(r=t.code)&&r!==A.ABORTED){let r=e.Ia.shift();it(e).L_(),await n0(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await n1(e)}}(e,t),n2(e)&&n3(e)}async function n8(e,t){e.asyncQueue.verifyOperationInProgress(),_(nP,"RemoteStore received new credentials");let r=nH(e);e.da.add(3),await nB(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await nq(e)}async function n7(e,t){t?(e.da.delete(2),await nq(e)):t||(e.da.add(2),await nB(e),e.Va.set("Unknown"))}function ie(e){var t,r,n;return e.fa||(e.fa=(t=e.datastore,r=e.asyncQueue,n={e_:nW.bind(null,e),n_:nY.bind(null,e),i_:nX.bind(null,e),Y_:nJ.bind(null,e)},t.oa(),new nV(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.Aa.push(async t=>{t?(e.fa.L_(),nj(e)?nG(e):e.Va.set("Unknown")):(await e.fa.stop(),e.ma=void 0)})),e.fa}function it(e){var t,r,n;return e.ga||(e.ga=(t=e.datastore,r=e.asyncQueue,n={e_:()=>Promise.resolve(),n_:n4.bind(null,e),i_:n6.bind(null,e),na:n9.bind(null,e),ra:n5.bind(null,e)},t.oa(),new nL(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.Aa.push(async t=>{t?(e.ga.L_(),await n1(e)):(await e.ga.stop(),e.Ia.length>0&&(_(nP,`Stopping write stream with ${e.Ia.length} pending writes`),e.Ia=[]))})),e.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new ir(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ii(e,t){if(E("AsyncQueue",`${t}: ${e}`),en(e))return new b(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{static emptySet(e){return new is(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=tk(),this.sortedSet=new eh(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.pa=new eh(X.comparator)}track(e){let t=e.doc.key,r=this.pa.get(t);r?0!==e.type&&3===r.type?this.pa=this.pa.insert(t,e):3===e.type&&1!==r.type?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.pa=this.pa.remove(t):1===e.type&&2===r.type?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):C(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){let e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class io{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new io(e,t,is.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tE(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class iu{constructor(){this.queries=ih(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=ih(),r.forEach((e,r)=>{for(let e of r.Sa)e.onError(t)})}(this,new b(A.ABORTED,"Firestore shutting down"))}}function ih(){return new tN(e=>tT(e),tE)}async function ic(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Da()&&t.va()&&(r=2):(i=new il,r=t.va()?0:1);try{switch(r){case 0:i.ba=await e.onListen(n,!0);break;case 1:i.ba=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=ii(r,`Initialization of query '${tI(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.Sa.push(t),t.Fa(e.onlineState),i.ba&&t.Ma(i.ba)&&ip(e)}async function id(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.Sa.indexOf(t);e>=0&&(i.Sa.splice(e,1),0===i.Sa.length?n=t.va()?0:1:!i.Da()&&t.va()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function im(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.Sa)e.Ma(n)&&(r=!0);i.ba=n}}r&&ip(e)}function ig(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.Sa)e.onError(r);e.queries.delete(t)}function ip(e){e.Ca.forEach(e=>{e.next()})}(a=s||(s={})).xa="default",a.Cache="cache";class iy{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new io(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){return!(e.fromCache&&this.va())||(!this.options.Qa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}La(e){if(e.docChanges.length>0)return!0;let t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.key=e}}class iw{constructor(e){this.key=e}}class i_{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=tL(),this.mutatedKeys=tL(),this.Za=tS(e),this.Xa=new is(this.Za)}get eu(){return this.Ha}tu(e,t){let r=t?t.nu:new ia,n=t?t.Xa:this.Xa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=tC(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.ru(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.Za(h,o)>0||l&&0>this.Za(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{Xa:s,nu:r,Cs:a,mutatedKeys:i}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;let s=e.nu.wa();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C(20277,{Vt:e})}};return r(e)-r(t)})(e.type,t.type)||this.Za(e.doc,t.doc)),this.iu(r),n=null!=n&&n;let a=t&&!n?this.su():[],o=0===this.Ya.size&&this.current&&!n?1:0,l=o!==this.Ja;return(this.Ja=o,0!==s.length||l)?{snapshot:new io(this.query,e.Xa,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ia,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}su(){if(!this.current)return[];let e=this.Ya;this.Ya=tL(),this.Xa.forEach(e=>{this._u(e.key)&&(this.Ya=this.Ya.add(e.key))});let t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new iw(e))}),this.Ya.forEach(r=>{e.has(r)||t.push(new iv(r))}),t}au(e){this.Ha=e.$s,this.Ya=tL();let t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return io.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,0===this.Ja,this.hasCachedResults)}}let iE="SyncEngine";class iT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class iI{constructor(e){this.key=e,this.cu=!1}}class iC{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.lu={},this.hu=new tN(e=>tT(e),tE),this.Pu=new Map,this.Tu=new Set,this.Iu=new eh(X.comparator),this.Eu=new Map,this.du=new r5,this.Au={},this.Ru=new Map,this.Vu=rH.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return!0===this.mu}}async function iS(e,t,r=!0){let n;let i=iG(e),s=i.hu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.uu()):n=await iA(i,t,r,!0),n}async function iN(e,t){let r=iG(e);await iA(r,t,!0,!1)}async function iA(e,t,r,n){var i,s;let a;let o=await (i=e.localStore,s=tv(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Ti.getTargetData(e,s).next(r=>r?(t=r,er.resolve(t)):i.Ti.allocateTargetId(e).next(r=>(t=new rB(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Ti.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.xs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.xs=i.xs.insert(e.targetId,e),i.Os.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(a=await ib(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&r&&nz(e.remoteStore,o),a}async function ib(e,t,r,n,i){e.fu=(t,r,n)=>(async function(e,t,r,n){let i=t.view.tu(r);i.Cs&&(i=await nm(e.localStore,t.query,!1).then(({documents:e})=>t.view.tu(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return iB(e,t.targetId,o.ou),o.snapshot})(e,t,r,n);let s=await nm(e.localStore,t,!0),a=new i_(t,s.$s),o=a.tu(s.documents),l=rd.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);iB(e,r,u.ou);let h=new iT(t,r,a);return e.hu.set(t,h),e.Pu.has(r)?e.Pu.get(r).push(t):e.Pu.set(r,[t]),u.snapshot}async function ik(e,t,r){let n=e.hu.get(t),i=e.Pu.get(n.targetId);if(i.length>1)return e.Pu.set(n.targetId,i.filter(e=>!tE(e,t))),void e.hu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nf(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&n$(e.remoteStore,n.targetId),iU(e,n.targetId)}).catch(et)):(iU(e,n.targetId),await nf(e.localStore,n.targetId,!0))}async function iD(e,t){let r=e.hu.get(t),n=e.Pu.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),n$(e.remoteStore,r.targetId))}async function ix(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iO.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=K.now(),s=t.reduce((e,t)=>e.add(t.key),tL());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tA,l=tL();return e.Bs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=tq(n.transform,e||null);null!=i&&(null===r&&(r=eZ.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new t4(e.key,t,function e(t){let r=[];return el(t.fields,(t,n)=>{let i=new Y([t]);if(eW(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new eg(r)}(t.value.mapValue),tX.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:tD(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Au[i.currentUser.toKey()])||(e=new eh(q)),e=e.insert(n,r),i.Au[i.currentUser.toKey()]=e,await i$(i,s.changes),await n1(i.remoteStore)}catch(t){let e=ii(t,"Failed to persist write");r.reject(e)}}async function iR(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Bs.newChangeBuffer({trackRemovals:!0});n=e.xs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.Ti.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Ti.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(ey.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Ti.updateTargetData(i,h))});let h=tA,c=tL();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=tL(),o=tL(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tA;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(Q.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):_(nu,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{qs:t,Qs:o}})).next(e=>{h=e.qs,c=e.Qs})),!r.isEqual(Q.min())){let t=e.Ti.getLastRemoteSnapshotVersion(i).next(t=>e.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return er.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.xs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Eu.get(r);n&&(N(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?n.cu=!0:t.modifiedDocuments.size>0?N(n.cu,14607):t.removedDocuments.size>0&&(N(n.cu,42227),n.cu=!1))}),await i$(e,r,t)}catch(e){await et(e)}}function iV(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.hu.forEach((e,r)=>{let n=r.view.Fa(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.Sa)e.Fa(t)&&(r=!0)}),r&&ip(n),i.length&&e.lu.Y_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function iL(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Eu.get(t),i=n&&n.key;if(i){let r=new eh(X.comparator);r=r.insert(i,e0.newNoDocument(i,Q.min()));let n=tL().add(i),s=new rc(Q.min(),new Map,new eh(q),r,n);await iR(e,s),e.Iu=e.Iu.remove(i),e.Eu.delete(t),iz(e)}else await nf(e.localStore,t,!1).then(()=>iU(e,t,r)).catch(et)}async function iM(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Bs.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=er.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);N(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tL();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});iP(e,n,null),iF(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await i$(e,i)}catch(e){await et(e)}}async function iO(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(N(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});iP(e,t,r),iF(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await i$(e,i)}catch(e){await et(e)}}function iF(e,t){(e.Ru.get(t)||[]).forEach(e=>{e.resolve()}),e.Ru.delete(t)}function iP(e,t,r){let n=e.Au[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Au[e.currentUser.toKey()]=n}}function iU(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Pu.get(t)))e.hu.delete(n),r&&e.lu.gu(n,r);e.Pu.delete(t),e.isPrimaryClient&&e.du.Hr(t).forEach(t=>{e.du.containsKey(t)||iq(e,t)})}function iq(e,t){e.Tu.delete(t.path.canonicalString());let r=e.Iu.get(t);null!==r&&(n$(e.remoteStore,r),e.Iu=e.Iu.remove(t),e.Eu.delete(r),iz(e))}function iB(e,t,r){for(let n of r)n instanceof iv?(e.du.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Iu.get(r)||e.Tu.has(n)||(_(iE,"New document in limbo: "+r),e.Tu.add(n),iz(e))}(e,n)):n instanceof iw?(_(iE,"Document no longer in limbo: "+n.key),e.du.removeReference(n.key,t),e.du.containsKey(n.key)||iq(e,n.key)):C(19791,{pu:n})}function iz(e){for(;e.Tu.size>0&&e.Iu.size<e.maxConcurrentLimboResolutions;){let t=e.Tu.values().next().value;e.Tu.delete(t);let r=new X(H.fromString(t)),n=e.Vu.next();e.Eu.set(n,new iI(r)),e.Iu=e.Iu.insert(r,n),nz(e.remoteStore,new rB(tv(tm(r.path)),n,"TargetPurposeLimboResolution",ei.le))}}async function i$(e,t,r){let n=[],i=[],s=[];e.hu.isEmpty()||(e.hu.forEach((a,o)=>{s.push(e.fu(o,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=na.Rs(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.lu.Y_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>er.forEach(t,t=>er.forEach(t.ds,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>er.forEach(t.As,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!en(e))throw e;_(nu,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.xs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.xs=e.xs.insert(t,i)}}}(e.localStore,i))}async function iK(e,t){var r;if(!e.currentUser.isEqual(t)){_(iE,"User change. New user:",t.toKey());let n=await nc(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ru.forEach(e=>{e.forEach(e=>{e.reject(new b(A.CANCELLED,r))})}),e.Ru.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await i$(e,n.ks)}}function iQ(e,t){let r=e.Eu.get(t);if(r&&r.cu)return tL().add(r.key);{let r=tL(),n=e.Pu.get(t);if(!n)return r;for(let t of n){let n=e.hu.get(t);r=r.unionWith(n.view.eu)}return r}}function iG(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iQ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iL.bind(null,e),e.lu.Y_=im.bind(null,e.eventManager),e.lu.gu=ig.bind(null,e.eventManager),e}class ij{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nk(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){var t;return t=this.persistence,new nh(t,new nl,e.initialUser,this.serializer)}Su(e){return new nr(ni.fi,this.serializer)}bu(e){return new np}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ij.provider={build:()=>new ij};class iH extends ij{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){return N(this.persistence.referenceDelegate instanceof ns,46915),new rJ(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Su(e){let t=void 0!==this.cacheSizeBytes?rj.withCacheSize(this.cacheSizeBytes):rj.DEFAULT;return new nr(e=>ns.fi(e,t),this.serializer)}}class iW{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iV(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iK.bind(null,this.syncEngine),await n7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iu}createDatastore(e){let t=nk(e.databaseInfo.databaseId),r=new nA(e.databaseInfo);return new nO(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new nU(t,this.datastore,e.asyncQueue,e=>iV(this.syncEngine,e,0),nw.C()?new nw:new ny)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new iC(e,t,r,n,i,s);return a&&(o.mu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){_(nP,"RemoteStore shutting down."),e.da.add(5),await nB(e),e.Ra.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iW.provider={build:()=>new iW};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):E("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new b(A.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let r={documents:t.map(t=>rx(e.serializer,t))},n=await e.Yo("BatchGetDocuments",e.serializer.databaseId,H.emptyPath(),r,t.length),i=new Map;n.forEach(t=>{var r;let n=(r=e.serializer,"found"in t?function(e,t){N(!!t.found,43571),t.found.name,t.found.updateTime;let r=rR(e,t.found.name),n=rA(t.found.updateTime),i=t.found.createTime?rA(t.found.createTime):Q.min(),s=new eZ({mapValue:{fields:t.found.fields}});return e0.newFoundDocument(r,n,i,s)}(r,t):"missing"in t?function(e,t){N(!!t.missing,3894),N(!!t.readTime,22933);let r=rR(e,t.missing),n=rA(t.readTime);return e0.newNoDocument(r,n)}(r,t):C(7234,{result:t}));i.set(n.key.toString(),n)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());N(!!t,55234,{key:e}),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new t8(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let r=X.fromPath(t);this.mutations.push(new t7(r,this.precondition(r)))}),await async function(e,t){let r={writes:t.map(t=>rF(e.serializer,t))};await e.zo("Commit",e.serializer.databaseId,H.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw C(50498,{Uu:e.constructor.name});t=Q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new b(A.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?tX.exists(!1):tX.updateTime(t):tX.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new b(A.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tX.updateTime(t)}return tX.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t,r,n,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=n,this.deferred=i,this.Ku=r.maxAttempts,this.x_=new nD(this.asyncQueue,"transaction_retry")}Wu(){this.Ku-=1,this.Gu()}Gu(){this.x_.y_(async()=>{let e=new iX(this.datastore),t=this.zu(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.ju(e)}))}).catch(e=>{this.ju(e)})})}zu(e){try{let t=this.updateFunction(e);return!es(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ju(e){this.Ku>0&&this.Hu(e)?(this.Ku-=1,this.asyncQueue.enqueueAndForget(()=>(this.Gu(),Promise.resolve()))):this.deferred.reject(e)}Hu(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!ri(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iZ="FirestoreClient";class i0{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=p.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{_(iZ,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(_(iZ,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=ii(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function i1(e,t){e.asyncQueue.verifyOperationInProgress(),_(iZ,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await nc(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function i2(e,t){e.asyncQueue.verifyOperationInProgress();let r=await i3(e);_(iZ,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>n8(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>n8(t.remoteStore,r)),e._onlineComponents=t}async function i3(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){_(iZ,"Using user provided OfflineComponentProvider");try{await i1(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;T("Error using user provided cache. Falling back to memory cache: "+t),await i1(e,new ij)}}else _(iZ,"Using default OfflineComponentProvider"),await i1(e,new iH(void 0))}return e._offlineComponents}async function i4(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_(iZ,"Using user provided OnlineComponentProvider"),await i2(e,e._uninitializedComponentsProvider._online)):(_(iZ,"Using default OnlineComponentProvider"),await i2(e,new iW))),e._onlineComponents}async function i9(e){let t=await i4(e),r=t.eventManager;return r.onListen=iS.bind(null,t.syncEngine),r.onUnlisten=ik.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=iN.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=iD.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i5(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i6=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i8(e,t,r){if(!r)throw new b(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function i7(e){if(!X.isDocumentKey(e))throw new b(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function se(e){if(X.isDocumentKey(e))throw new b(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function st(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":C(12329,{type:typeof e})}function sr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=st(e);throw new b(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn="firestore.googleapis.com";class si{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new b(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sn,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new b(A.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i5(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ss{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new si({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new si(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new M(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=i6.get(e);t&&(_("ComponentProvider","Removing Datastore"),i6.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class so{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new so(this.firestore,e,this._key)}}class sl extends sa{constructor(e,t,r){super(e,t,tm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new so(this.firestore,null,new X(e))}withConverter(e){return new sl(this.firestore,e,this._path)}}function su(e,t,...r){if(e=(0,h.m9)(e),i8("collection","path",t),e instanceof ss){let n=H.fromString(t,...r);return se(n),new sl(e,null,n)}{if(!(e instanceof so||e instanceof sl))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(H.fromString(t,...r));return se(n),new sl(e.firestore,null,n)}}function sh(e,t,...r){if(e=(0,h.m9)(e),1==arguments.length&&(t=U.newId()),i8("doc","path",t),e instanceof ss){let n=H.fromString(t,...r);return i7(n),new so(e,null,new X(n))}{if(!(e instanceof so||e instanceof sl))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(H.fromString(t,...r));return i7(n),new so(e.firestore,e instanceof sl?e.converter:null,new X(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc="AsyncQueue";class sd{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new nD(this,"async_queue_retry"),this.rc=()=>{let e=nb();e&&_(sc,"Visibility state changed to "+e.visibilityState),this.x_.b_()},this.sc=e;let t=nb();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;let t=nb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});let t=new k;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(0!==this.Ju.length){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!en(e))throw e;_(sc,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){let t=this.sc.then(()=>(this.ec=!0,e().catch(e=>{throw this.Xu=e,this.ec=!1,E("INTERNAL UNHANDLED ERROR: ",sf(e)),e}).then(e=>(this.ec=!1,e))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);let n=ir.createAndSchedule(this,e,t,r,e=>this.uc(e));return this.Zu.push(n),n}oc(){this.Xu&&C(47125,{cc:sf(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(let t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{for(let t of(this.Zu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Zu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){let t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function sf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class sg extends ss{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new sd,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sd(e),this._firestoreClient=void 0,await e}}}function sp(e,t){let r="object"==typeof e?e:(0,o.Mq)(),n=(0,o.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eD});if(!n._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,r,n={}){var i;e=sr(e,ss);let s=(0,h.Xx)(t),a=e._getSettings(),o=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${r}`;s&&((0,h.Uo)(`https://${l}`),(0,h.dp)("Firestore",!0)),a.host!==sn&&a.host!==l&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:n});if(!(0,h.vZ)(u,o)&&(e._setSettings(u),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=p.MOCK_USER;else{t=(0,h.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new b(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new p(s)}e._authCredentials=new R(new D(t,r))}}(n,...e)}return n}function sy(e){if(e._terminated)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ek(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,i5(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new i0(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sv(ey.fromBase64String(e))}catch(e){throw new b(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sv(ey.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sI=/^__.*__$/;class sC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new t4(e,this.data,this.fieldMask,t,this.fieldTransforms):new t3(e,this.data,t,this.fieldTransforms)}}class sS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new t4(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{Ic:e})}}class sA{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new sA(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Vc(e),n}mc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Ec(),n}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return sK(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(0===e.length)throw this.gc("Document fields must not be empty");if(sN(this.Ic)&&sI.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class sb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||nk(e)}bc(e,t,r,n=!1){return new sA({Ic:e,methodName:t,wc:r,path:Y.emptyPath(),Rc:!1,yc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sk(e){let t=e._freezeSettings(),r=nk(e._databaseId);return new sb(e._databaseId,!!t.ignoreUndefinedProperties,r)}function sD(e,t,r,n,i,s={}){let a,o;let l=e.bc(s.merge||s.mergeFields?2:0,t,r,i);sq("Data must be an object, but it was:",l,n);let u=sP(n,l);if(s.merge)a=new eg(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=sB(t,n,r);if(!l.contains(i))throw new b(A.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sQ(e,i)||e.push(i)}a=new eg(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sC(new eZ(u),a,o)}class sx extends s_{_toFieldTransform(e){if(2!==e.Ic)throw 1===e.Ic?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sx}}class sR extends s_{_toFieldTransform(e){return new tW(e.path,new tB)}isEqual(e){return e instanceof sR}}class sV extends s_{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){let t=new sA({Ic:3,wc:e.settings.wc,methodName:this._methodName,Rc:!0},e.databaseId,e.serializer,e.ignoreUndefinedProperties),r=new tz(this.Sc.map(e=>sF(e,t)));return new tW(e.path,r)}isEqual(e){return e instanceof sV&&(0,h.vZ)(this.Sc,e.Sc)}}class sL extends s_{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){let t=new tG(e.serializer,tP(e.serializer,this.Dc));return new tW(e.path,t)}isEqual(e){return e instanceof sL&&this.Dc===e.Dc}}function sM(e,t,r,n){let i=e.bc(1,t,r);sq("Data must be an object, but it was:",i,n);let s=[],a=eZ.empty();return el(n,(e,n)=>{let o=s$(t,e,r);n=(0,h.m9)(n);let l=i.mc(o);if(n instanceof sx)s.push(o);else{let e=sF(n,l);null!=e&&(s.push(o),a.set(o,e))}}),new sS(a,new eg(s),i.fieldTransforms)}function sO(e,t,r,n,i,s){let a=e.bc(1,t,r),o=[sB(t,n,r)],l=[i];if(s.length%2!=0)throw new b(A.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(sB(t,s[e])),l.push(s[e+1]);let u=[],c=eZ.empty();for(let e=o.length-1;e>=0;--e)if(!sQ(u,o[e])){let t=o[e],r=l[e];r=(0,h.m9)(r);let n=a.mc(t);if(r instanceof sx)u.push(t);else{let e=sF(r,n);null!=e&&(u.push(t),c.set(t,e))}}return new sS(c,new eg(u),a.fieldTransforms)}function sF(e,t){if(sU(e=(0,h.m9)(e)))return sq("Unsupported field value:",t,e),sP(e,t);if(e instanceof s_)return function(e,t){if(!sN(t.Ic))throw t.gc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gc(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Rc&&4!==t.Ic)throw t.gc("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=sF(i,t.fc(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tP(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=K.fromDate(e);return{timestampValue:rS(t.serializer,r)}}if(e instanceof K){let r=new K(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rS(t.serializer,r)}}if(e instanceof sE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sv)return{bytesValue:rN(t.serializer,e._byteString)};if(e instanceof so){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.gc(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:rb(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sT)return{mapValue:{fields:{[eR]:{stringValue:eM},[eO]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.gc("VectorValues must only contain numeric values.");return tO(t.serializer,e)})}}}}};throw t.gc(`Unsupported field value: ${st(e)}`)}(e,t)}function sP(e,t){let r={};return eu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):el(e,(e,n)=>{let i=sF(n,t.Ac(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function sU(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof K||e instanceof sE||e instanceof sv||e instanceof so||e instanceof s_||e instanceof sT)}function sq(e,t,r){if(!sU(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=st(r);throw"an object"===n?t.gc(e+" a custom object"):t.gc(e+" "+n)}}function sB(e,t,r){if((t=(0,h.m9)(t))instanceof sw)return t._internalPath;if("string"==typeof t)return s$(e,t);throw sK("Field path arguments must be of type string or ",e,!1,void 0,r)}let sz=RegExp("[~\\*/\\[\\]]");function s$(e,t,r){if(t.search(sz)>=0)throw sK(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new sw(...t.split("."))._internalPath}catch(n){throw sK(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function sK(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new b(A.INVALID_ARGUMENT,o+e+l)}function sQ(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new so(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sH("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sj extends sG{data(){return super.data()}}function sH(e,t){return"string"==typeof t?s$(e,t):t instanceof sw?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sW(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new b(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sY{}class sX extends sY{}function sJ(e,t,...r){let n=[];for(let i of(t instanceof sY&&n.push(t),function(e){let t=e.filter(e=>e instanceof s1).length,r=e.filter(e=>e instanceof sZ).length;if(t>1||t>0&&r>0)throw new b(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class sZ extends sX{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sZ(e,t,r)}_apply(e){let t=this._parse(e);return s8(e._query,t),new sa(e.firestore,e.converter,tw(e._query,t))}_parse(e){let t=sk(e.firestore);return function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new b(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){s6(a,s);let t=[];for(let r of a)t.push(s5(n,e,r));o={arrayValue:{values:t}}}else o=s5(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||s6(a,s),o=function(e,t,r,n=!1){return sF(r,e.bc(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return e5.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function s0(e,t,r){let n=sH("where",e);return sZ._create(n,t,r)}class s1 extends sY{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new s1(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e6.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())s8(r,e),r=tw(r,e)}(e._query,t),new sa(e.firestore,e.converter,tw(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class s2 extends sX{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new s2(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new e4(t,r)}(e._query,this._field,this._direction);return new sa(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new tf(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function s3(e,t="asc"){let r=sH("orderBy",e);return s2._create(r,t)}class s4 extends sX{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new s4(e,t,r)}_apply(e){return new sa(e.firestore,e.converter,t_(e._query,this._limit,this._limitType))}}function s9(e){return function(e,t){if(t<=0)throw new b(A.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),s4._create("limit",e,"F")}function s5(e,t,r){if("string"==typeof(r=(0,h.m9)(r))){if(""===r)throw new b(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tp(t)&&-1!==r.indexOf("/"))throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(H.fromString(r));if(!X.isDocumentKey(n))throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eK(e,new X(n))}if(r instanceof so)return eK(e,r._key);throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${st(r)}.`)}function s6(e,t){if(!Array.isArray(e)||0===e.length)throw new b(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function s8(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class s7{convertValue(e,t="none"){switch(eF(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e_(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eE(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return el(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new sT(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[eO].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>e_(e.doubleValue)))}convertGeoPoint(e){return new sE(e_(e.latitude),e_(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eA(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eb(e));default:return null}}convertTimestamp(e){let t=ew(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=H.fromString(e);N(rq(r),9688,{name:e});let n=new ex(r.get(1),r.get(3)),i=new X(r.popFirst(5));return n.isEqual(t)||E(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}class at extends s7{constructor(e){super(),this.firestore=e}convertBytes(e){return new sv(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new so(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class an extends sG{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sH("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ai extends an{data(e={}){return super.data(e)}}class as{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new ar(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ai(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new ai(e._firestore,e._userDataWriter,r.doc.key,r.doc,new ar(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new ai(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ar(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C(61501,{type:e})}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){e=sr(e,so);let t=sr(e.firestore,sg);return(function(e,t,r={}){let n=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new iY({next:o=>{s.xu(),t.enqueueAndForget(()=>id(e,a));let l=o.docs.has(r);!l&&o.fromCache?i.reject(new b(A.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&n&&"server"===n.source?i.reject(new b(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new iy(tm(r.path),s,{includeMetadataChanges:!0,Qa:!0});return ic(e,a)})(await i9(e),e.asyncQueue,t,r,n)),n.promise})(sy(t),e._key).then(r=>af(t,e,r))}class ao extends s7{constructor(e){super(),this.firestore=e}convertBytes(e){return new sv(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new so(this.firestore,null,t)}}function al(e){e=sr(e,sa);let t=sr(e.firestore,sg),r=sy(t),n=new ao(t);return sW(e._query),(function(e,t,r={}){let n=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new iY({next:r=>{s.xu(),t.enqueueAndForget(()=>id(e,a)),r.fromCache&&"server"===n.source?i.reject(new b(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new iy(r,s,{includeMetadataChanges:!0,Qa:!0});return ic(e,a)})(await i9(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new as(t,n,e,r))}function au(e,t,r){e=sr(e,so);let n=sr(e.firestore,sg),i=ae(e.converter,t,r);return ad(n,[sD(sk(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,tX.none())])}function ah(e,t,r,...n){e=sr(e,so);let i=sr(e.firestore,sg),s=sk(i);return ad(i,[("string"==typeof(t=(0,h.m9)(t))||t instanceof sw?sO(s,"updateDoc",e._key,t,r,n):sM(s,"updateDoc",e._key,t)).toMutation(e._key,tX.exists(!0))])}function ac(e,...t){var r,n,i;let s,a,o;e=(0,h.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||sm(t[u])||(l=t[u],u++);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(sm(t[u])){let e=t[u];t[u]=null===(r=e.next)||void 0===r?void 0:r.bind(e),t[u+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof so)a=sr(e.firestore,sg),o=tm(e._key.path),s={next:r=>{t[u]&&t[u](af(a,e,r))},error:t[u+1],complete:t[u+2]};else{let r=sr(e,sa);a=sr(r.firestore,sg),o=r._query;let n=new ao(a);s={next:e=>{t[u]&&t[u](new as(a,n,r,e))},error:t[u+1],complete:t[u+2]},sW(e._query)}return function(e,t,r,n){let i=new iY(n),s=new iy(t,i,r);return e.asyncQueue.enqueueAndForget(async()=>ic(await i9(e),s)),()=>{i.xu(),e.asyncQueue.enqueueAndForget(async()=>id(await i9(e),s))}}(sy(a),o,c,s)}function ad(e,t){return function(e,t){let r=new k;return e.asyncQueue.enqueueAndForget(async()=>ix(await i4(e).then(e=>e.syncEngine),t,r)),r.promise}(sy(e),t)}function af(e,t,r){let n=r.docs.get(t._key),i=new ao(e);return new an(e,i,t._key,n,new ar(r.hasPendingWrites,r.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=sk(e)}set(e,t,r){this._verifyNotCommitted();let n=ap(e,this._firestore),i=ae(n.converter,t,r),s=sD(this._dataReader,"WriteBatch.set",n._key,i,null!==n.converter,r);return this._mutations.push(s.toMutation(n._key,tX.none())),this}update(e,t,r,...n){let i;this._verifyNotCommitted();let s=ap(e,this._firestore);return i="string"==typeof(t=(0,h.m9)(t))||t instanceof sw?sO(this._dataReader,"WriteBatch.update",s._key,t,r,n):sM(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,tX.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ap(e,this._firestore);return this._mutations=this._mutations.concat(new t8(t._key,tX.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ap(e,t){if((e=(0,h.m9)(e)).firestore!==t)throw new b(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=sk(e)}get(e){let t=ap(e,this._firestore),r=new at(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return C(24041);let n=e[0];if(n.isFoundDocument())return new sG(this._firestore,r,n.key,n,t.converter);if(n.isNoDocument())return new sG(this._firestore,r,t._key,null,t.converter);throw C(18433,{doc:n})})}set(e,t,r){let n=ap(e,this._firestore),i=ae(n.converter,t,r),s=sD(this._dataReader,"Transaction.set",n._key,i,null!==n.converter,r);return this._transaction.set(n._key,s),this}update(e,t,r,...n){let i;let s=ap(e,this._firestore);return i="string"==typeof(t=(0,h.m9)(t))||t instanceof sw?sO(this._dataReader,"Transaction.update",s._key,t,r,n):sM(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=ap(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends ay{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=ap(e,this._firestore),r=new ao(this._firestore);return super.get(e).then(e=>new an(this._firestore,r,t._key,e._document,new ar(!1,!1),t.converter))}}function aw(e,t,r){e=sr(e,sg);let n=Object.assign(Object.assign({},am),r);return!function(e){if(e.maxAttempts<1)throw new b(A.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(e,t,r){let n=new k;return e.asyncQueue.enqueueAndForget(async()=>{let i=await i4(e).then(e=>e.datastore);new iJ(e.asyncQueue,i,r,t,n).Wu()}),n.promise}(sy(e),r=>t(new av(e,r)),n)}function a_(){return new sR("serverTimestamp")}function aE(...e){return new sV("arrayUnion",e)}function aT(e){return new sL("increment",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(e){return sy(e=sr(e,sg)),new ag(e,t=>ad(e,t))}new WeakMap,function(e=!0){y=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new sg(new V(t.getProvider("auth-internal")),new F(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ex(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,g,void 0),(0,o.KN)(m,g,"esm2017")}()}}]);