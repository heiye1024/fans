(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{291:function(t,e,a){"use strict";a.r(e);var s=a(37),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("You can use this API to register and log in to the account. We merged the registration and login steps, so you only need to send a request to get the JWT token.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#create-an-jwt-token"}},[t._v("Create an JWT token")])]),a("li",[a("a",{attrs:{href:"#get-the-authenticated-user"}},[t._v("Get the authenticated user")])]),a("li",[a("a",{attrs:{href:"#send-verification-code"}},[t._v("Send verification code")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"create-an-jwt-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-jwt-token","aria-hidden":"true"}},[t._v("#")]),t._v(" Create an JWT token")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST {uri}/auth/jwt\n")])])]),a("p",[t._v("Input:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("international_telephone_code")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("See👉 "),a("router-link",{attrs:{to:"./itc.html"}},[t._v("ITC")]),t._v(" codes.")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("phone")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Phone number in the "),a("router-link",{attrs:{to:"./itc.html"}},[t._v("ITC")]),t._v(" region.")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("verify_type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Fixed to "),a("code",[t._v("phone")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("verification_code")])]),t._v(" "),a("td",[a("code",[t._v("integer")])]),t._v(" "),a("td",[t._v("Verification code sent to the phone.")])])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"international_telephone_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+86"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1878****582"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"verify_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"verification_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64822")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3dlaW1lbmc0LnpoaWJvY2xvdWQuY24vYXBpL3YyL2F1dGgvbG9naW4iLCJpYXQiOjE1NTAxMTAwODUsImV4cCI6MTU1MTQwNjA4NSwibmJmIjoxNTUwMTEwMDg1LCJqdGkiOiJJaFBnZm9uVWJtTUtRM1doIiwic3ViIjoxNiwicHJ2IjoiNDhlNDUzODMxY2ViYTVlNTdhNDc1ZTY4NjQ5Y2ZkZWU2ZTk3ZDhkMiJ9.ZWd9LgZ_brOmQ92lZTuBu7dDA3CEtNIVPk_Jjx325mk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21600")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"get-the-authenticated-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-authenticated-user","aria-hidden":"true"}},[t._v("#")]),t._v(" Get the authenticated user")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET {uri}/auth/me\n")])])]),a("p",[t._v("Response with public and private profile information")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("Status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://fans.io/storage/2019/22/av.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1878****582"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"international_telephone_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+86"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-01-30T14:17:22Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extras"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        /// ...\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"send-verification-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-verification-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Send verification code")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST {uri}/auth/verify-code\n")])])]),a("p",[t._v("Input:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("international_telephone_code")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("See👉 "),a("router-link",{attrs:{to:"./itc.html"}},[t._v("ITC")]),t._v(" codes.")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("phone")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Phone number in the "),a("router-link",{attrs:{to:"./itc.html"}},[t._v("ITC")]),t._v(" region.")],1)])])]),t._v(" "),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Status: 204 No Content\n")])])])])},[],!1,null,null,null);e.default=n.exports}}]);