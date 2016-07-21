/**
 * Webida Restful API
 * Restful API for Webida clients to use server's data & features
 *
 * OpenAPI spec version: 0.7.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Alias', 'model/ChildProcess', 'model/Credential', 'model/DirEntry', 'model/Execution', 'model/ExecutionResult', 'model/Match', 'model/RemoteAccess', 'model/RestError', 'model/RestOK', 'model/Session', 'model/Stats', 'model/Token', 'model/User', 'model/Workspace', 'api/AliasApi', 'api/AuthApi', 'api/OpsApi', 'api/RemotesApi', 'api/SessionApi', 'api/WfsApi', 'api/WorkspaceApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Alias'), require('./model/ChildProcess'), require('./model/Credential'), require('./model/DirEntry'), require('./model/Execution'), require('./model/ExecutionResult'), require('./model/Match'), require('./model/RemoteAccess'), require('./model/RestError'), require('./model/RestOK'), require('./model/Session'), require('./model/Stats'), require('./model/Token'), require('./model/User'), require('./model/Workspace'), require('./api/AliasApi'), require('./api/AuthApi'), require('./api/OpsApi'), require('./api/RemotesApi'), require('./api/SessionApi'), require('./api/WfsApi'), require('./api/WorkspaceApi'));
  }
}(function(ApiClient, Alias, ChildProcess, Credential, DirEntry, Execution, ExecutionResult, Match, RemoteAccess, RestError, RestOK, Session, Stats, Token, User, Workspace, AliasApi, AuthApi, OpsApi, RemotesApi, SessionApi, WfsApi, WorkspaceApi) {
  'use strict';

  /**
   * Restful_API_for_Webida_clients_to_use_servers_data__features.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WebidaRestfulApi = require('index'); // See note below*.
   * var xxxSvc = new WebidaRestfulApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WebidaRestfulApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WebidaRestfulApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WebidaRestfulApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.7.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Alias model constructor.
     * @property {module:model/Alias}
     */
    Alias: Alias,
    /**
     * The ChildProcess model constructor.
     * @property {module:model/ChildProcess}
     */
    ChildProcess: ChildProcess,
    /**
     * The Credential model constructor.
     * @property {module:model/Credential}
     */
    Credential: Credential,
    /**
     * The DirEntry model constructor.
     * @property {module:model/DirEntry}
     */
    DirEntry: DirEntry,
    /**
     * The Execution model constructor.
     * @property {module:model/Execution}
     */
    Execution: Execution,
    /**
     * The ExecutionResult model constructor.
     * @property {module:model/ExecutionResult}
     */
    ExecutionResult: ExecutionResult,
    /**
     * The Match model constructor.
     * @property {module:model/Match}
     */
    Match: Match,
    /**
     * The RemoteAccess model constructor.
     * @property {module:model/RemoteAccess}
     */
    RemoteAccess: RemoteAccess,
    /**
     * The RestError model constructor.
     * @property {module:model/RestError}
     */
    RestError: RestError,
    /**
     * The RestOK model constructor.
     * @property {module:model/RestOK}
     */
    RestOK: RestOK,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The Stats model constructor.
     * @property {module:model/Stats}
     */
    Stats: Stats,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace: Workspace,
    /**
     * The AliasApi service constructor.
     * @property {module:api/AliasApi}
     */
    AliasApi: AliasApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The OpsApi service constructor.
     * @property {module:api/OpsApi}
     */
    OpsApi: OpsApi,
    /**
     * The RemotesApi service constructor.
     * @property {module:api/RemotesApi}
     */
    RemotesApi: RemotesApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The WfsApi service constructor.
     * @property {module:api/WfsApi}
     */
    WfsApi: WfsApi,
    /**
     * The WorkspaceApi service constructor.
     * @property {module:api/WorkspaceApi}
     */
    WorkspaceApi: WorkspaceApi
  };

  return exports;
}));
