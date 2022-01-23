import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
const pdfMake = require('pdfmake/build/pdfmake.js')
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  @ViewChild('form') form: ElementRef;
  constructor() { }

  importers_code: number = 10;
  ngOnInit(): void {
  }

  generatePDF() {
    let docDefinition = {
      content: [
        { text: "D-48A", style: 'header' },
        { text: 'Application for Issue of Documentary Credit', style: 'main_title' },
        { text: `Importer's Code No. ${this.importers_code}`, style: 'importers_code' },
        {
          columns: [
            {
              width: '60%',
              text: ['I / We request you in pursuance of import LC limit of ', { "text": "Rs 10000", style: "para_one" }, ' sanctioned to me/us on ', { "text": '13th Feb 2022', style: "para_one" }, ', by Air Mail/Telex/Cable/SWIFT, please establish with your Branch/Correspondents in ', { "text": "SHIVAJI PARK", style: "para_one" }, ' a Documentary Credit as per details below: '],
              margin: [0,0,25,0]
            },
            {
              width: '40%',
              table: {
                widths: ['20%', '80%'],
                body: [
                  [{ 'text': '20', bold: true, alignment: 'center' }, { 'text': ['L/C No.', { "text": '1023', bold: true, italics: true, decoration: 'underline' }] }],
                  [{ 'text': '31C', bold: true, alignment: 'center' }, { 'text': ['Date: ', { "text": '21/01/2022', bold: true, italics: true, decoration: 'underline' }] }],
                  [{ 'text': '23', bold: true, alignment: 'center' }, { 'text': ['Preadvised on :', { "text": '14/01/2022', bold: true, italics: true, decoration: 'underline' }] }]
                ]
              }
            }
          ],
          margin: [0,0,0,30]
        },
        {
          table: {
            widths: ['20%', '30%', '20%', '30%'],
            body: [
              [{'text': '40A'},{'text': 'Type Of LC'}, {'text': 'Irrevocable', colSpan: 2}, {}]
            ],
            margin: [0,250,0,0]
          }
        }
      ],
      "styles": {
        "header": {
          fontSize: 15,
          bold: true
        },
        "main_title": {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          lineHeight: 2
        },
        "importers_code": {
          fontSize: 15,
          alignment: 'right',
          lineHeight: 2,
          margin: 10
        },
        "para_one": {
          bold: true,
          italics: true,
          decoration: 'underline'
        }
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }
}