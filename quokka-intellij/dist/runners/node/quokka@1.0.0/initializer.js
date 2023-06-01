/*
 * Wallaby.js - v1.0.1427
 * https://wallabyjs.com
 * Copyright (c) 2014-2023 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
function patchConsoleError(){var e=global.console.error;global.console.error=function(){if(arguments.length&&Buffer.isBuffer(arguments[0])&&(arguments[0]=arguments[0].toString("utf8")),arguments.length){var t=arguments[0].toString("utf8").split("\n").filter(function(e){return e.indexOf("ExperimentalWarning:")===-1&&e.indexOf("node --trace-warnings")===-1}).join("\n");if(0===t.length)return}e.call.apply(e,__spreadArray([global.console],__read(arguments),!1))}}function startViteWorker(viteNodeHandle){return __awaiter(this,void 0,void 0,function(){function normalizeModuleId(e){return e.replace(/\\/g,"/").replace(/^\/@fs\//,"/").replace(/^file:\//,"/").replace(/^\/+/,"/")}var worker,workerResult,_this=this;return __generator(this,function(_a){switch(_a.label){case 0:return[4,viteNodeHandle.reset({filePath:quokkaSettings.filePath,content:quokkaSettings.viteFile.content})];case 1:return _a.sent(),worker=path.join(__dirname,"vite-worker.mjs"),[4,eval("import(worker)")];case 2:return workerResult=_a.sent(),[4,workerResult["default"]({root:viteNodeHandle.config.root,base:viteNodeHandle.config.base,file:quokkaSettings.filePath,viteNodeClientPath:quokkaSettings.vite.viteNodeClientPath,resolveId:function(e,t){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:return[4,viteNodeHandle.resolveId({id:e,importer:t})];case 1:return[2,i.sent()]}})})},fetchModule:function(e){return __awaiter(_this,void 0,void 0,function(){var t,i,r,n,s,o;return __generator(this,function(a){switch(a.label){case 0:t=normalizeModuleId(e),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,viteNodeHandle.fetchModule({moduleId:e})];case 2:if(i=a.sent(),r=quokkaSettings.instrumentedFiles[t],r&&global.$_$coverage){for(n=new Array(r.instrumented.ranges.length),s=0;s<r.instrumented.ranges.length;s++)n[s]={};global.$_$coverage[1]=n,r.lineMap=utils.updateFileMap({},[i.map]),tracer.sendTransformedFile(r)}return delete i.map,[2,i];case 3:throw o=a.sent(),"string"==typeof o?new Error(o):o.frame?new Error("Error while loading module "+(o.plugin?"(plugin: "+o.plugin+")":"")+": "+t+":\n"+o.frame):o;case 4:return[2]}})})}})];case 3:return _a.sent(),[2]}})})}function createViteNode(){return __awaiter(this,void 0,void 0,function(){var e,t,i=this;return __generator(this,function(r){return e=require("child_process").fork,t=path.join(__dirname,"vite-server.js"),[2,new Promise(function(r,n){function s(e,t){return new Promise(function(i,r){c[l]={resolve:i,reject:r},o.send({type:e,id:l,payload:t}),l++})}var o=e(t,[],{stdio:["ignore","ignore","ignore","ipc"]});o.unref(),o.channel.unref();var a={transform:function(e){var t=e.transformed,r=e.fileName;return __awaiter(i,void 0,void 0,function(){var e,i,n,s,o;return __generator(this,function(a){if(!global.$_$coverage)return[2,t];t.map&&t.map.sources&&(t.map.sources=t.map.sources.map(function(e){return e?e:quokkaSettings.viteFile.path})),t.map&&(quokkaSettings.viteFile.changeStart||quokkaSettings.viteFile.logMarkers&&quokkaSettings.viteFile.logMarkers.length||quokkaSettings.viteFile.extractedComments&&!quokkaSettings.viteFile.extractedComments.isCoverageIgnored||quokkaSettings.viteFile.test)&&(e=new utils.SourceMapConsumer(t.map)),i=utils.mapTextPosition(quokkaSettings.viteFile.changeStart&&quokkaSettings.viteFile.changePosition,e),n=quokkaSettings.viteFile.logMarkers||[];try{s=utils.instrument(t.code,{file:quokkaSettings.viteFile.id,test:quokkaSettings.viteFile.test,fileName:path.basename(quokkaSettings.viteFile.path),testFileChangeStart:i,hints:global.$_$tracer._hints,recordValues:global.$_$tracer._autoConsoleLog,captureConsoleLog:!0,recordMatchSnapshotRanges:!0,preserveComments:global.$_$tracer._preserveComments,logMarkers:n.map(function(t){return{originalRange:t.range,range:utils.mapOriginalRangeToTransformed(e,t.range),changeId:t.id,traceId:t.traceId,expanded:t.expanded,"new":t["new"],exp:t.exp,action:t.action}}),extractedComments:utils.remapComments(quokkaSettings.viteFile.extractedComments,t.code,e),sequenceExpressionToDiff:!0})}catch(l){throw utils.formatInstrumentationError(l,t.code,quokkaSettings.viteFile.path)}return s.liveCommentLines&&t.map?(e||(e=new utils.SourceMapConsumer(t.map)),s.liveCommentLines=_.chain(s.liveCommentLines).map(function(e,t){return{line:parseInt(t,10),column:e+1}}).map(function(t){var i=t.line,r=t.column;return utils.mapTransformedRangeToOriginal(e,[i,r,i,r])}).filter(function(e){return e&&e.length}).map(function(e){return e[0]}).value()):s.liveCommentLines&&(s.liveCommentLines=Object.keys(s.liveCommentLines).map(function(e){return parseInt(e,10)}).filter(function(e){return e}).map(function(e){return e})),o={id:quokkaSettings.viteFile.id,transformed:_.omit(t,"code"),instrumented:_.omit(s,"code","map"),ts:quokkaSettings.viteFile.ts,originalTs:quokkaSettings.viteFile.originalTs,runnerCacheKey:quokkaSettings.viteFile.runnerCacheKey,transformedTime:(new Date).toISOString()},quokkaSettings.instrumentedFiles[r]=o,[2,{code:s.code,map:s.map}]})})}},l=1,c={},u={};u.reset=function(e){return __awaiter(i,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return l=1,c={},[4,s("reset",e)];case 1:return t.sent(),[2]}})})},u.resolveId=function(e){return __awaiter(i,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,s("resolveId",e)];case 1:return[2,t.sent()]}})})},u.fetchModule=function(e){return __awaiter(i,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,s("fetchModule",e)];case 1:return[2,t.sent()]}})})},o.once("message",function(e){return __awaiter(i,void 0,void 0,function(){var t,i=this;return __generator(this,function(l){switch(l.label){case 0:return o.on("message",function(e){return __awaiter(i,void 0,void 0,function(){var t,i,r,n,s,i,l,u;return __generator(this,function(h){switch(h.label){case 0:return e?e.returnId?(t=e.returnId,i=e.result,r=e.error,c[t]&&(r?(n=JSON.parse(r),s=new Error,Object.keys(n).forEach(function(e){s[e]=n[e]}),c[t].reject(s)):c[t].resolve(i),delete c[t]),[3,5]):[3,1]:[3,5];case 1:if(!(e&&e.type&&a[e.type]))return[3,5];h.label=2;case 2:return h.trys.push([2,4,,5]),[4,a[e.type](e.payload)];case 3:return i=h.sent(),e.id&&o.send({returnId:e.id,result:i}),[3,5];case 4:return l=h.sent(),e.id&&(u=__assign(__assign({},l),{message:l.message,stack:l.stack}),o.send({returnId:e.id,error:JSON.stringify(u)})),[3,5];case 5:return[2]}})})}),"ready"!==e.type?[3,2]:[4,s("start",{localProjectRoot:localProjectRoot,vitePath:quokkaSettings.vite.vitePath,viteNodeServerPath:quokkaSettings.vite.viteNodeServerPath,quokkaSettingsDirPath:path.dirname(quokkaSettings.globalConfigFile),quokkaTempDirPath:quokkaSettings.tempDir})];case 1:return t=l.sent(),u.config=t,r(u),[3,3];case 2:n(e.error||"Unknown error starting vite node"),l.label=3;case 3:return o.on("error",function(e){n(e)}),[2]}})})})})]})})}var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,i,r){function n(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r["throw"](e))}catch(t){s(t)}}function l(e){e.done?i(e.value):n(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return r([e,t])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,s&&(o=2&i[0]?s["return"]:i[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,s=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(r){i=[6,r],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},__read=this&&this.__read||function(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var r,n,s=i.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s["return"])&&i.call(s)}finally{if(n)throw n.error}}return o},__spreadArray=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},path=require("path"),url=require("url"),Module=require("module"),tracer=global.$_$tracer,utils=tracer._utils,file,entryModule,quokkaSettings={},quokkaSettingsDirPath,quokkaSettingsDirNodeModulesPath,quokkaTempDirNodeModulesPath,beforeExitHandlers=[],startTime,serverPath=path.dirname(process.mainModule.filename),viteNodeHandlePromise;utils.patchModulesCode([{files:["scheduler/cjs/scheduler.development.js"],replacements:[{from:"typeof window === 'undefined'",to:"true || typeof window === 'undefined'"}]},{files:["tsconfig-paths/lib/register.js"],replacements:[{from:"if (!isCoreModule) {",to:"if (!isCoreModule && (!_parent || !require('path').relative(configLoaderResult.absoluteBaseUrl, _parent.filename).startsWith('..'))) {"}]}]),patchConsoleError(),tracer._maxLogEntrySize=1048576,tracer._hiddenGlobalProps={$_$baseDir:1,$_$slow:1,$_$testFiles:1,$_$tests:1,$_$session:1,$_$initialSpecId:1,$_$coverage:1},process.on("unhandledRejection",function(e){throw e});var localProjectRoot=path.dirname(global.wallaby._localNodeModules);try{quokkaSettings=JSON.parse(process.env.quokka),quokkaSettingsDirPath=path.dirname(quokkaSettings.globalConfigFile);var quokkaTempDirPath=quokkaSettings.tempDir;quokkaSettings.nativeEsm&&(tracer._esm={localProjectDirUrl:url.pathToFileURL(localProjectRoot).href,settingsDirUrl:url.pathToFileURL(quokkaSettingsDirPath).href,tempDirUrl:url.pathToFileURL(quokkaTempDirPath).href}),quokkaSettingsDirNodeModulesPath=path.join(quokkaSettingsDirPath,"node_modules"),quokkaTempDirNodeModulesPath=path.join(quokkaTempDirPath,"node_modules")}catch(e){}var requireFromTheProjectAndGlobalSettingsContext=function(e){var t=Module._load(e,entryModule,!1);try{var i=Module._resolveFilename(e,entryModule,!1);tracer._doWhenReceiverIsReady(function(){tracer._send("module",{path:i})})}catch(r){}return t};requireFromTheProjectAndGlobalSettingsContext.extensions=require.extensions,requireFromTheProjectAndGlobalSettingsContext.resolve=require.resolve;var rootEntryModule=new Module(".",null);rootEntryModule.filename=path.join(localProjectRoot,"index.js"),rootEntryModule.path=localProjectRoot,rootEntryModule.paths=Module._nodeModulePaths(localProjectRoot).concat([quokkaSettingsDirNodeModulesPath,quokkaTempDirNodeModulesPath]);var requireForPlugin=function(e){if(!e||"."!==e[0])return Module._load(e,rootEntryModule,!1);try{return Module._load(path.resolve(quokkaSettingsDirPath,e),rootEntryModule,!1)}catch(t){return Module._load(e,rootEntryModule,!1)}};requireForPlugin.extensions=require.extensions,requireForPlugin.resolve=require.resolve;var hideProp=function(e){Object.defineProperty(global,e,{enumerable:!1,value:global[e]})};Object.keys(global).filter(function(e){return"wallaby"===e||0===e.indexOf("$_$")}).forEach(function(e){hideProp(e)}),require.extensions[".jsx"]=require.extensions[".js"];var registerAssetExtensions=function(){[".png",".svg",".ico","jpeg",".jpg",".css",".less",".scss",".sass",".htm",".html"].forEach(function(e){require.extensions[e]=function(){}})};tracer._identifierExpressionAutoLogHitLimit=10,tracer._logLimit=Math.max(quokkaSettings.logLimit||100,10);var toInitialize={vite:!0,babel:!0,ts:!0,js:!0,plugins:!0,globals:["assert","events","fs","os","path"]},runBeforeEach=[],starter={quokkaStackTraceMarker:function(){return __awaiter(this,void 0,void 0,function(){var sessionId,babelConfig,babelMajorVersion,ignore,tsNodeOptions,tsNodePath,tsNode,tsNodeInstance,semver,tsNodeEsmResolveImplPath,tsNodeEsmResolveImpl,tsNodeEsmResolveImplOptions,tsNodeEsmResolveImplPath,tsNodeEsmResolveImpl,tsNodeEsmResolveImplOptions,tsConfigPaths,_a,absoluteBaseUrl,paths,beforeExitHandler,runner;return __generator(this,function(_b){switch(_b.label){case 0:if(sessionId=global.$_$session,global.$_$resolveGetters=quokkaSettings.resolveGetters,quokkaSettings.vite)toInitialize.vite&&(global._quokkaLazyLoadHelperFunctions(),viteNodeHandlePromise=createViteNode(),toInitialize.vite=!1);else{if(quokkaSettings.babel&&toInitialize.babel){if(babelConfig={ignore:"string"==typeof quokkaSettings.babel.ignore?new RegExp(quokkaSettings.babel.ignore):"[object Array]"===Object.prototype.toString.call(quokkaSettings.babel.ignore)?quokkaSettings.babel.ignore:function(e){return~e.indexOf("quokka.js")||~e.indexOf("node_modules")},presets:quokkaSettings.babel.presets,plugins:quokkaSettings.babel.plugins,extensions:[".js",".jsx",".es6",".es",".mjs",".ts",".tsx",".cjs",".mjs",".cts",".mts"]},babelMajorVersion=NaN,quokkaSettings.babel.version&&(babelMajorVersion=parseInt(quokkaSettings.babel.version.split(".")[0],10)),babelMajorVersion>=7){utils.patchBabelResolve(quokkaSettings.babel.path);try{"[object Array]"!==Object.prototype.toString.call(babelConfig.ignore)&&(babelConfig.ignore=[babelConfig.ignore]),require(path.join(path.dirname(quokkaSettings.babel.path),"register"))(babelConfig)}catch(e){try{utils.patchModule("@babel/core",function(){return require(quokkaSettings.babel.path)}),require(quokkaSettings.babel.registerPath)(babelConfig)}catch(e){console.warn("@babel/register could not be launched properly. This may indicate that your project packages are not compatible with your current version of Quokka.\nPlease install @babel/register as a project dependency.\nYou may install the module in your project by running `npm install @babel/register` command.")}}}else require(path.join(quokkaSettings.babel.path,"register"))(babelConfig);if(quokkaSettings.babel.polyfill&&(babelMajorVersion>=7?require(path.join(path.dirname(quokkaSettings.babel.path),"polyfill")):require(path.join(path.dirname(quokkaSettings.babel.path),"babel-polyfill"))),quokkaSettings.babel.tsconfigPaths)try{require(path.join(quokkaSettings.babel.tsconfigPaths.path,"register"))}catch(e){}delete toInitialize.babel}if(quokkaSettings.ts&&toInitialize.ts){ignore=quokkaSettings.ts.tsNode.ignore||["(?:^|/)node_modules/"],ignore=Array.isArray(ignore)?ignore:[ignore],ignore.push(serverPath),tsNodeOptions={compiler:process.env.TS_NODE_COMPILER,ignore:ignore},quokkaSettings.nativeEsm&&(tsNodeOptions.experimentalEsmLoader=!0,tsNodeOptions.transpileOnly=!0),tsNodePath=path.join(quokkaSettings.ts.tsNode.path),tsNode=require(tsNodePath),tsNodeInstance=tsNode.register(tsNodeOptions),quokkaSettings.nativeEsm&&(semver=require("semver"),tracer._esm.tsNode=tsNodeInstance,semver.gte(tsNode.VERSION,"10.8.0")?(tsNodeEsmResolveImplPath=path.join(tsNodePath,"/dist-raw/node-internal-modules-esm-resolve"),tsNodeEsmResolveImpl=require(tsNodeEsmResolveImplPath),tsNodeEsmResolveImplOptions=require(path.join(tsNodePath,"/dist/file-extensions")).getExtensions(tsNodeInstance.config,tsNodeInstance.options,tsNodeInstance.ts.version),tracer._esm.tsNodeResolve=tsNodeEsmResolveImpl.createResolve({extensions:tsNodeEsmResolveImplOptions,preferTsExts:tsNodeInstance.options.preferTsExts,tsNodeExperimentalSpecifierResolution:tsNodeInstance.options.experimentalSpecifierResolution})):(tsNodeEsmResolveImplPath=path.join(tsNodePath,"/dist-raw/node-esm-resolve-implementation"),tsNodeEsmResolveImpl=require(tsNodeEsmResolveImplPath),tsNodeEsmResolveImplOptions=tsNode.getExtensions(tsNodeInstance.config),tsNodeEsmResolveImplOptions.preferTsExts=tsNodeInstance.options.preferTsExts,tracer._esm.tsNodeResolve=tsNodeEsmResolveImpl.createResolve(tsNodeEsmResolveImplOptions)));try{if(quokkaSettings.ts.tsconfigPaths){if(quokkaSettings.nativeEsm)try{tsConfigPaths=require(quokkaSettings.ts.tsconfigPaths.path),quokkaSettings.ts.compilerOptions&&quokkaSettings.ts.compilerOptions.baseUrl&&quokkaSettings.ts.compilerOptions.paths?tracer._esm.tsConfigPathsMatchPath=tsConfigPaths.createMatchPath(quokkaSettings.ts.compilerOptions.baseUrl,quokkaSettings.ts.compilerOptions.paths):(_a=tsConfigPaths.loadConfig(),absoluteBaseUrl=_a.absoluteBaseUrl,paths=_a.paths,tracer._esm.tsConfigPathsMatchPath=tsConfigPaths.createMatchPath(absoluteBaseUrl,paths))}catch(e){}quokkaSettings.ts.compilerOptions&&quokkaSettings.ts.compilerOptions.baseUrl&&quokkaSettings.ts.compilerOptions.paths?require(path.join(quokkaSettings.ts.tsconfigPaths.path,"lib","register")).register(quokkaSettings.ts.compilerOptions):require(path.join(quokkaSettings.ts.tsconfigPaths.path,"register"))}}catch(e){}delete toInitialize.ts}if(quokkaSettings.js&&toInitialize.js&&quokkaSettings.js.compilerOptions&&quokkaSettings.js.compilerOptions.baseUrl&&quokkaSettings.js.compilerOptions.paths){try{require(path.join(quokkaSettings.js.tsconfigPaths.path,"lib","register")).register(quokkaSettings.js.compilerOptions)}catch(e){}delete toInitialize.js}}if(quokkaSettings.plugins&&toInitialize.plugins){if(quokkaSettings.builtInPlugins&&quokkaSettings.builtInPlugins.find(function(e){return"auto-detect:create-react-app"===e}))try{global.React=requireForPlugin("react")}catch(e){}"string"==typeof quokkaSettings.plugins&&(quokkaSettings.plugins=[quokkaSettings.plugins]),quokkaSettings.plugins.slice().forEach(function(e){if("jsdom-quokka-plugin"===e){var t=require("./jsdomQuokkaPlugin");t.before&&t.before(requireForPlugin,quokkaSettings),t.beforeEach&&runBeforeEach.push(t.beforeEach)}else{var i=requireForPlugin(e);i.before&&i.before(quokkaSettings),i.beforeEach&&runBeforeEach.push(i.beforeEach)}}),delete toInitialize.plugins}toInitialize.globals&&(toInitialize.globals.forEach(function(e){global[e]||(global[e]=require(e))}),delete toInitialize.globals),runBeforeEach.forEach(function(e){e(quokkaSettings)}),registerAssetExtensions(),beforeExitHandler=function(){if(tracer._asyncCodeMayBeExecuting=!1,tracer.refWebSocket(),sessionId!==global.$_$session)return void delete tracer._pong;var e;if(startTime){var t=process.hrtime(startTime);e=(1e3*t[0]+t[1]/1e6).toFixed(2)}tracer._pong&&(tracer._pong(),delete tracer._pong),tracer.complete({time:e})},process.once("beforeExit",beforeExitHandler),beforeExitHandlers.push(beforeExitHandler),runner={quokkaStackTraceMarker:function(){return __awaiter(this,void 0,void 0,function(){var viteNodeHandle,fileUrl;return __generator(this,function(_a){switch(_a.label){case 0:return startTime=process.hrtime(),quokkaSettings&&quokkaSettings.vite?[4,viteNodeHandlePromise]:[3,3];case 1:return viteNodeHandle=_a.sent(),[4,startViteWorker(viteNodeHandle)];case 2:return[2,_a.sent()];case 3:return quokkaSettings&&quokkaSettings.nativeEsm?(fileUrl=url.pathToFileURL(file.path.replace(/$quokka.js^/,"quokka.mjs")),fileUrl.href=fileUrl.href+"?session="+sessionId,tracer._esm.scratchFileUrl=fileUrl.href,tracer._esm.scratchFileContent=file.content,global.$_$esmHooksPort&&(global.$_$esmHooksPort.postMessage({quokkaSettings:quokkaSettings,serverPath:serverPath,scratchFileUrl:fileUrl.href,scratchFileContent:file.content,localProjectDirUrl:tracer._esm.localProjectDirUrl,settingsDirUrl:tracer._esm.settingsDirUrl,tempDirUrl:tracer._esm.tempDirUrl,sessionId:sessionId}),global.$_$esmHooksPort.onmessage=function(e){e&&e.data&&"tracer._doWhenReceiverIsReady._send"===e.data.method&&tracer._doWhenReceiverIsReady(function(){tracer._send.apply(tracer,e.data.args)})}),[4,eval("import(fileUrl)")]):[3,5];case 4:return _a.sent(),[3,6];case 5:entryModule._compile(file.content,file.path),_a.label=6;case 6:return[2]}})})}},_b.label=1;case 1:return _b.trys.push([1,,3,4]),[4,runner.quokkaStackTraceMarker()];case 2:return _b.sent(),[3,4];case 3:return tracer._asyncCodeMayBeExecuting=!0,tracer.unrefWebSocket(),global.$_$esmHooksPort&&global.$_$esmHooksPort.unref&&global.$_$esmHooksPort.unref(),[7];case 4:return[2]}})})}};tracer.start(starter.quokkaStackTraceMarker),module.exports={init:function(e){return file={path:e[0],content:global.$_$testFiles[0].content},entryModule=new Module(".",null),entryModule.filename=file.path,entryModule.path=path.dirname(file.path),entryModule.paths=Module._nodeModulePaths(path.dirname(entryModule.filename)).concat([quokkaTempDirNodeModulesPath,quokkaSettingsDirNodeModulesPath]),entryModule.require=requireFromTheProjectAndGlobalSettingsContext,quokkaSettings&&(quokkaSettings.vite&&(quokkaSettings.viteFile=global.$_$testFiles[0],quokkaSettings.instrumentedFiles={}),quokkaSettings.filePath=file.path),beforeExitHandlers.forEach(function(e){process.removeListener("beforeExit",e)}),beforeExitHandlers.length=0,Object.keys(tracer._hiddenGlobalProps).forEach(function(e){hideProp(e)}),{}}};