export * from './jobsApi';
import { JobsApi } from './jobsApi';
export * from './pdfApi';
import { PdfApi } from './pdfApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [JobsApi, PdfApi, TemplatesApi];
