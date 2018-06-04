export interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    {name: 'amcharts', src: 'https://www.amcharts.com/lib/3/amcharts.js'},
    {name: 'serial', src: 'https://www.amcharts.com/lib/3/serial.js'},
    {name: 'pie', src: 'https://www.amcharts.com/lib/3/pie.js'},
    {name: 'themes_light', src: 'https://www.amcharts.com/lib/3/themes/light.js'}
];
