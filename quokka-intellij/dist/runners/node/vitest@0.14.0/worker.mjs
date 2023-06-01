import*as url from"url";import*as path from"path";import BuiltinModule from"module";const Module=BuiltinModule;export function addHook(e,t={}){let a=!1;const s=[],o=[];let r;const l=Module._extensions[".js"];t.matcher,t.ignoreNodeModules;return r=t.extensions||t.exts||t.extension||t.ext||[".js"],Array.isArray(r)||(r=[r]),r.forEach((t=>{if("string"!=typeof t)throw new TypeError(`Invalid Extension: ${t}`);const r=Module._extensions[t]||l;o[t]=Module._extensions[t],s[t]=Module._extensions[t]=function(t,s){let o;a||(o=t._compile,t._compile=function(a){t._compile=o;const r=e(a,s);if("string"!=typeof r)throw new Error(HOOK_RETURNED_NOTHING_ERROR_MESSAGE);return t._compile(r,s)}),r(t,s)}})),function(){a||(a=!0,r.forEach((e=>{Module._extensions[e]===s[e]&&(o[e]?Module._extensions[e]=o[e]:delete Module._extensions[e])})))}}const commonJsPatches=[{files:["@testing-library/dom/dist/pretty-dom.js"],replacements:[{from:"highlight: inNode()",to:"highlight: false",optional:!0},{from:"highlight: shouldHighlight(),",to:"highlight: false,",optional:!0},{from:"const logDOM = (...args) =>",to:"const logDOM = (...args) => (console.log(prettyDOM(...args)), prettyDOM(...args));const logDOM_ = (...args) =>",optional:!0}]},{files:["@testing-library/react/dist/pure.js"],replacements:[{from:"el.forEach(e => console.log((0, _dom.prettyDOM)(e, maxLength, options)))",to:"el.map(e => (console.log((0, _dom.prettyDOM)(e, maxLength, options)), _dom.prettyDOM(e, maxLength, options)))",optional:!0},{from:"console.log((0, _dom.prettyDOM)(el, maxLength, options))",to:"(console.log((0, _dom.prettyDOM)(el, maxLength, options)), _dom.prettyDOM(el, maxLength, options))",optional:!0}]},{files:["@testing-library/react-native/build/helpers/format.js"],replacements:[{from:"highlight: true",to:"highlight: false",optional:!0}]},{files:["@testing-library/react-native/build/helpers/debugDeep.js"],replacements:[{from:"console.log((0, _format.default)(instance));",to:"return (console.log((0, _format.default)(instance)), _format.default(instance));",optional:!0}]}];commonJsPatches.forEach((e=>{e.files.forEach((t=>{addHook(((a,s)=>(s.endsWith(t)&&e.replacements.forEach((e=>{if(-1===a.indexOf(e.from)){if(!e.optional)throw new Error(`Failed to patch ${t} in ${s}`)}else a=a.replace(e.from,e.to)})),a)))}))}));const pendingMessages=[];let sending=!1;async function sendWorkerMessageToRunner(e,t){let a;const s=new Promise((e=>{a=e}));if(pendingMessages.push({type:e,sessionId:global.$_$session,payload:t,done:a}),globalThis.__vitest_worker__&&globalThis.__vitest_worker__.rpc&&!sending){sending=!0;try{for(;pendingMessages.length;){const e=pendingMessages.shift();try{await globalThis.__vitest_worker__.rpc.onWallabyWorkerMessage({type:e.type,sessionId:e.sessionId,payload:e.payload}),e.done()}catch(e){globalThis.__vitest_worker__.rpc.onWallabyWorkerMessage({type:"debugLog",sessionId:global.$_$session,payload:e.toString()})}}}finally{sending=!1}}await s}export async function run(ctx){let patchingFailed=!1;const esmHooks=await eval(`import('${url.pathToFileURL(ctx.wallabyContext.esmHooksPath)}')`);if(ctx.config.deps.registerNodeLoader){const vitestLoader=await eval(`import('${url.pathToFileURL(ctx.wallabyContext.vitestDistLoader)}')`);esmHooks.setExternalLoad(vitestLoader.load),esmHooks.setExternalResolve(vitestLoader.resolve)}esmHooks.patchFile(ctx.wallabyContext.viteNodeUtils,[{key:"fetchModule",from:"{ code: transformed, externalize } = await this.options.fetchModule(id);",to:"{ code: transformed, externalize } = global.$_$wallabyVitest.wrapFetchedModule(id, await this.options.fetchModule(id));"},{key:"fetchModule",from:"{ code: transformed, externalize } = await this.options.fetchModule(resolvedId || dep);",to:"{ code: transformed, externalize } = global.$_$wallabyVitest.wrapFetchedModule(resolvedId || dep, await this.options.fetchModule(id));"}]),ctx.wallabyContext.entryFilePath&&esmHooks.patchFile(ctx.wallabyContext.entryFilePath,[{key:"collected",from:"rpc().onCollected(files)",to:"rpc().onCollected(files, global.$_$session);"}]),esmHooks.patchFile(ctx.wallabyContext.vendorEntryFilePath,[{from:"const hasOnlyTasks",to:"global.$_$wallabyVitest.adjustFileTasks(file); const hasOnlyTasks"},{key:"updateTask",from:"function updateTask(task) {",to:"function updateTask(task) { global.$_$wallabyVitest.updateTask(task); "},{key:"updateTask",from:"function updateTask(task, runner) {",to:"function updateTask(task, runner) { global.$_$wallabyVitest.updateTask(task); "},{key:"getFn",from:"await getFn(test)();",to:"global.$_$wallabyVitest.getFn(test); await getFn(test)();"},{key:"getFn",from:"const fn = getFn(test);",to:"global.$_$wallabyVitest.getFn(test); const fn = getFn(test);"},{key:"runSuite",from:"await runSuite(file);",to:"global.$_$wallabyVitest.runSuite(file); await runSuite(file);"},{key:"runSuite",from:"await runSuite(file, runner);",to:"global.$_$wallabyVitest.runSuite(file); await runSuite(file, runner);"},{key:"collected",from:"rpc().onCollected(files);",to:"rpc().onCollected(files, global.$_$session);"},{key:"collected",from:"rpc().onCollected(files);",to:"rpc().onCollected(files, global.$_$session);"},{key:"collected",from:"(_b = runner.onCollected) == null ? void 0 : _b.call(runner, files);",to:"(_b = runner.onCollected) == null ? void 0 : _b.call(runner, files, global.$_$session);"}]);const skippedTests=[],testsToRun=[];Object.keys(ctx.wallabyContext.globals).forEach((e=>{global[e]=ctx.wallabyContext.globals[e]})),global.$_$reuseableTracer=!0,global.$_$receiver={send(e){sendWorkerMessageToRunner("receiverMessage",e)}},await import("../../../tracer.js");const tracer=global.$_$tracer;function normalizePath(e){return e?e.replace("win32"===process.platform?"file:///":"file://","").split(path.sep).join("/"):e}function getFileData(e){-1!==e.indexOf("?wallaby=")&&(e=e.substr(0,e.indexOf("?wallaby=")));const t=ctx.wallabyContext.globals.wallaby.localProjectDir,a=ctx.wallabyContext.globals.wallaby.projectCacheDir;let s=normalizePath(e.replace(t,"").replace(a,""));"/"===s[0]&&(s=s.substr(1));let o=tracer._filePathToFileData[s];return!o&&ctx.wallabyContext.normalizedRootPrefix&&(o=tracer._filePathToFileData[ctx.wallabyContext.normalizedRootPrefix+s]),o}function processErrors(e){if("string"==typeof e)return[{error:e,message:e,stack:null,passed:!1}];if(Array.isArray(e)){const t=[];return e.forEach((e=>{t.push(processErrors(e))})),t}try{const t={error:e,passed:!1};return e&&"AssertionError"===e.name?t.message=e?(e.message?e.message:e.toString()).split(" // ")[0]:"empty error":t.message=e?e.name&&e.message?e.name+": "+e.message:e.toString():"empty error",0===t.message.indexOf("Error:")&&(t.message=t.message.substr(7)),t.stack=e?e.stack:null,e&&e.showDiff&&(t.showDiff=!0,t.actual=e.actual,t.expected=e.expected),[t]}catch(e){return[{passed:!1,message:e.toString()}]}}tracer._shouldReportProgramScope=!0,tracer.initLoadingPhase(),tracer._highPriorityReceiver={send:function(e){sendWorkerMessageToRunner("receiverHighPriorityMessage",e)}},global.$_$receiver.onopen&&global.$_$receiver.onopen(),tracer._onStart=()=>{},Object.keys(ctx.wallabyContext.tracer).forEach((e=>{tracer[e]=ctx.wallabyContext.tracer[e]})),tracer._beforeMatchSnapshot=(e,t)=>{tracer._expectedMatchSnapshotCall=[e,t]},tracer._matchSnapshot=({key:e,snapshotPath:t})=>{if(!tracer._expectedMatchSnapshotCall)return;const[a,s]=tracer._expectedMatchSnapshotCall;delete tracer._expectedMatchSnapshotCall,tracer._matchSnapshotCalls||(tracer._matchSnapshotCalls=[]),tracer._matchSnapshotCalls.push({fileId:a,snapshotCallRangeId:s,snapshotKey:e,snapshotPath:normalizePath(path.relative(ctx.wallabyContext.globals.wallaby.localProjectRoot,t))})},global.$_$wallabyVitest={wrapFetchedModule(e,t){if(t.coverage){const e=new Array(t.coverage.ranges);for(let a=0;a<t.coverage.ranges;a++)e[a]={};global.$_$coverage[t.coverage.id]=e,delete t.coverage}const a=t.filter;if(a){if(a.name){"*"===global.$_$tests&&(global.$_$tests={});(global.$_$tests[":?"]=global.$_$tests[":?"]||{})[":"+a.name]="*"}else global.$_$tests&&global.$_$tests[":?"]&&(global.$_$tests="*");delete t.filter}return t},adjustFileTasks(e){let t=tracer.initialSpecId();const a=tracer.hasSpecFilter(),s=(o,r)=>{for(const l of o.tasks)if(l.concurrent=!1,l.wallabyTestFileId=getFileData(e.filepath).id,"test"===l.type){l.wallabySpecId=++t,l.wallabySuite=r;const e=a&&!tracer.specFilter([...r,l.name]);if(e){skippedTests.push([...r,l.name].join(" > ")),l.mode="skip";continue}if("skip"===l.mode||"todo"===l.mode){skippedTests.push(l.name),tracer.specStart(l.wallabySpecId,l.name),tracer.specSyncEnd();const t=tracer.specEnd();e||tracer.result({id:l.wallabySpecId,timeRange:t,name:l.name,suite:l.wallabySuite,status:"todo"===l.mode?"todo":"skipped",time:0,testFile:l.wallabyTestFileId})}else testsToRun.push(l)}else s(l,[...r,l.name])};return s(e,[]),e},updateSnapshot:()=>tracer.canUpdateSnapshots()?"all":"new",inlineSnapshotSaved(e,t){sendWorkerMessageToRunner("inlineSnapshotSaved",{fileName:e,content:t})},runSuite(e){getFileData(e.filepath)&&tracer.started({total:"unknown number of"})},getFn(e){e.wallabyStarted||(e.wallabyStarted=!0,tracer.specSyncStart(),tracer.specStart(e.wallabySpecId,e.name))},updateTask(e){if(e.wallabySpecId&&e.result)if("run"!==e.result.state||e.wallabyStarted||e.wallabyPreStart){if(void 0!==e.result.duration&&!e.wallabyProcessed){e.wallabyProcessed=!0,tracer.specSyncEnd();const t=tracer.specEnd(),a={id:e.wallabySpecId,timeRange:t,name:e.name,suite:e.wallabySuite,status:"executed",time:e.result.duration,log:[],testFile:tracer.entryFile()};if(e.result.error){processErrors(e.result.error).forEach((e=>{a.log.push(tracer.setAssertionData(e,{message:e.message||"",stack:e.stack}))}))}e.wallabyStarted||(e.wallabyStarted=!0,a.log.push(tracer.setAssertionData({},{message:"Test execution did not start; check Suite Hooks for possible errors"}))),a.log.length||delete a.log,tracer.result(a)}}else e.wallabyPreStart=!0,tracer.programScopeStartLoading(e.wallabyTestFileId),tracer.specSyncStart()},canUpdateSnapshot:e=>!tracer._updateNoMoreThanOneSnapshotPerTestFileRun||0===e.updated,getSnapshotState(e){if(e&&e.snapshotState&&e.snapshotState.markSnapshotsAsCheckedForTest)try{skippedTests.forEach((t=>e.snapshotState.markSnapshotsAsCheckedForTest(t)))}catch(e){sendWorkerMessageToRunner("debugLog","Error processing skipped snapshots"),sendWorkerMessageToRunner("debugLog",e.toString())}}};const worker=await import(ctx.workerPath),run=worker.run;let inspectorSession;if(process.on("uncaughtException",(async(e,t)=>{let a=!0;for(let t=0;t<testsToRun.length;t++){const s=testsToRun[t];if(s.wallabyStarted){if(!s.wallabyProcessed){s.wallabyProcessed=!0,tracer.specSyncEnd();const t=tracer.specEnd(),o={id:s.wallabySpecId,timeRange:t,name:s.name,suite:s.wallabySuite,status:"executed",time:0,log:[],testFile:s.wallabyTestFileId};a=!1,o.log.push(tracer.setAssertionData(e,{message:e.message||"",stack:e.stack||"",passed:!1})),tracer.result(o)}}else{s.wallabyStarted=!0,s.wallabyProcessed=!0,tracer.specStart(s.wallabySpecId,s.name),tracer.specSyncEnd(),tracer.specSyncEnd();const t=tracer.specEnd(),a={id:s.wallabySpecId,timeRange:t,name:s.name,suite:s.wallabySuite,status:"executed",time:0,log:[],testFile:s.wallabyTestFileId};a.log.push(tracer.setAssertionData(e,{message:"Test never executed due to an uncaught exception",passed:!1})),tracer.result(a)}}a&&await sendWorkerMessageToRunner("uncaughtException",e),tracer.complete(),delete global.$_$coverage,delete global.$_$tests,delete global.$_$session,delete global.$_$initialSpecId,delete global.$_$profileRun,await sendWorkerMessageToRunner("complete",{})})),global.$_$profileRun){const e=await import("inspector");inspectorSession=new e.Session,inspectorSession.connect(),await new Promise((e=>{inspectorSession.post("Profiler.enable",(()=>{inspectorSession.post("Profiler.start",(()=>{e()}))}))}))}try{tracer.start(),await run(ctx)}catch(e){return{error:e}}finally{tracer.complete(),inspectorSession&&await new Promise((e=>{inspectorSession.post("Profiler.stop",(async(t,{profile:a})=>{t?(await sendWorkerMessageToRunner("uncaughtException",t),process.exit(1)):await sendWorkerMessageToRunner("profile",a),e()}))})),await sendWorkerMessageToRunner("complete",{}),delete global.$_$coverage,delete global.$_$tests,delete global.$_$session,delete global.$_$initialSpecId,delete global.$_$profileRun}return patchingFailed?{error:new Error("Patching Failed: Wallaby is not compatible with current version of Vitest.")}:{}}