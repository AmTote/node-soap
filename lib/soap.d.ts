import BluebirdPromise from 'bluebird';
import { Client } from './client';
import * as _security from './security';
import { Server, ServerType } from './server';
import { IOptions, IServerOptions, IServices } from './types';
export declare const security: typeof _security;
export { Client } from './client';
export { HttpClient } from './http';
export { BasicAuthSecurity, BearerSecurity, ClientSSLSecurity, ClientSSLSecurityPFX, NTLMSecurity, WSSecurity, WSSecurityCert } from './security';
export { Server } from './server';
export { passwordDigest } from './utils';
export * from './types';
export declare type CreateClientCallback = (err: any, client: Client) => void;
export declare function createClient(url: string, callback: CreateClientCallback, endpoint?: string): void;
export declare function createClient(url: string, options: IOptions, callback: CreateClientCallback, endpoint?: string): void;
export declare function createClientAsync(url: string, options: IOptions, endpoint?: string): BluebirdPromise<Client>;
export declare function listen(server: ServerType, path: string, services: IServices, wsdl: string): Server;
export declare function listen(server: ServerType, options: IServerOptions): Server;
