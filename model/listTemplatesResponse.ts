/**
 * PDFGen API
 * The PDFGen API for HTML to PDF generation.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@pdfgen.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { TemplateResponse } from './templateResponse';

export class ListTemplatesResponse {
    'templates': Array<TemplateResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<TemplateResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ListTemplatesResponse.attributeTypeMap;
    }
}

